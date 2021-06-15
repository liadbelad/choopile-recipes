import React from "react"
import { Link } from "react-router-dom"
import styles from "./RecipeCard.module.scss"

const RecipeCard = () => {
  return (
    <article className={`${styles["recipe-container"]}`}>
      <Link to="/recipe/id">
        <div className={styles.image}></div>
        <section className={`${styles["recipe-content"]} p-3`}>
          <div className={styles["recipe-header"]}>
            <p> 15/06/2021 </p>
            <p className="mr-3"> 122 צפיות </p>
          </div>
          <div className={styles["recipe-description"]}>
            <h5> עוגת בולונז טבעונית </h5>
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
