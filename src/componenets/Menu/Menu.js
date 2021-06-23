import React from "react"
import { Link } from "react-router-dom"

import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <div className={`${styles["menu-container"]} p-2 mt-2`}>
      <a href="#newestRecipesGallery" className="ml-2">
        הכי חדשים
      </a>
      <Link to="/recipes" className="mx-5">
        כל המתכונים
      </Link>
      <Link to="/my_recipes" className="mr-2">
        המתכונים שלי
      </Link>
    </div>
  )
}

export default Menu
