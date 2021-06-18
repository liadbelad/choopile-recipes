import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import RecipesList from "../componenets/RecipesList/RecipesList"

const RecipesPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={3} className="mb-3">
          Categories...
        </Col>
        <Col md={9}>
          <RecipesList />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesPage
