import React, { useEffect } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import Select from "react-select"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import CategoriesList from "../componenets/CategoriesList/CategoriesList"
import FormErrorMessages from "../componenets/Auth/FormErrorMessages"
import {
  FILE_SIZE,
  HEBREW_ENGLISH_TEXT_REGEX,
  SUPPORTED_FILE_FORMATS,
} from "../utills/js/constants"

const AddNewRecipePage = () => {
  const handleFormSubmit = async (newRecipe) => {
    console.log(newRecipe)
  }

  useEffect(() => {
    // fetch
  }, [])

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        servings: "",
        prepTimeMins: "",
        imageURL: {},
        categories: [],
        ingredients: [{ amount: "", measureUnit: "", name: "", title: "" }],
        instructions: [{ content: "" }],
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("*חובה")
          .min(2, "מינימום 2 תווים")
          .max(30, "מקסימום 30 תווים")
          .matches(HEBREW_ENGLISH_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),

        description: Yup.string()
          .required("*חובה")
          .max(255, "מקסימום 255 תווים")
          .matches(HEBREW_ENGLISH_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),

        servings: Yup.number()
          .required("*חובה")
          .max(100, "מקסימום 100 מנות")
          .min(1, "מספר חיובי"),
        prepTimeMins: Yup.number()
          .required("*חובה")
          .max(1000, "מקסימום 1000 דקות")
          .min(1, "מספר חיובי"),
        imageFiles: Yup.mixed().required("A file is required"),
        //   .test(
        //     "fileSize",
        //     "הקובץ גדול מידי - ",
        //     (value) => value && value.size <= FILE_SIZE
        //   )
        //   .test(
        //     "fileFormat",
        //     "תמונות בלבד",
        //     (value) => value && SUPPORTED_FILE_FORMATS.includes(value.type)
        //   ),
        categories: Yup.array().required("*בחר לפחות קטגוריה אחת"),
        // ingredients: Yup.array().min(2, "נא להוסיף לפחות 2 מרכיבים"),
        // instructions: Yup.array().min(1, "נא להוסיף לפחות הוראה אחת"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("???")
        handleFormSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Container className="my-5">
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>כותרת המתכון*</Form.Label>
                  <Form.Control
                    id="title"
                    type="text"
                    name="title"
                    placeholder="כותרת"
                    {...formik.getFieldProps("title")}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <FormErrorMessages error={formik.errors.title} />
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>תיאור המתכון*</Form.Label>

                  <Form.Control
                    as="textarea"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="כאן אתם יכולים להשוויץ במתכון ולעודד אנשים לצפות בו !"
                    {...formik.getFieldProps("description")}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <FormErrorMessages error={formik.errors.description} />
                  )}
                </Form.Group>
                <Select
                  name="categories"
                  id="categories"
                  isMulti
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "year_value", value: selectedOption },
                    }
                    formik.handleChange(event)
                  }}
                  onBlur={() => {
                    formik.handleBlur({ target: { name: "year_value" } })
                  }}
                  value={formik.values.categories}
                  options={[{ label: "איטלקי", value: 1 }]}
                  {...formik.getFieldProps("categories")}
                />
                {/* <CategoriesList isMulti={true} /> */}
                {formik.touched.categories && formik.errors.categories && (
                  <FormErrorMessages error={formik.errors.categories} />
                )}
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Enter image files url"
                  />
                  <Form.File
                    id="imageFiles"
                    name="imageFiles"
                    label="Choose File"
                    {...formik.getFieldProps("imageFiles")}
                    custom
                  ></Form.File>
                  {formik.touched.imageFiles && formik.errors.imageFiles && (
                    <FormErrorMessages error={formik.errors.imageFiles} />
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>כמות מנות*</Form.Label>

                  <Form.Control
                    id="servings"
                    type="number"
                    name="servings"
                    {...formik.getFieldProps("servings")}
                  />
                  {formik.touched.servings && formik.errors.servings && (
                    <FormErrorMessages error={formik.errors.servings} />
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>זמן הכנה (בדקות)*</Form.Label>

                  <Form.Control
                    id="prepTimeMins"
                    type="number"
                    name="prepTimeMins"
                    {...formik.getFieldProps("prepTimeMins")}
                  />
                  {formik.touched.prepTimeMins &&
                    formik.errors.prepTimeMins && (
                      <FormErrorMessages error={formik.errors.prepTimeMins} />
                    )}
                </Form.Group>
              </Col>
              <Button type="submit"> Submit </Button>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default AddNewRecipePage

// import React from "react"
// import { Formik } from "formik"
// import * as Yup from "yup"
// import { Form, Button, Row, Col } from "react-bootstrap"
// import { login } from "../../DAL/api"
// import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utills/js/constants"
// import FormErrorMessages from "./FormErrorMessages"

// const LoginForm = ({ handleModalContent, handleCloseModal }) => {
//   const handleFormSubmit = async (loginUser) => {
//     const userInfo = await login(loginUser)

//     console.log("Welcome", userInfo)
//     // handleCloseModal()
//   }

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={Yup.object({
//         email: Yup.string()
//           .required("*חובה")
//           .matches(EMAIL_REGEX, "אימייל לא תקין"),
//         password: Yup.string()
//           .required("*חובה")
//           .matches(
//             PASSWORD_REGEX,
//             "חובה ספרה, אות קטנה ואות גדולה (באנגלית) - לפחות 8 תווים"
//           ),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         handleFormSubmit(values)
//         setSubmitting(false)
//       }}
//     >
//       {(formik) => (
//         <Form onSubmit={formik.handleSubmit} className="text-center">
//           <Form.Group>
//             <Form.Control
//               className=" w-75 mx-auto"
//               id="email"
//               type="email"
//               name="email"
//               placeholder="מייל"
//               {...formik.getFieldProps("email")}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <FormErrorMessages error={formik.errors.email} />
//             )}
//           </Form.Group>

//           <Form.Group>
//             <Form.Control
//               className=" w-75 mx-auto"
//               id="password"
//               type="password"
//               name="password"
//               placeholder="סיסמא"
//               {...formik.getFieldProps("password")}
//             />

//             {formik.touched.password && formik.errors.password && (
//               <FormErrorMessages error={formik.errors.password} />
//             )}
//           </Form.Group>

//           <Button variant="dark" type="submit" className="w-75">
//             התחבר
//           </Button>

//           <Row className="text-center my-3">
//             <Col className="d-flex align-items-center justify-content-center">
//               <Button
//                 variant="link"
//                 className="p-0"
//                 onClick={() => handleModalContent("register")}
//               >
//                 הרשם
//               </Button>
//               <span> ? אין לך עדיין משתמש </span>
//             </Col>
//           </Row>
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default LoginForm
