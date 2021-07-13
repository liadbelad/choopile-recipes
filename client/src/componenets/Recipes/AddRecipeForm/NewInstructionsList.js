import React from "react"
import { ListGroup } from "react-bootstrap"

const NewInstructionItem = ({ instructionData, idx, onClick }) => {
  return (
    <ListGroup.Item
      key={idx}
      idx={idx}
      className="d-flex justify-content-start"
    >
      <div>
        <i
          onClick={onClick}
          style={{ cursor: "pointer" }}
          className="fas fa-trash mx-2"
        ></i>
      </div>
      <p> {instructionData.instruction} </p>
    </ListGroup.Item>
  )
}

const NewInstructionsList = ({
  newRecipeInstructions,
  handleDeleteNewInstruction,
}) => {
  return (
    <ListGroup>
      {newRecipeInstructions.map((instructionData, idx) => (
        <NewInstructionItem
          instructionData={instructionData}
          idx={idx}
          key={idx}
          onClick={() => handleDeleteNewInstruction(idx)}
        />
      ))}
    </ListGroup>
  )
}

export default NewInstructionsList