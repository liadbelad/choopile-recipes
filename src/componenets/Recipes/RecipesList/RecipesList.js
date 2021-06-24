import React from "react"
import { useLocation } from "react-router-dom"
import RecipeCard from "../RecipeGallery/RecipeCard/RecipeCard"
import RecipeItem from "../RecipeItem/RecipeItem"
import styles from "./RecipesList.module.scss"

const RecipesList = ({ recipes = [], className = "grid-container" }) => {
  const recipesToShow =
    className === "grid-container"
      ? recipes.map((recipe, idx) => <RecipeItem key={idx} recipe={recipe} />)
      : recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)

  // const location = useLocation()
  // const recipesToShow = location.pathname === '/' && recipes.map((recipe) => <RecipeCard recipe={recipe}/>)
  // const recipesToShow = location.pathname === '/recipes' && recipes.map((recipe) => <RecipeItem recipe={recipe}/>)
  // const recipesToShow = location.pathname === '/' && recipes.map((recipe) => <RecipeCard recipe={recipe}/>)

  // const recipesToShow =
  //   listClass === "grid-container"
  //     ? recipes.map((recipe) => console.log(recipe))
  //     : recipe.map((recipe) => <RecipeCard />)

  return <section className={styles[className]}>{recipesToShow}</section>
}

export default RecipesList
