import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
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
        <Form
          onSubmit={formik.handleSubmit}
          className="text-center d-flex align-items-center flex-column"
        >
          <Form.Group className="w-75">
            <Form.Control
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

          <Form.Group className="w-75">
            <Form.Control
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

          <Row className="text-center my-3">
            <Col className="d-flex align-items-center justify-content-center">
              <Button
                variant="link"
                className="p-0"
                onClick={() => handleModalContent("register")}
              >
                הרשם
              </Button>
              <span> ? אין לך עדיין משתמש </span>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
