import React from "react"
import { Form, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LoginForm = ({ handleModalContent }) => {
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
          className=" w-75 mx-auto"
          type="password"
          placeholder="סיסמא"
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-75">
        התחבר
      </Button>
      <div className="text-center my-3">
        <span>אין לך עדיין משתמש ?</span>

        <a
          className="link-info ml-2"
          onClick={() => handleModalContent("register")}
        >
          הרשם
        </a>
      </div>
    </Form>
  )
}

export default LoginForm
