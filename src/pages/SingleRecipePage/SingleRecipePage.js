import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col } from "react-bootstrap"
import styles from "./SingleRecipePage.module.scss"
import RecipeIngredients from "../../componenets/Recipes/RecipeIngredientsList/RecipeIngredients"
import { getFullRecipeDetailsByID } from "../../DAL/api"

const SingleRecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  const fetchRecipeDetails = async () => {
    const recipe = await getFullRecipeDetailsByID(+id)
    setRecipe(recipe)
  }

  useEffect(() => {
    fetchRecipeDetails()
  }, [])

  return (
    <Container className="my-5 ">
      <section className=" d-flex flex-column justify-content-center align-items-center ">
        <Card.Title as="h1">Card Title</Card.Title>
        <Card.Img
          className={styles["img-responsive"]}
          variant="bottom"
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        />
        <Row className="my-3">
          <Col md={4}>
            {recipe.ingredientsByTitle && (
              <RecipeIngredients
                ingredientsByTitle={recipe.ingredientsByTitle}
              />
            )}
          </Col>
          <Col md={8}>
            <p>
              Instructions baby Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Pariatur sapiente id ducimus et corporis
              perspiciatis, expedita nostrum, ratione aliquam non laboriosam
              tempora at similique blanditiis maxime, qui ut quo praesentium.
            </p>
            <p>
              Instructions baby Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Pariatur sapiente id ducimus et corporis
              perspiciatis, expedita nostrum, ratione aliquam non laboriosam
              tempora at similique blanditiis maxime, qui ut quo praesentium.
            </p>
            <p>
              Instructions baby Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Pariatur sapiente id ducimus et corporis
              perspiciatis, expedita nostrum, ratione aliquam non laboriosam
              tempora at similique blanditiis maxime, qui ut quo praesentium.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default SingleRecipePage
