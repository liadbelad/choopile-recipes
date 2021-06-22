import React from "react"
import Card from "react-bootstrap/Card"

const RecipeItem = () => {
  return (
    <Card style={{ width: "auto" }} border="light">
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/80x50/?food"
        fluid
      />
      <Card.Body>
        <Card.Title className="p-0 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default RecipeItem
