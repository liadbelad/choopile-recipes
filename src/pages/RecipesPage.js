import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SearchBar from "../componenets/SearchBar/SearchBar"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"

const RecipesPage = () => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={4} className="mb-3">
          <SearchBar sm={12} />
          <CategoriesList />
        </Col>
        <Col md={8}>
          <RecipesList />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesPage
