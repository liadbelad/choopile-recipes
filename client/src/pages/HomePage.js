import React, { useEffect } from "react"
import useHttp from "../hooks/use-http"
import Header from "../componenets/Header/Header"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import Menu from "../componenets/Menu/Menu"
import Loader from "../componenets/Loader/Loader"
import Message from "../componenets/Message/Message"
import NoRecipesFound from "../componenets/Recipes/NoRecipesFound/NoRecipesFound"
import { getAllRecipes } from "../DAL/api"

const HomePage = () => {
  const {
    sendRequest,
    status,
    data: loadedRecipes,
    error,
  } = useHttp(getAllRecipes, true)

  useEffect(() => {
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
