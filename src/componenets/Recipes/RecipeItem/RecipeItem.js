import React from "react"
import Card from "react-bootstrap/Card"

const RecipeItem = ({
  imageURL = "https://source.unsplash.com/80x50/?food",
  title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ",
}) => {
  return (
    <Card style={{ width: "auto" }} border="light">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title className="p-0 pt-2"> {title} </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default RecipeItem
