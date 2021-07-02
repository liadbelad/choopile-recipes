import React from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Select from "react-select"

const measureUnits = [
  { value: "1", label: "קוסקוס" },
  { value: "2", label: "בלה בלה" },
  { value: "3", label: "בל בלה" },
]

const ingredients = [
  { value: "5", label: "שוקולד" },
  { value: "7", label: "תותים" },
  { value: "9", label: "וניל" },
]

const IngredientsFormSection = () => {
  return (
    <Form className="d-flex align-items-center">
      <Form.Group>
        <Form.Label htmlFor="quantity">כמות*</Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="quantity"
          type="number"
          placeholder="כמות"
        />
      </Form.Group>

      <Form.Group className="w-25">
        <Form.Label htmlFor="ingredients">יחידת מידה*</Form.Label>

        <Select
          name="measureUnits"
          id="measureUnits"
          placeholder="בחר..."
          options={measureUnits}
        />
      </Form.Group>
      <Form.Group className="w-25">
        <Form.Label htmlFor="ingredients">רכיב*</Form.Label>
        <Select
          name="ingredients"
          id="ingredients"
          placeholder="בחר..."
          options={ingredients}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Form.Group>
    </Form>
  )
}

export default IngredientsFormSection
