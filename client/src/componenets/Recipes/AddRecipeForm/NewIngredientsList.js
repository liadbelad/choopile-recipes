import React from "react"
import { ListGroup } from "react-bootstrap"

const NewIngredientsList = ({ newRecipeIngredients }) => {
  return (
    <ListGroup>
      {newRecipeIngredients.map((ingredientData, idx) => (
        <ListGroup.Item key={idx} className="d-flex justify-content-around">
          <i className="fas fa-trash"></i>
          <p> {ingredientData.qty} </p>
          <p> {ingredientData.measureUnit} </p>
          <p> {ingredientData.ingredient} </p>
          <p> {ingredientData.note} </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default NewIngredientsList
