import React from "react"
import { Link, useParams } from "react-router-dom"
import Card from "react-bootstrap/Card"

const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card style={{ width: "auto" }} border="light">
        <Card.Img
          variant="top"
          src={"https://source.unsplash.com/80x50/?food"}
        />
        <Card.Body>
          <Card.Title className="p-0 pt-2"> {recipe.title} </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RecipeItem
