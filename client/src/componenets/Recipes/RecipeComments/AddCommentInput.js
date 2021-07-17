import React from "react"
import { useParams } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { Form, Button } from "react-bootstrap"
import AddRecipeFormInput from "../AddRecipeForm/AddRecipeFormInput"
import useHttp from "../../../hooks/use-http"
import styles from "./AddCommentInput.module.scss"
import { addRecipeCommentById } from "../../../DAL/recipesApi"
import Loader from "../../Loader/Loader"
import Message from "../../Message/Message"

const AddCommentInput = ({ handleShowNewCommentList }) => {
  const { id: recipeID } = useParams()
  const { sendRequest, status, error, data } = useHttp(addRecipeCommentById)
  const handleFormSubmit = (content) => {
    sendRequest({ recipeID, content })
  }

  if (status === "loading") return <Loader />

  if (status === "error") return <Message> {error} </Message>

  if (status === "completed" && data) {
    handleShowNewCommentList(data.comments)
    return <Message variant="success"> {data.msg} </Message>
  }

  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={Yup.object({
        comment: Yup.string().required("*חובה"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleFormSubmit(values)
        setSubmitting(false)
        resetForm()
      }}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className={styles["add-comment-container"]}
        >
          <AddRecipeFormInput
            formik={formik}
            as="textarea"
            placeholder="הוסף תגובה"
            name="comment"
            id="comment"
            type="text"
            width="w-100"
          />
          <Button
            className={styles["add-btn"]}
            variant="outline-success"
            type="submit"
          >
            שלח
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddCommentInput