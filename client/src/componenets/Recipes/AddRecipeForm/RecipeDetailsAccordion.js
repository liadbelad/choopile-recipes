import React from "react"
import { Accordion, Card, Button } from "react-bootstrap"
import IngredientsFormSection from "./IngredientsFormSection"

const AccordionSection = ({ children, eventKey, title }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
        <Button> {title} </Button>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body> {children} </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

const RecipeDetailsAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <AccordionSection eventKey="0" title="מצרכים">
        <IngredientsFormSection />
      </AccordionSection>
      <AccordionSection eventKey="1" title="אופן ההכנה"></AccordionSection>
    </Accordion>
  )
}

export default RecipeDetailsAccordion
