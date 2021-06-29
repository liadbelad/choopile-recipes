import React from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./RecipeCard.module.scss"

const RecipeCard = ({ recipe }) => {
  const { id, title, description, views, createdAt } = recipe

  // const params = useParams()

  const date = createdAt.toLocaleString().slice(0, 9).replaceAll(".", "/")

  return (
    <article className={`${styles["recipe-container"]}`}>
      <Link to={`/recipes/${id}`}>
        <div className={styles.image}></div>
        <section className={`${styles["recipe-content"]} p-3`}>
          <div className={styles["recipe-header"]}>
            <p> {date} </p>
            <p className="mr-3"> {views} צפיות </p>
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
