import React, { useRef } from "react"
import FormContainer from "../componenets/FormContainer/FormContainer"
import { Form, Button } from "react-bootstrap"

const ImageUploadTestPage = () => {
  const fileRef = useRef()
  const emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    const files = fileRef.current.files
    const email = emailRef.current.value

    formData.append("email", email)
    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i])
    }
    fetch("http://localhost:5000/upload_files", {
      method: "POST",
      body: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => ("Error occured", err))
  }
  return (
    <FormContainer>
      <Form className="my-5 py-5" onSubmit={handleSubmit}>
        <Form.File
          ref={fileRef}
          id="files"
          label="Custom file input"
          custom
          multiple
        />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ImageUploadTestPage
