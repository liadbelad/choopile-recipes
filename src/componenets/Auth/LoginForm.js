import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { login } from "../../DAL/api"
import {
  validateDataOnSubmit,
  validateUserData,
} from "../../utills/js/validations"
import FormErrorMessages from "./FormErrorMessages"

const LoginForm = ({ handleModalContent }) => {
  const [userData, setUserData] = useState({
    email: {
      value: "",
      errors: [],
    },
    password: {
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const { userDataAfterErrorCheck, hasNewErrors } =
      validateDataOnSubmit(userData)

    if (hasNewErrors) {
      setUserData(userDataAfterErrorCheck)
      return
    }

    const loginUser = {
      email: userData.email.value,
      password: userData.password.value,
    }

    const userInfo = await login(loginUser)

    console.log("Welcome", userInfo)
    // handleCloseModal()
  }

  return (
    <Form className="text-center">
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          className=" w-75 mx-auto"
          type="email"
          name="email"
          placeholder="מייל"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.email.errors[0]} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          className=" w-75 mx-auto"
          type="password"
          name="password"
          placeholder="סיסמא"
          onBlur={handleUpdatingUserData}
        />
        <FormErrorMessages error={userData.password.errors[0]} />
      </Form.Group>

      <Button
        variant="dark"
        type="submit"
        className="w-75"
        onClick={handleFormSubmit}
      >
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
