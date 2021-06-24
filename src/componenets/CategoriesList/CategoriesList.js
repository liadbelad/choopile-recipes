import React, { useState, useEffect } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Select from "react-select"
import { getAllCategories } from "../../DAL/api"
import styles from "./CategoriesList.module.scss"

const CategoriesList = () => {
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    const categories = await getAllCategories()
    setCategories(categories)
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

const CategoryItem = ({ name }) => {
  return (
    <ListGroup.Item className={styles["category-item"]}>{name}</ListGroup.Item>
  )
}

export default CategoriesList
