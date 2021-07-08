import React from "react"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { updateRecipeViewsById } from "../../../DAL/recipesApi"

const RecipeItem = ({ recipe }) => {
  const handleViewsIncrement = () => {
    updateRecipeViewsById(recipe.id)
  }

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card
        onClick={handleViewsIncrement}
        style={{ width: "auto" }}
        border="light"
      >
        <Card.Img
          variant="top"
          src={"https://source.unsplash.com/80x50/?food"}
        />
        <Card.Body>
          <Card.Title className="p-0 pt-2"> {recipe.title} </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RecipeItem
