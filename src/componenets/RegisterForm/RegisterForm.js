import React from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const RegisterForm = () => {
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

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          className=" w-75 mx-auto"
          type="password"
          placeholder="אימות סיסמא"
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-75">
        התחבר
      </Button>
      <div className="text-center my-3">
        <span>יש לך משתמש ?</span>

        <Link> הרשם </Link>
      </div>
    </Form>
  )
}

export default RegisterForm
