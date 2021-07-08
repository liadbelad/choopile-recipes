import React from "react"
import { ListGroup } from "react-bootstrap"

const NewIngredientItem = ({ ingredientData, idx, onClick }) => {
  return (
    <ListGroup.Item
      key={idx}
      idx={idx}
      className="d-flex justify-content-around"
    >
      <div>
        <i
          onClick={onClick}
          style={{ cursor: "pointer" }}
          className="fas fa-trash mx-2"
        ></i>
      </div>
      <p> {ingredientData.qty} </p>
      <p> {ingredientData.measureUnit.label} </p>
      <p> {ingredientData.ingredient.label} </p>
      <p> {ingredientData.note} </p>
    </ListGroup.Item>
  )
}

const NewIngredientsList = ({
  newRecipeIngredients,
  handleDeleteNewIngredient,
}) => {
  return (
    <ListGroup>
      {newRecipeIngredients.map((ingredientData, idx) => (
        <NewIngredientItem
          ingredientData={ingredientData}
          idx={idx}
          key={idx}
          onClick={() => handleDeleteNewIngredient(idx)}
        />
      ))}
    </ListGroup>
  )
}

export default NewIngredientsList
