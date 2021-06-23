import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Formik } from "formik"
import * as Yup from "yup"
import { login } from "../../DAL/api"
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utills/js/constants"
import FormErrorMessages from "./FormErrorMessages"

const LoginForm = ({ handleModalContent, handleCloseModal }) => {
  const handleFormSubmit = async (loginUser) => {
    const userInfo = await login(loginUser)

    console.log("Welcome", userInfo)
    // handleCloseModal()
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("*חובה")
          .matches(EMAIL_REGEX, "אימייל לא תקין"),
        password: Yup.string()
          .required("*חובה")
          .matches(
            PASSWORD_REGEX,
            "חובה ספרה, אות קטנה ואות גדולה (באנגלית) - לפחות 8 תווים"
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleFormSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="text-center">
          <Form.Group>
            <Form.Control
              className=" w-75 mx-auto"
              id="email"
              type="email"
              name="email"
              placeholder="מייל"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessages error={formik.errors.email} />
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              className=" w-75 mx-auto"
              id="password"
              type="password"
              name="password"
              placeholder="סיסמא"
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password && formik.errors.password && (
              <FormErrorMessages error={formik.errors.password} />
            )}
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
      )}
    </Formik>
  )
}

export default LoginForm
