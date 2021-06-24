import React from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"

const SingleRecipePage = () => {
  const { id } = useParams()
  console.log(id)
  return <Container>Hello</Container>
}

export default SingleRecipePage
