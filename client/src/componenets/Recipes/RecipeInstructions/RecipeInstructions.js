import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

const Instruction = ({ instruction, idx }) => {
  return (
    <ListGroup.Item style={{ border: "none" }}>
      <strong> {idx}. </strong> {instruction}
    </ListGroup.Item>
  )
}

const RecipeInstructions = ({ instructions }) => {
  return (
    <>
      <h2> אופן ההכנה </h2>
      <ListGroup>
        {instructions.map(({ id, content }, idx) => (
          <Instruction key={id} instruction={content} idx={idx + 1} />
        ))}
      </ListGroup>
    </>
  )
}

export default RecipeInstructions
