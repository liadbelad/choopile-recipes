import React, { useState, useEffect, useContext } from "react"
import { useHistory, Prompt } from "react-router-dom"
import AuthContext from "../../store/AuthCtx/auth-context"
import AddRecipeFormInput from "../../componenets/Recipes/AddRecipeForm/AddRecipeFormInput"
import { Formik } from "formik"
import * as Yup from "yup"
import CustomSelect from "../../componenets/CustomSelect/CustomSelect"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import FormErrorMessages from "../../componenets/Auth/FormErrorMessages"
import NewRecipeContext from "../../store/NewRecipeCtx/new-recipe-context"
import { getAllCategories } from "../../DAL/api"
import {
  HEBREW_ENGLISH_SPACE_TEXT_REGEX,
  SUPPORTED_FILE_FORMATS,
} from "../../utills/js/constants"
import NewRecipeSteps from "../../componenets/Recipes/NewRecipeSteps/NewRecipeSteps"

const NewRecipeDetailsPage = () => {
  const [isEnteringData, setIsEnteringData] = useState(false)
  const [categories, setCategories] = useState(null)

  const { isLoggedIn } = useContext(AuthContext)

  const { handleAddRecipeDetails, recipeDetails } = useContext(NewRecipeContext)

  const history = useHistory()

  const handleFormFocus = () => {
    setIsEnteringData(true)
  }

  const handleFinishEntering = () => {
    setIsEnteringData(false)
  }

  const handleFormSubmit = (newRecipeDetails) => {
    handleFinishEntering()
    handleAddRecipeDetails(newRecipeDetails)
    history.push("/recipes/new/ingredients")
  }

  const fetchCategories = async () => {
    const categories = await getAllCategories()
    setCategories(categories)
  }

  useEffect(() => {
    let mounted = true
    if (!isLoggedIn) {
      history.push("/")
    }
    if (!categories) {
      fetchCategories()
    }

    return () => (mounted = false)
  }, [isLoggedIn])

  return (
    <Formik
      initialValues={{
        title: recipeDetails.title || "",
        description: recipeDetails.description || "",
        servings: +recipeDetails.servings || "",
        prepTimeMins: +recipeDetails.prepTimeMins || "",
        imageFiles: recipeDetails.imageFiles || "",
        categories: recipeDetails.categories.label || {},
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .required("*חובה")
          .min(2, "מינימום 2 תווים")
          .max(30, "מקסימום 30 תווים")
          .matches(
            HEBREW_ENGLISH_SPACE_TEXT_REGEX,
            "אותיות בלבד אנגלית או עברית"
          ),

        description: Yup.string()
          .required("*חובה")
          .max(255, "מקסימום 255 תווים")
          .matches(
            HEBREW_ENGLISH_SPACE_TEXT_REGEX,
            "אותיות בלבד אנגלית או עברית"
          ),

        servings: Yup.number()
          .required("*חובה")
          .max(100, "מקסימום 100 מנות")
          .min(1, "מספר חיובי"),
        prepTimeMins: Yup.number()
          .required("*חובה")
          .max(1000, "מקסימום 1000 דקות")
          .min(1, "מספר חיובי"),
        imageFiles: Yup.mixed()
          .required("חובה*")
          .test(
            "FILE_FORMAT",
            "תמונות בלבד",
            (value) =>
              !value || (value && SUPPORTED_FILE_FORMATS.includes(value.type))
          )
          .test(
            "FILE_SIZE",
            "עד 1 מגה בייט",
            (value) => value && value.size <= 1e6
          ),
        categories: Yup.object().required("חובה*"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleFormSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Container className="my-5">
          <NewRecipeSteps step1 />
          <Prompt
            when={isEnteringData}
            message={() => "המתכון שלך לא יישמר, האם אתה בטוח ?"}
          />
          <Form onFocus={handleFormFocus} onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={8}>
                <AddRecipeFormInput
                  formik={formik}
                  placeholder="כותרת"
                  name="title"
                  id="title"
                  type="text"
                  title="כותרת המתכון*"
                />

                <AddRecipeFormInput
                  formik={formik}
                  as="textarea"
                  placeholder="כאן אתם יכולים להשוויץ במתכון ולעודד אנשים לצפות בו !"
                  name="description"
                  id="description"
                  type="text"
                  title="תיאור המתכון*"
                />
                <Form.Group>
                  <Form.Label> קטגוריה* </Form.Label>
                  <CustomSelect
                    options={categories}
                    value={
                      recipeDetails
                        ? recipeDetails.categories.value
                        : formik.values.categories
                    }
                    onChange={(selectedCategory) =>
                      formik.setFieldValue("categories", selectedCategory)
                    }
                  />
                  {formik.touched.categories && formik.errors.categories && (
                    <FormErrorMessages error={formik.errors.categories} />
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <input
                    type="file"
                    name="imageFiles"
                    id="imageFiles"
                    onChange={(event) =>
                      formik.setFieldValue("imageFiles", event.target.files[0])
                    }
                  />
                  {formik.errors.imageFiles && (
                    <FormErrorMessages error={formik.errors.imageFiles} />
                  )}
                </Form.Group>

                <AddRecipeFormInput
                  formik={formik}
                  name="servings"
                  id="servings"
                  type="number"
                  title="כמות מנות*"
                />

                <AddRecipeFormInput
                  formik={formik}
                  name="prepTimeMins"
                  id="prepTimeMins"
                  type="number"
                  title="זמן הכנה (בדקות)*"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="submit" variant="dark">
                  שלב הבא
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default NewRecipeDetailsPage
