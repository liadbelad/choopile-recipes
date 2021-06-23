import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Formik } from "formik"
import * as Yup from "yup"
import { register } from "../../DAL/api"
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NAME_REGEX,
} from "../../utills/js/constants"
import FormErrorMessages from "./FormErrorMessages"

const RegisterForm = ({ handleModalContent, handleCloseModal }) => {
  const handleFormSubmit = async ({ email, password, firstName, lastName }) => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    }

    const userInfo = await register(newUser)
    console.log(userInfo)
    // handleCloseModal()
  }

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("חובה*")
          .matches(EMAIL_REGEX, "אימייל לא תקין"),
        firstName: Yup.string()
          .required("חובה*")
          .matches(NAME_REGEX, "אותיות בלבד אנגלית או עברית"),
        lastName: Yup.string()
          .required("חובה*")
          .matches(NAME_REGEX, "אותיות בלבד אנגלית או עברית"),
        password: Yup.string()
          .required("חובה*")
          .matches(
            PASSWORD_REGEX,
            "חובה ספרה, אות קטנה ואות גדולה (באנגלית) - לפחות 8 תווים"
          ),
        confirmPassword: Yup.string()
          .required("חובה*")
          .oneOf([Yup.ref("password"), null], "סיסמאות לא תואמות"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleFormSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="text-center">
          <Form.Group className="w-100">
            <Form.Control
              className="w-75 mx-auto"
              id="email"
              name="email"
              type="email"
              placeholder="מייל"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessages error={formik.errors.email} />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="w-75 mx-auto"
              type="text"
              placeholder="שם פרטי"
              id="firstName"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <FormErrorMessages error={formik.errors.firstName} />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="w-75 mx-auto"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="שם משפחה"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <FormErrorMessages error={formik.errors.lastName} />
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="w-75 mx-auto"
              type="password"
              placeholder="סיסמא"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessages error={formik.errors.password} />
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="w-75 mx-auto"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="אימות סיסמא"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <FormErrorMessages error={formik.errors.confirmPassword} />
              )}
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
      )}
    </Formik>
  )
}

export default RegisterForm
