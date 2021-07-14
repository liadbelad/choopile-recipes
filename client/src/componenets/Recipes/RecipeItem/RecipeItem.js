import React from "react"
import { Link, useHistory } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { updateRecipeViewsById } from "../../../DAL/recipesApi"
import styles from "./RecipeItem.module.scss"

const RecipeItem = ({ recipe }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  const history = useHistory()

  const handleViewsIncrement = () => {
    updateRecipeViewsById(recipe.id)
  }

  const moveToEditRecipePage = () => {
    history.push({
      pathname: "/recipes/edit/details",
      state: { recipeId: recipe.id },
    })
  }

  return (
    <Card
      onClick={handleViewsIncrement}
      style={{ width: "auto", position: "relative" }}
      border="light"
    >
      <Link to={`/recipes/${recipe.id}`}>
        <Card.Img
          variant="top"
          src={`http://localhost:5000/images/${recipe.mainImageUrl}`}
        />
      </Link>

      {recipe.userId === userInfo.id && (
        <span className={styles[`edit-btn`]}>
          <i onClick={moveToEditRecipePage} className="fas fa-edit"></i>
        </span>
      )}

      <Card.Body>
        <Card.Title as={Link} to={`/recipes/${recipe.id}`} className="">
          {recipe.title}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default RecipeItem
