import React from "react"
import { NavLink } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Nav } from "react-bootstrap"

const NewRecipeSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      {/* <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>התחברות</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>התחברות</Nav.Link>
        )}
      </Nav.Item> */}

      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/recipes/new/details">
            <Nav.Link>פרטי מתכון</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>פרטי מתכון</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/recipes/new/ingredients">
            <Nav.Link>מרכיבים</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>מרכיבים</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/recipes/new/instructions">
            <Nav.Link>הוראות הכנה</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>הוראות הכנה</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default NewRecipeSteps
