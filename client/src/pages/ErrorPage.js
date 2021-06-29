import React from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const ErrorPage = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Looks like you are lost...</h2>
      <Link to="/" className="btn btn-primary my-3">
        To Homepage
      </Link>
    </Container>
  )
}

export default ErrorPage
