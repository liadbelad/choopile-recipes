import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"
// import "./Sidebar.css"

function Sidebar({ showSidebar, handleShowSidenav }) {
  return (
    <aside
      className={
        showSidebar
          ? `${styles["nav-menu"]} ${styles.active}`
          : styles["nav-menu"]
      }
    >
      <Nav
        className="flex-column align-items-center w-100"
        onClick={handleShowSidenav}
      >
        <Nav.Link className="h3 ml-auto w-100">&times;</Nav.Link>
        <LinkContainer to="/">
          <Navbar.Brand className={`${styles.brand} my-4`}>
            CHOOPIL'E
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/recipes">
          <Nav.Link>RECIPES</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/categories">
          <Nav.Link>CATEGORIES</Nav.Link>
        </LinkContainer>
        <div className={`${styles["social-links"]} my-3`}>
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
        <div className="d-flex">
          <Nav.Link>התחבר</Nav.Link>
          <Nav.Link> | </Nav.Link>
          <Nav.Link>הרשם</Nav.Link>
        </div>
      </Nav>
    </aside>
  )
}

export default Sidebar

{
  /* <aside
        className={`${styles["nav-menu"]} ${showSidebar && styles.active} `}
      >
        <Nav className="flex-column align-items-center w-100">
          <LinkContainer to="/">
            <Navbar.Brand className="my-4">CHOOPIL'E</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/recipes">
            <Nav.Link>RECIPES</Nav.Link>
          </LinkContainer>
          <div className={"d-flex"}>
            <Nav.Link href="https://www.facebook.com/" target="_blank">
              <i class="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/" target="_blank">
              <i class="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com/" target="_blank">
              <i class="fab fa-twitter"></i>
            </Nav.Link>
          </div>
          <div className="d-flex">
            <Nav.Link>התחבר</Nav.Link>
            <Nav.Link> | </Nav.Link>
            <Nav.Link>הרשם</Nav.Link>
          </div>
        </Nav>
      </aside> */
}
