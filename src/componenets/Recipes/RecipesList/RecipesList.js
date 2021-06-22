import React from "react"
import RecipeItem from "../RecipeItem/RecipeItem"
import styles from "./RecipesList.module.scss"

const RecipesList = () => {
  return (
    <section className={styles["grid-container"]}>
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
    </section>
  )
}

export default RecipesList
