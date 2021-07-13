import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import useHttp from "../hooks/use-http"
import Header from "../componenets/Header/Header"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import Menu from "../componenets/Menu/Menu"
import Loader from "../componenets/Loader/Loader"
import Message from "../componenets/Message/Message"
import NoRecipesFound from "../componenets/Recipes/NoRecipesFound/NoRecipesFound"
import { getAllRecipes } from "../DAL/api"
import ModalContext from "../store/ModalCtx/modal-context"

const HomePage = () => {
  const location = useLocation()
  console.log(location.state)
  const { handleOpenModal } = useContext(ModalContext)

  const {
    sendRequest,
    status,
    data: loadedRecipes,
    error,
  } = useHttp(getAllRecipes, true)

  useEffect(() => {
    if (location?.state?.isRedirect) {
      handleOpenModal()
    }
    sendRequest()
  }, [sendRequest])

  return (
    <>
      <Menu />
      <Header />

      {status === "pending" && <Loader />}
      {error && <Message> {error} </Message>}
      {status === "completed" &&
        (!loadedRecipes || loadedRecipes.length === 0) && <NoRecipesFound />}

      {loadedRecipes && (
        <span id="newestRecipesGallery">
          <RecipesList className="flex-container" recipes={loadedRecipes} />
        </span>
      )}
    </>
  )
}

export default HomePage
