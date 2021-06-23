import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  validateUserData,
  validateDataOnSubmit,
} from "../../utills/js/validations"
import FormErrorMessages from "./FormErrorMessages"

const RegisterForm = ({ handleModalContent, handleCloseModal }) => {
  const [userData, setUserData] = useState({
    email: {
      value: "",
      errors: [],
    },
    firstName: {
      value: "",
      errors: [],
    },
    lastName: {
      value: "",
      errors: [],
    },
    password: {
      value: "",
      errors: [],
    },
    confirmPassword: {
      value: "",
      errors: [],
    },
  })

  const handleUpdatingUserData = (e) => {
    const errors = validateUserData(e)

    const {
      target: { name, value },
    } = e

    updateState(name, value, errors)
  }

  const updateState = (name, value, errors) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: {
        value,
        errors,
      },
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const userInputErrors = validateDataOnSubmit(userData)

    if (Object.keys(userInputErrors).length) {
      setUserData(userInputErrors)
      console.log("new data!", userInputErrors)
      return
    }

    const newUser = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      password: userData.password.value,
    }

    console.log("Welcome!", newUser)
    handleCloseModal()
  }

  return (
    <Form className="text-center">
      <Form.Group className="w-100">
        <Form.Control
          className=" w-75 mx-auto"
          type="email"
          placeholder="מייל"
          name="email"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.email.errors[0]} />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className=" w-75 mx-auto"
          type="text"
          placeholder="שם פרטי"
          name="firstName"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.firstName.errors[0]} />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className=" w-75 mx-auto"
          type="text"
          placeholder="שם משפחה"
          name="lastName"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.lastName.errors[0]} />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="w-75 mx-auto"
          type="password"
          placeholder="סיסמא"
          name="password"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.password.errors[0]} />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="w-75 mx-auto"
          type="password"
          placeholder="אימות סיסמא"
          name="confirmPassword"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.confirmPassword.errors[0]} />
      </Form.Group>

      <Button
        variant="dark"
        type="submit"
        className="w-75"
        onClick={handleFormSubmit}
      >
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
