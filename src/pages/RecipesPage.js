import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useHistory, useLocation } from "react-router-dom"
import SearchBar from "../componenets/SearchBar/SearchBar"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import { getAllRecipesGallery, getUserRecipes } from "../DAL/api"

const RecipesPage = ({ isLogged = true, userID = 2 }) => {
  const [recipes, setRecipes] = useState()

  const location = useLocation()

  const history = useHistory()

  const fetchRecipes = async () => {
    if (location.pathname === "/recipes") {
      const recipes = await getAllRecipesGallery()
      setRecipes(recipes)
    }

    if (!isLogged && location.pathname === "/my-recipes") {
      history.push("/")
    }

    if (isLogged && location.pathname === "/my-recipes") {
      const recipes = await getUserRecipes(userID)
      setRecipes(recipes)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={4}>
          <SearchBar sm={12} />
          <CategoriesList />
        </Col>
        <Col md={8}>
          <RecipesList recipes={recipes} />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesPage
