import React, { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"
import Select from "react-select"
import { getAllCategories, getAllCategoriesOfUserRecipes } from "../../DAL/api"
import styles from "./CategoriesList.module.scss"

const CategoriesList = ({ isLogged = true, userID = 2, isMulti = false }) => {
  const [categories, setCategories] = useState([])

  const location = useLocation()

  const history = useHistory()

  const fetchCategories = async () => {
    if (location.pathname === "/recipes") {
      const categories = await getAllCategories()
      setCategories(categories)
    }

    if (
      !isLogged &&
      (location.pathname === "/my-recipes" ||
        location.pathname === "/new-recipe")
    ) {
      history.push("/")
    }

    if (isLogged && location.pathname === "/my-recipes") {
      const categories = await getAllCategoriesOfUserRecipes(userID)
      setCategories(categories)
    }

    if (isLogged && location.pathname === "/new-recipe") {
      const categories = await getAllCategories()
      setCategories(categories)
    }
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
      isMulti={isMulti}
    />
  )
}

export default CategoriesList
