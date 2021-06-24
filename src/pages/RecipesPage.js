import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import SearchBar from "../componenets/SearchBar/SearchBar"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import { getAllRecipesGallery } from "../DAL/api"

const RecipesPage = () => {
  const [recipes, setRecipes] = useState()

  const fetchRecipes = async () => {
    const recipes = await getAllRecipesGallery()
    setRecipes(recipes)
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
