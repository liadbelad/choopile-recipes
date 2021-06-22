import React from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const RegisterForm = ({ handleModalContent }) => {
  return (
    <Form className="text-center">
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          className=" w-75 mx-auto"
          type="email"
          placeholder="מייל"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          className="w-75 mx-auto"
          type="password"
          placeholder="סיסמא"
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Control
          className="w-75 mx-auto"
          type="password"
          placeholder="אימות סיסמא"
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-75">
        הרשמה
      </Button>
      <div className="text-center my-3">
        <span>יש לך משתמש ?</span>

        <a
          className="link-info ml-2"
          onClick={() => handleModalContent("login")}
        >
          התחבר
        </a>
      </div>
    </Form>
  )
}

export default RegisterForm
