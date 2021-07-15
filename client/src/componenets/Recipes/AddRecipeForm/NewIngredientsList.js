import React from "react"
import { ListGroup } from "react-bootstrap"
import styles from "./NewIngredientsList.module.scss"

const NewIngredientItem = ({
  ingredientData,
  idx,
  handleDeleteNewIngredient,
  handleEditIngredient,
}) => {
  return (
    <ListGroup.Item key={idx} idx={idx} className={styles["listgroup-item"]}>
      <div>
        <i
          onClick={handleDeleteNewIngredient}
          style={{ cursor: "pointer", color: "red" }}
          className="fas fa-trash mx-2"
        ></i>
        <i
          onClick={handleEditIngredient}
          style={{ cursor: "pointer", color: "#ffb605" }}
          className="fas fa-edit mx-2"
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
          handleDeleteNewIngredient={() => handleDeleteNewIngredient(idx)}
        />
      ))}
    </ListGroup>
  )
}

export default NewIngredientsList
