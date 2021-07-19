import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.scss"
import { Link as ScrollLink } from "react-scroll"

const Menu = () => {
  return (
    <div className={`${styles["menu-container"]} p-2 mt-2`}>
      <ScrollLink
        to="newestRecipesGallery"
        className="ml-2 font-weight-bold"
        smooth
        duration={800}
      >
        הכי חדשים <i className="fas fa-arrow-down"></i>
      </ScrollLink>
      <Link to="/recipes" className="mx-5 font-weight-bold">
        כל המתכונים
      </Link>
    </div>
  )
}

export default React.memo(Menu)
