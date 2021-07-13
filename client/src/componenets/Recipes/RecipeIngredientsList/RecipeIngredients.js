import React from "react"
import { ListGroup } from "react-bootstrap"

const IngredientsByTitleList = ({ title, ingredients }) => {
  return (
    <ListGroup className="mb-3">
      {title && <h6> {title}: </h6>}
      {ingredients.map(({ amount, measureUnit, name }, idx) => (
        <ListGroup.Item key={idx} style={{ border: "none" }}>
          <i className="fas fa-utensils"></i> {amount} {measureUnit} {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

const RecipeIngredients = ({ ingredientsByTitle }) => {
  const ingredientsByTitleElements = ingredientsByTitle.map(
    ({ title, ingredients }, idx) => (
      <IngredientsByTitleList
        key={idx}
        title={title}
        ingredients={ingredients}
      />
    )
  )

  return (
    <>
      <h2> החומרים </h2> {ingredientsByTitleElements}
    </>
  )
}

export default RecipeIngredients
