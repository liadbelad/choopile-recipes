import React from "react"
import { Form, Button } from "react-bootstrap"
import { Formik } from "formik"
import * as Yup from "yup"
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  HEBREW_ENGLISH_TEXT_REGEX,
} from "../../utills/js/constants"
import FormErrorMessages from "../../componenets/Auth/FormErrorMessages"

const UserProfilePage = () => {
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"))

  const handleFormSubmit = () => {
    // { email, password, firstName, lastName }
  }

  return (
    <Formik
      initialValues={{
        email: storedUserInfo.email,
        firstName: storedUserInfo.firstName,
        lastName: storedUserInfo.lastName,
        password: storedUserInfo.password,
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("חובה*")
          .email("אימייל לא תקין")
          .matches(EMAIL_REGEX, "אימייל לא תקין"),
        firstName: Yup.string()
          .required("חובה*")
          .min(2, "מינימום 2 תווים")
          .max(20, "מקסימום 20 תווים")
          .matches(HEBREW_ENGLISH_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),
        lastName: Yup.string()
          .required("חובה*")
          .min(2, "מינימום 2 תווים")
          .max(20, "מקסימום 20 תווים")
          .matches(HEBREW_ENGLISH_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),
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
        <Form
          onSubmit={formik.handleSubmit}
          className="text-center d-flex align-items-center flex-column my-4"
        >
          <h2> אזור אישי - עדכון פרטים </h2>
          <hr />

          <Form.Group className="w-75">
            <Form.Label className="font-weight-bold"> אימייל: </Form.Label>
            <Form.Control
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
          <Form.Group className="w-75">
            <Form.Label className="font-weight-bold"> שם פרטי: </Form.Label>
            <Form.Control
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
          <Form.Group className="w-75">
            <Form.Label className="font-weight-bold"> שם משפחה: </Form.Label>
            <Form.Control
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

          <Form.Group className="w-75">
            <Form.Label className="font-weight-bold"> סיסמא: </Form.Label>
            <Form.Control
              type="password"
              placeholder="סיסמא"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessages error={formik.errors.password} />
            )}
          </Form.Group>

          <Form.Group className="w-75">
            <Form.Label className="font-weight-bold"> אימות סיסמא: </Form.Label>
            <Form.Control
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

          <Button variant="dark" type="submit" className="w-25">
            עדכון
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default UserProfilePage
