import React, { useState, useEffect } from "react"
import useHttp from "../hooks/use-http"
import { Container, Row, Col } from "react-bootstrap"
import SearchBar from "../componenets/SearchBar/SearchBar"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import Loader from "../componenets/Loader/Loader"
import Message from "../componenets/Message/Message"
import NoRecipesFound from "../componenets/Recipes/NoRecipesFound/NoRecipesFound"
import { getAllRecipes, getRecipesByCategory } from "../DAL/api"

const RecipesPage = () => {
  const [showRecipes, setShowRecipes] = useState(true)

  const {
    sendRequest: sendAllRecipesRequest,
    status: allRecipesStatus,
    data: allRecipes,
    error: allRecipesError,
  } = useHttp(getAllRecipes, true)

  const {
    sendRequest: sendRecipesByCategoryRequest,
    status: recipesByCategoryStatus,
    data: recipesByCategory,
    error: recipesByCategoryError,
  } = useHttp(getRecipesByCategory)

  const handleGetRecipesBySelectedCategory = (categoryID) => {
    setShowRecipes(false)
    sendRecipesByCategoryRequest(categoryID)
  }

  useEffect(() => {
    sendAllRecipesRequest()
  }, [sendAllRecipesRequest])

  if (
    allRecipesStatus === "completed" &&
    (!allRecipes || allRecipes.length === 0)
  ) {
    return <NoRecipesFound />
  }

  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={4}>
          <SearchBar sm={12} />
          <CategoriesList
            onCategoryChange={handleGetRecipesBySelectedCategory}
          />
        </Col>
        <Col md={8}>
          {allRecipesStatus === "pending" && <Loader />}
          {recipesByCategoryStatus === "pending" && <Loader />}

          {allRecipesError && <Message> {allRecipesError} </Message>}
          {recipesByCategoryError && (
            <Message> {recipesByCategoryError} </Message>
          )}

          {!recipesByCategory && showRecipes && allRecipes && (
            <RecipesList recipes={allRecipes} />
          )}

          {recipesByCategory && recipesByCategory.length === 0 && (
            <NoRecipesFound />
          )}

          {recipesByCategory && <RecipesList recipes={recipesByCategory} />}
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesPage
