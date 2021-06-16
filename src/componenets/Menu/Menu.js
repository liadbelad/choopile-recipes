import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <div className={`${styles["menu-container"]} p-3`}>
      <Link to="/recipes/popular" className="ml-2">
        הכי פופולריים
      </Link>
      <Link to="/recipes/newest" className="mx-5">
        מתכונים
      </Link>
      <Link to="/my_recipes" className="mr-2">
        המתכונים שלי
      </Link>
    </div>
  )
}

export default Menu
