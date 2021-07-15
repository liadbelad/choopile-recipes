import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col } from "react-bootstrap"
import styles from "./SingleRecipePage.module.scss"
import RecipeIngredients from "../../componenets/Recipes/RecipeIngredientsList/RecipeIngredients"
import RecipeInstructions from "../../componenets/Recipes/RecipeInstructions/RecipeInstructions"
import { getFullRecipeDetailsByID } from "../../DAL/api"
import useHttp from "../../hooks/use-http"
import Loader from "../../componenets/Loader/Loader"
import Message from "../../componenets/Message/Message"

const SingleRecipePage = () => {
  const {
    sendRequest,
    data: recipe,
    error,
    status,
  } = useHttp(getFullRecipeDetailsByID, true)
  const { id } = useParams()

  useEffect(() => {
    sendRequest(+id)
  }, [id, sendRequest])

  return (
    <>
      {status === "pending" && <Loader />}
      {error && <Message> {error} </Message>}

      {recipe && (
        <Container className="my-5">
          <section className="w-100 d-flex flex-column justify-content-center align-items-center ">
            <Card.Title as="h1"> {recipe.title} </Card.Title>
            <Card.Img
              className={styles["img-responsive"]}
              variant="bottom"
              src={`http://localhost:5000/images/${recipe.mainImageUrl}`}
            />
            <Row className="my-5 w-100">
              <Col md={4}>
                {recipe.ingredientsByTitle && (
                  <RecipeIngredients
                    ingredientsByTitle={recipe.ingredientsByTitle}
                  />
                )}
              </Col>
              <Col md={8}>
                {recipe.instructions && (
                  <RecipeInstructions instructions={recipe.instructions} />
                )}
              </Col>
            </Row>
          </section>
        </Container>
      )}
    </>
  )
}

export default SingleRecipePage
