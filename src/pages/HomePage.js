import React, { useContext, useEffect, useState } from "react"
import ModalContextProvider from "../store/ModalCtx/ModalContextProvider"
import ModalContext from "../store/ModalCtx/modal-context"
import Header from "../componenets/Header/Header"
import ModalForm from "../componenets/Modal/ModalForm"
import LoginForm from "../componenets/Auth/LoginForm"
import RegisterForm from "../componenets/Auth/RegisterForm"
import RecipesList from "../componenets/Recipes/RecipesList/RecipesList"
import Menu from "../componenets/Menu/Menu"
import { getAllRecipesHomepage } from "../DAL/api"

const HomePage = () => {
  const [recipes, setRecipes] = useState([])
  // const [showModal, setShowModal] = useState(true)
  // const [modalContent, setModalContent] = useState("register")

  // const handleOpenModel = () => setShowModal(true)
  // const handleCloseModal = () => setShowModal(false)

  // const handleModalContent = (newContent) => setModalContent(newContent)

  const { modalContent, handleCloseModal, handleModalContent, showModal } =
    useContext(ModalContext)

  console.log("homepage", modalContent, showModal)
  const fetchRecipesHomepage = async () => {
    const recipesHomepage = await getAllRecipesHomepage()
    setRecipes(recipesHomepage)
  }

  useEffect(() => {
    fetchRecipesHomepage()
  }, [])

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : null} */}
      {/* <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row> */}
      <Menu />
      <Header />

      <span id="newestRecipesGallery">
        <RecipesList className="flex-container" recipes={recipes} />
      </span>

      <ModalForm>
        {modalContent === "register" ? (
          <RegisterForm
            handleCloseModal={handleCloseModal}
            handleModalContent={handleModalContent}
          />
        ) : (
          <LoginForm
            handleCloseModal={handleCloseModal}
            handleModalContent={handleModalContent}
          />
        )}
      </ModalForm>
    </>
  )
}

export default HomePage
