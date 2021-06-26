import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../store/AuthCtx/auth-context"

import styles from "./Menu.module.scss"

const Menu = () => {
  const { isLoggedIn } = useContext(AuthContext)
  console.log("Menu runn")

  return (
    <div className={`${styles["menu-container"]} p-2 mt-2`}>
      <a href="#newestRecipesGallery" className="ml-2">
        הכי חדשים
      </a>
      <Link to="/recipes" className="mx-5">
        כל המתכונים
      </Link>
      {/* {isLoggedIn && ( */}
      <Link to="/my-recipes" className="mr-2">
        המתכונים שלי
      </Link>
      {/* )} */}
    </div>
  )
}

export default React.memo(Menu)
