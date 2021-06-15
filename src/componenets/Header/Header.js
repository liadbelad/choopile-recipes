import React from "react"
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <Container fluid className={`${styles.header} mt-2`}>
      <h2 className="mb-3">חפש מתכון</h2>
      <Form inline as={Row} className="w-100">
        <InputGroup
          as={Col}
          md={6}
          lg={6}
          className={`${styles["search-input"]} mx-auto`}
        >
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
    </Container>
  )
}

export default Header
