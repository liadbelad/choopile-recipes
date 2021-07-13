import React, { useState, useEffect, useContext } from "react"
import { useHistory, Prompt } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import AuthContext from "../../store/AuthCtx/auth-context"
import AddRecipeFormInput from "../../componenets/Recipes/AddRecipeForm/AddRecipeFormInput"
import NewRecipeContext from "../../store/NewRecipeCtx/new-recipe-context"
import NewRecipeSteps from "../../componenets/Recipes/NewRecipeSteps/NewRecipeSteps"
import NewInstructionsList from "../../componenets/Recipes/AddRecipeForm/NewInstructionsList"

const NewRecipeInstructionsPage = () => {
  const [isEnteringData, setIsEnteringData] = useState(false)
  const [newRecipeInstructions, setNewRecipeInstructions] = useState([])

  const { isLoggedIn } = useContext(AuthContext)

  const { handleAddRecipeInstructions, recipeInstructions } =
    useContext(NewRecipeContext)

  const history = useHistory()

  const handleFormFocus = () => {
    setIsEnteringData(true)
  }

  const handleFinishEntering = () => {
    setIsEnteringData(false)
  }

  const handleAddingNewInstruction = (newInstruction) => {
    setNewRecipeInstructions((prevNewRecipeInstructions) => [
      ...prevNewRecipeInstructions,
      newInstruction,
    ])
  }

  const handleDeleteNewInstruction = (deleteIdx) => {
    if (window.confirm(`האם אתה בטוח ?`)) {
      const filteredNewInstructions = newRecipeInstructions.filter(
        (Instruction, idx) => idx !== deleteIdx
      )
      setNewRecipeInstructions(filteredNewInstructions)
    }
  }

  const handleFormSubmit = () => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"))

    handleAddRecipeInstructions(newRecipeInstructions, storedUserInfo.id)

    history.push("/recipes/new/success")
  }

  useEffect(() => {
    if (!isLoggedIn) {
      history.push({
        pathname: "/",
        state: { isRedirect: true },
      })
    }

    if (newRecipeInstructions.length === 0) {
      handleFormFocus()
    }

    if (newRecipeInstructions.length > 0) {
      handleFinishEntering()
    }
  }, [isLoggedIn, newRecipeInstructions])

  return (
    <Formik
      initialValues={{
        instruction: "",
      }}
      validationSchema={Yup.object().shape({
        instruction: Yup.string().required("*חובה"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleAddingNewInstruction(values)
        setSubmitting(false)
        resetForm()
      }}
    >
      {(formik) => (
        <Container className="my-5">
          <NewRecipeSteps step1 step2 step3 />
          <Prompt
            when={isEnteringData}
            message={() => "המתכון שלך לא יישמר, האם אתה בטוח ?"}
          />
          <Form onFocus={handleFormFocus} onSubmit={formik.handleSubmit}>
            <Row className="d-flex justify-content-center text-center">
              <AddRecipeFormInput
                formik={formik}
                placeholder="*מה יבוצע בשלב הזה?"
                name="instruction"
                id="instruction"
                type="text"
                width="w-50"
              />

              <Form.Group>
                <Button type="submit" variant="success">
                  +
                </Button>
              </Form.Group>
            </Row>
          </Form>

          <NewInstructionsList
            newRecipeInstructions={newRecipeInstructions}
            handleDeleteNewInstruction={handleDeleteNewInstruction}
          />

          <Row>
            <Col className="text-center my-3">
              <Button
                disabled={newRecipeInstructions.length === 0}
                className="w-25"
                variant="dark"
                onClick={handleFormSubmit}
              >
                הוסף מתכון
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  )
}

export default NewRecipeInstructionsPage
