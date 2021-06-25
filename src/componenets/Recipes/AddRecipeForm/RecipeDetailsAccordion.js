import React from "react"
import { Accordion, Card } from "react-bootstrap"

const RecipeDetailsAccordionCard = ({ details, eventKey }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Click me!
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

const RecipeDetailsAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default RecipeDetailsAccordion
