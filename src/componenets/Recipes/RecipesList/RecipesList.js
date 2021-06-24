import React from "react"
import { useLocation } from "react-router-dom"
import RecipeCard from "../RecipeGallery/RecipeCard/RecipeCard"
import RecipeItem from "../RecipeItem/RecipeItem"
import styles from "./RecipesList.module.scss"

const RecipesList = ({ recipes = [], className = "grid-container" }) => {
  console.log(recipes)
  const recipesToShow =
    className === "grid-container"
      ? recipes.map((recipe, idx) => <RecipeItem key={idx} recipe={recipe} />)
      : recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)

  return <section className={styles[className]}>{recipesToShow}</section>
}

export default RecipesList
