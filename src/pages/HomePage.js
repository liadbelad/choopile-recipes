import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import Header from "../componenets/Header/Header"
import ModalForm from "../componenets/Modal/ModalForm"
import LoginForm from "../componenets/LoginForm/LoginForm"
import RegisterForm from "../componenets/RegisterForm/RegisterForm"

const HomePage = () => {
  const [showModal, setShowModal] = useState(true)
  const [modalContent, setModalContent] = useState(<RegisterForm />)

  const handleOpenModel = () => setShowModal(true)
  const handleCloseModel = () => setShowModal(false)

  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal)
  }
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

      <ModalForm
        showModal={showModal}
        handleCloseModel={handleCloseModel}
        title="Login"
      >
        {modalContent}
      </ModalForm>
    </>
  )
}

export default HomePage
