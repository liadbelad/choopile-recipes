import React, { useState, useEffect, useContext } from "react"
import useHttp from "../hooks/use-http"
import { Container, Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import AuthContext from "../store/AuthCtx/auth-context"
import SearchBar from "../componenets/SearchBar/SearchBar"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import Loader from "../componenets/Loader/Loader"
import Message from "../componenets/Message/Message"
import NoRecipesFound from "../componenets/Recipes/NoRecipesFound/NoRecipesFound"
import { getUserRecipes, getUserRecipesByCategory } from "../DAL/api"

const MyRecipesPage = () => {
  const [showRecipes, setShowRecipes] = useState(true)

  const {
    sendRequest: sendUserRecipesRequest,
    status: userRecipesStatus,
    data: userRecipes,
    error: userRecipesError,
  } = useHttp(getUserRecipes)

  const {
    sendRequest: sendUserRecipesByCategoryRequest,
    status: userRecipesByCategoryStatus,
    data: userRecipesByCategory,
    error: userRecipesByCategoryError,
  } = useHttp(getUserRecipesByCategory)

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  const history = useHistory()

  const { isLoggedIn } = useContext(AuthContext)

  const handleGetUserRecipesBySelectedCategory = (categoryID) => {
    setShowRecipes(false)
    sendUserRecipesByCategoryRequest({ userID: userInfo.id, categoryID })
  }

  useEffect(() => {
    if (!userInfo) {
      history.push({
        pathname: "/",
        state: { isRedirect: true },
      })
      return
    } else {
      const { id: userID } = userInfo
      sendUserRecipesRequest(userID, true)
    }
  }, [sendUserRecipesRequest])

  if (
    userRecipesStatus === "completed" &&
    (!userRecipes || userRecipes.length === 0)
  ) {
    return <NoRecipesFound />
  }

  return (
    <>
      <Container fluid className="my-5">
        <Row>
          <Col md={4}>
            <SearchBar sm={12} />
            <CategoriesList
              onCategoryChange={handleGetUserRecipesBySelectedCategory}
            />
          </Col>
          <Col md={8}>
            {userRecipesStatus === "pending" && <Loader />}
            {userRecipesByCategoryStatus === "pending" && <Loader />}

            {userRecipesError && <Message> {userRecipesError} </Message>}
            {userRecipesByCategoryError && (
              <Message> {userRecipesError} </Message>
            )}

            {!userRecipesByCategory && showRecipes && userRecipes && (
              <RecipesList recipes={userRecipes} />
            )}

            {userRecipesByCategory && userRecipesByCategory.length === 0 && (
              <NoRecipesFound />
            )}

            {userRecipesByCategory && (
              <RecipesList recipes={userRecipesByCategory} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyRecipesPage
