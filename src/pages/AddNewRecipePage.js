import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
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
import AuthContext from "../store/AuthCtx/auth-context"

const AddNewRecipePage = () => {
  const { isLoggedIn } = useContext(AuthContext)

  const history = useHistory()

  const handleFormSubmit = async (newRecipe) => {
    console.log(newRecipe)
  }

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/")
    }
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
        imageFiles: Yup.mixed().required("חובה לעלות לפחות תמונה אחת !"),
        categories: Yup.array()
          .min(1, "בחר לפחות קטגוריה אחת")
          .of(
            Yup.object().shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
          ),

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
        // categories: Yup.array()("*בחר לפחות קטגוריה אחת"),
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
                  value={formik.values.categories}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.categories}
                  touched={formik.touched.categories}
                  // value={formik.values.categories}
                  // onChange={(option) =>
                  //   formik.setFieldValue("categories", option)
                  // }
                  // onChange={(options) => console.log(options)}
                  // onBlur={(options) => console.log(options)}
                  options={[
                    { label: "איטלקי", value: 1 },
                    { label: "בשרי", value: 2 },
                    { label: "אוכל של נריה", value: 3 },
                    { label: "חלבי", value: 7 },
                  ]}
                  // {...formik.getFieldProps("categories")}
                />
                {/* <CategoriesList isMulti={true} /> */}
                {/* {formik.touched.categories && formik.errors.categories && (
                  <FormErrorMessages error={formik.errors.categories} />
                )} */}
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
