import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"
// import "./Sidebar.css"

function Sidebar({ showSidebar, handleShowSidenav }) {
  return (
    <nav
      className={
        showSidebar
          ? `${styles["nav-menu"]} ${styles.active}`
          : styles["nav-menu"]
      }
    >
      <ul className="nav-menu-items" onClick={handleShowSidenav}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            X
          </Link>
        </li>

        <li>
          <Link to="/">
            <span> bla </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span> bla </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span> bla </span>
          </Link>
        </li>
      </ul>
    </nav>
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
