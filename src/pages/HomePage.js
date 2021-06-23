import React, { useState } from "react"
import Header from "../componenets/Header/Header"
import ModalForm from "../componenets/Modal/ModalForm"
import LoginForm from "../componenets/Auth/LoginForm"
import RegisterForm from "../componenets/Auth/RegisterForm"
import RecipeCard from "../componenets/Recipes/RecipeGallery/RecipeCard/RecipeCard"
import Menu from "../componenets/Menu/Menu"

const HomePage = () => {
  const [showModal, setShowModal] = useState(true)
  const [modalContent, setModalContent] = useState("register")

  const handleOpenModel = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleModalContent = (newContent) => setModalContent(newContent)

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

      <div
        className={`d-flex flex-column align-items-center justify-content-between p-3 my-2`}
      >
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <ModalForm showModal={showModal} handleCloseModel={handleCloseModal}>
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
