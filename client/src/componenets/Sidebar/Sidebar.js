import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import RegisterLoginLinks from "../RegisterLoginLinks/RegisterLoginLinks"
import SocialLinks from "../SocialLinks/SocialLinks"
import styles from "./Sidebar.module.scss"

function Sidebar({
  showSidebar,
  handleShowSidenav,
  handleOpenModalWithContent,
}) {
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
          <SocialLinks />
        </div>
        <RegisterLoginLinks
          handleOpenModalWithContent={handleOpenModalWithContent}
        />
      </Nav>
    </aside>
  )
}

export default Sidebar
