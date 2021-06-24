import React from "react"
import { ListGroup } from "react-bootstrap"

const IngredientsByTitleList = ({ title, ingredients }) => {
  return (
    <ListGroup>
      {title}
      {ingredients.map(({ amount, measureUnit, name }) => (
        <ListGroup.Item>
          {amount} {measureUnit} {name}
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

  return <>{ingredientsByTitleElements}</>
}

export default RecipeIngredients
