import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import Header from "../componenets/Header/Header"
import ModalForm from "../componenets/Modal/ModalForm"
import LoginForm from "../componenets/LoginForm/LoginForm"
import RegisterForm from "../componenets/RegisterForm/RegisterForm"
import RecipeCard from "../componenets/RecipeCard/RecipeCard"

const HomePage = () => {
  const [showModal, setShowModal] = useState(true)
  const [modalContent, setModalContent] = useState("register")

  const handleOpenModel = () => setShowModal(true)
  const handleCloseModel = () => setShowModal(false)

  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal)
  }

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
      <Header />

      <ModalForm showModal={showModal} handleCloseModel={handleCloseModel}>
        {modalContent === "register" ? (
          <RegisterForm handleModalContent={handleModalContent} />
        ) : (
          <LoginForm handleModalContent={handleModalContent} />
        )}
      </ModalForm>
      <div
        className={`d-flex flex-column align-items-center justify-content-between p-3 my-3`}
      >
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        {/* <RecipeCard /> */}
        {/* <RecipeCard /> */}
      </div>
    </>
  )
}

export default HomePage
