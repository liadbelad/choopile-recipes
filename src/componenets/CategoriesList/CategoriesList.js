import React, { useState, useEffect, useContext } from "react"
import { useHistory, useLocation } from "react-router-dom"
import AuthContext from "../../store/AuthCtx/auth-context"
import Select from "react-select"
import { getAllCategories, getAllCategoriesOfUserRecipes } from "../../DAL/api"

const CategoriesList = ({ userID = 2 }) => {
  const [categories, setCategories] = useState([])

  const { isLoggedIn } = useContext(AuthContext)

  const location = useLocation()

  const history = useHistory()

  const fetchCategories = async () => {
    const firebaseCategories = await fetch(
      `https://choopile-recipe-db-default-rtdb.firebaseio.com/categories.json`
    )

    const categoriesFirebase = await firebaseCategories.json()

    setCategories(Object.values(categoriesFirebase))

    // if (
    //   location.pathname === "/recipes" ||
    //   (isLoggedIn && location.pathname === "/new-recipe")
    // ) {
    //   const categories = await getAllCategories()
    //   setCategories(categories)
    // }

    // if (
    //   !isLoggedIn &&
    //   (location.pathname === "/my-recipes" ||
    //     location.pathname === "/new-recipe")
    // ) {
    //   history.push("/")
    // }

    // if (isLoggedIn && location.pathname === "/my-recipes") {
    //   const categories = await getAllCategoriesOfUserRecipes(userID)
    //   setCategories(categories)
    // }
  }

  const handleCategoryChange = (selectedOption) => {
    console.log(selectedOption)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <Select
      placeholder="קטגוריות"
      options={categories}
      onChange={handleCategoryChange}
      className="my-3"
    />
  )
}

export default CategoriesList
