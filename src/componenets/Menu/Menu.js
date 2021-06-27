import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <div className={`${styles["menu-container"]} p-2 mt-2`}>
      <a href="#newestRecipesGallery" className="ml-2 font-weight-bold">
        הכי חדשים <i className="fas fa-arrow-down"></i>
      </a>
      <Link to="/recipes" className="mx-5 font-weight-bold">
        כל המתכונים
      </Link>
    </div>
  )
}

export default React.memo(Menu)
