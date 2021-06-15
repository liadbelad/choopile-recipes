import React from "react"
import { Link } from "react-router-dom"
import styles from "./RecipeCard.module.scss"

const RecipeCard = () => {
  return (
    <article className={`${styles["recipe-container"]} my-5`}>
      <Link to="/recipe/id">
        <div className={styles.image}></div>
        <section className={`${styles["recipe-content"]} p-3`}>
          <div className="recipe-header d-flex ">
            <p> 15/06/2021 </p>
            <p className="mr-3"> 122 צפיות </p>
          </div>
          <div className="recipe-description ">
            <h4> עוגת בולונז טבעונית </h4>
            <p>
              עוגת בולונז טבעונית? כן כן אתם שומעים נכון! הפסטה האהובה עליי,
              בגרסא אפויה שיוצרת מעטפת קראנצ'ית מושלמת, וכל זה ללא בשר בכלל!
              כנסו כנסו
            </p>
          </div>
        </section>
      </Link>
    </article>
  )
}

export default RecipeCard
