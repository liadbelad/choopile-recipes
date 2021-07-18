import React, { useEffect } from "react"
import { useLocation, Link, useHistory } from "react-router-dom"
import ConffetiEffect from "../../componenets/UI/Conffeti/ConffetiEffect"
import Container from "react-bootstrap/Container"

const NewRecipeSuccessPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const location = useLocation()

  const history = useHistory()

  useEffect(() => {
    if (!userInfo || !location.state) history.replace("/")
  }, [history])

  return (
    <Container>
      <ConffetiEffect />
      <div className="d-flex flex-column justify-content-center align-items-center text-center my-5">
        <h1 className="my-3"> המתכון שלך מוכן! </h1>
        <Link
          className="btn btn-outline-warning font-weight-bold btn-lg"
          to={`/recipes/${location.state.recipeId}`}
        >
          צפה במתכון 🤩
        </Link>
      </div>
    </Container>
  )
}

export default NewRecipeSuccessPage
