import React, { useState, useContext } from "react"
import { LinkContainer } from "react-router-bootstrap"
import ModalContext from "../../store/ModalCtx/modal-context"
import { Navbar, Nav, Container } from "react-bootstrap"
import styles from "./MainNavbar.module.scss"
import Sidebar from "../Sidebar/Sidebar"
const MainNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const { handleModalContent, handleOpenModal } = useContext(ModalContext)

  const handleOpenModalWithContent = (e) => {
    handleOpenModal()
    handleModalContent(e.target.name)
  }

  const handleShowSidenav = () => {
    setShowSidebar((prevShowSidenav) => !prevShowSidenav)
  }

  return (
    <>
      <Navbar
        className="fixed-top"
        style={{ background: "#fff" }}
        variant="light"
        collapseOnSelect
      >
        <i
          className="fas fa-bars btn btn-outline-danger"
          onClick={handleShowSidenav}
        ></i>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between w-100">
              <div className="d-flex">
                <Nav.Link name="login" onClick={handleOpenModalWithContent}>
                  התחבר
                </Nav.Link>
                <Nav.Link> | </Nav.Link>
                <Nav.Link name="register" onClick={handleOpenModalWithContent}>
                  הרשם
                </Nav.Link>
              </div>
              <LinkContainer to="/">
                <Navbar.Brand className={styles.brand}>CHOOPIL'E</Navbar.Brand>
              </LinkContainer>
              <div className={styles["social-links"]}>
                <Nav.Link href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook"></i>
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Nav.Link>
                <Nav.Link href="https://www.twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Sidebar
        showSidebar={showSidebar}
        handleShowSidenav={handleShowSidenav}
      />
    </>
  )
}

export default MainNavbar
