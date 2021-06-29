import React from "react"
import {
  Form,
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap"

const SearchBar = ({ md, lg }) => {
  return (
    <Form inline as={Row} className="w-100">
      <InputGroup as={Col} md={md} lg={lg} className="mx-auto">
        <FormControl
          id="search-recipe"
          placeholder="מילות החיפוש שלך..."
          className="py-4"
        />
        <InputGroup.Prepend>
          <Button variant="light" type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
