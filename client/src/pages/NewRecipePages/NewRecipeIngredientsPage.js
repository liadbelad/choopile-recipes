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

  const handleDeleteNewIngredient = (deleteIdx) => {
    if (window.confirm(`האם אתה בטוח ?`)) {
      const filteredNewIngredients = newRecipeIngredients.filter(
        (ingredient, idx) => idx !== deleteIdx
      )
      setNewRecipeIngredients(filteredNewIngredients)
    }
  }

  const handleFormSubmit = () => {
    handleAddRecipeIngredients(newRecipeIngredients)
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

    if (newRecipeIngredients.length === 0) {
      handleFormFocus()
    }

    if (newRecipeIngredients.length > 0) {
      handleFinishEntering()
    }
  }, [isLoggedIn, ingredients, measureUnits, newRecipeIngredients, history])

  return (
    <Formik
      initialValues={{
        qty: "",
        measureUnit: {},
        ingredient: {},
        title: "",
        note: "",
      }}
      validationSchema={Yup.object().shape({
        qty: Yup.number("מספרים בלבד").required("*חובה").positive("מספר חיובי"),
        measureUnit: Yup.object().required("*חובה"),
        ingredient: Yup.object().required("*חובה"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleAddingNewIngredient(values)
        setSubmitting(false)
        resetForm()
      }}
    >
      {(formik) => (
        <>
          <Container className="my-5">
            <NewRecipeSteps step1 step2 />
            <Prompt
              when={isEnteringData}
              message={() => "המתכון שלך לא יישמר, האם אתה בטוח ?"}
            />
            <Form onFocus={handleFormFocus} onSubmit={formik.handleSubmit}>
              <Row>
                <Col lg={4}>
                  <AddRecipeFormInput
                    formik={formik}
                    placeholder="*כמות"
                    name="qty"
                    id="qty"
                    type="text"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <CustomSelect
                      options={measureUnits}
                      placeholder="*יחידות מידה"
                      value={formik.values.measureUnit}
                      onChange={(selectedMeasureUnit) =>
                        formik.setFieldValue("measureUnit", selectedMeasureUnit)
                      }
                    />
                    {formik.touched.measureUnit &&
                      formik.errors.measureUnit && (
                        <FormErrorMessages error={formik.errors.measureUnit} />
                      )}
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <CustomSelect
                      placeholder="*רכיבים"
                      options={ingredients}
                      value={formik.values.ingredient}
                      onChange={(selectedIngredient) =>
                        formik.setFieldValue("ingredient", selectedIngredient)
                      }
                    />
                    {formik.touched.ingredient && formik.errors.ingredient && (
                      <FormErrorMessages error={formik.errors.ingredient} />
                    )}
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <AddRecipeFormInput
                    formik={formik}
                    placeholder="כותרת למשל: לבשר, לרוטב וכ'ו"
                    name="title"
                    id="title"
                    type="text"
                  />
                </Col>
                <Col lg={6}>
                  <AddRecipeFormInput
                    formik={formik}
                    placeholder="קצוץ, חתוך לקוביות וכ'ו"
                    name="note"
                    id="note"
                    type="text"
                  />
                </Col>
                <Col lg={1}>
                  <Form.Group>
                    <Button type="submit" variant="success">
                      +
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <NewIngredientsList
              newRecipeIngredients={newRecipeIngredients}
              handleDeleteNewIngredient={handleDeleteNewIngredient}
            />

            <Row>
              <Col className="text-center my-3">
                <Button
                  disabled={newRecipeIngredients.length === 0}
                  className="w-25"
                  variant="dark"
                  onClick={handleFormSubmit}
                >
                  להוראות ההכנה
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Formik>
  )
}

export default NewRecipeIngredientsPage
