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
import NewRecipeSteps from "../../componenets/Recipes/NewRecipeSteps/NewRecipeSteps"
import NewIngredientsList from "../../componenets/Recipes/AddRecipeForm/NewIngredientsList"
import { getAllIngredients, getAllMeasureUnits } from "../../DAL/api"

const NewRecipeIngredientsPage = () => {
  const [isEnteringData, setIsEnteringData] = useState(false)
  const [ingredients, setIngredients] = useState(null)
  const [measureUnits, setMeasureUnits] = useState(null)
  const [newRecipeIngredients, setNewRecipeIngredients] = useState([])

  const { isLoggedIn } = useContext(AuthContext)

  const { handleAddRecipeIngredients, recipeIngredients } =
    useContext(NewRecipeContext)

  const history = useHistory()

  const handleFormFocus = () => {
    setIsEnteringData(true)
  }

  const handleFinishEntering = () => {
    setIsEnteringData(false)
  }

  const handleAddingNewIngredient = (newIngredient) => {
    setNewRecipeIngredients((prevNewRecipeIngredients) => [
      ...prevNewRecipeIngredients,
      newIngredient,
    ])
  }

  const handleFormSubmit = (NewRecipeIngredients) => {
    console.log(NewRecipeIngredients)
    handleFinishEntering()
    handleAddRecipeIngredients(NewRecipeIngredients)
    history.push("/recipes/new/instructions")
  }

  const fetchData = async () => {
    const ingredients = await getAllIngredients()
    const measureUnits = await getAllMeasureUnits()
    setIngredients(ingredients)
    setMeasureUnits(measureUnits)
  }

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/")
    }
    if (!ingredients && !measureUnits) {
      fetchData()
    }
  }, [isLoggedIn, ingredients, measureUnits])

  return (
    <Formik
      initialValues={{
        qty: "",
        measureUnit: "",
        ingredient: "",
        note: "",
      }}
      validationSchema={Yup.object().shape({
        qty: Yup.number().required("*חובה").positive("מספר חיובי"),
        measureUnit: Yup.string().required("*חובה"),
        ingredient: Yup.string().required("*חובה"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleAddingNewIngredient(values)
        setSubmitting(false)
        resetForm()
      }}
    >
      {(formik) => (
        <Container className="my-5">
          <NewRecipeSteps step1 step2 />
          <Prompt
            when={isEnteringData}
            message={() => "המתכון שלך לא יישמר, האם אתה בטוח ?"}
          />
          <Form onFocus={handleFormFocus} onSubmit={formik.handleSubmit}>
            <Row>
              <Col lg={2}>
                <AddRecipeFormInput
                  formik={formik}
                  placeholder="*כמות"
                  name="qty"
                  id="qty"
                  type="text"
                />
              </Col>
              <Col lg={2}>
                <Form.Group>
                  <CustomSelect
                    options={measureUnits}
                    placeholder="יחידות מידה"
                    value={formik.values.measureUnit}
                    onChange={(selectedMeasureUnit) =>
                      formik.setFieldValue(
                        "measureUnit",
                        selectedMeasureUnit.label
                      )
                    }
                  />
                  {formik.touched.measureUnit && formik.errors.measureUnit && (
                    <FormErrorMessages error={formik.errors.measureUnit} />
                  )}
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group>
                  <CustomSelect
                    placeholder="רכיבים"
                    options={ingredients}
                    value={formik.values.ingredient}
                    onChange={(selectedIngredient) =>
                      formik.setFieldValue(
                        "ingredient",
                        selectedIngredient.label
                      )
                    }
                  />
                  {formik.touched.ingredient && formik.errors.ingredient && (
                    <FormErrorMessages error={formik.errors.ingredient} />
                  )}
                </Form.Group>
              </Col>
              <Col lg={4}>
                <AddRecipeFormInput
                  formik={formik}
                  placeholder="קצוץ, חתוך לקוביות וכ'ו"
                  name="note"
                  id="note"
                  type="text"
                />
              </Col>
              <Col lg={2}>
                <Form.Group>
                  <Button type="submit" variant="success">
                    +
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <NewIngredientsList newRecipeIngredients={newRecipeIngredients} />
        </Container>
      )}
    </Formik>
  )
}

export default NewRecipeIngredientsPage
