import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import styles from "./CategoriesList.module.scss"

const CategoriesList = () => {
  return (
    <ListGroup variant="flush" className="mt-3">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ListGroup>
  )
}

const CategoryItem = ({ category }) => {
  return (
    <ListGroup.Item className={styles["category-item"]}>
      {category} dummy
    </ListGroup.Item>
  )
}

export default CategoriesList
