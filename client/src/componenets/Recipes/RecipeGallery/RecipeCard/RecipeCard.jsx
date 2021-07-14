import React from "react"
import { Link } from "react-router-dom"
import { updateRecipeViewsById } from "../../../../DAL/recipesApi"
import styles from "./RecipeCard.module.scss"

const RecipeCard = ({ recipe }) => {
  const { id, title, description, views, createdAt, mainImageUrl } = recipe

  const date = createdAt.toLocaleString().slice(0, 10).replaceAll(".", "/")

  const handleViewsIncrement = () => {
    updateRecipeViewsById(id)
  }

  return (
    <article
      onClick={handleViewsIncrement}
      className={`${styles["recipe-container"]}`}
    >
      <Link to={`/recipes/${id}`}>
        <div
          style={{
            backgroundImage: `url(http://localhost:5000/images/${mainImageUrl})`,
          }}
          className={styles.image}
        ></div>
        <section className={`${styles["recipe-content"]} p-3`}>
          <div className={styles["recipe-header"]}>
            <p> {date} </p>
            <p className="mr-3">
              {views} <i className="fas fa-eye"></i>
            </p>
          </div>
          <div className={styles["recipe-description"]}>
            <h5> {title} </h5>
            <p> {description} </p>
          </div>
        </section>
      </Link>
    </article>
  )
}

export default RecipeCard
