import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "react-router-dom"
import addRecipeImg from "../../../utills/images/add-recipe.png"
import profileIcon from "../../../utills/images/profile-icon.png"
import logoutIcon from "../../../utills/images/logout-icon.png"

const UserInfoDropDownItem = ({ linkTo, text, image }) => {
  console.log(linkTo, text)
  return (
    <Dropdown.Item as={Link} to={linkTo} className="d-flex mb-2">
      <img src={image} alt="add recipe" width="25px" height="25px" />
      <span className="ml-2"> {text} </span>
    </Dropdown.Item>
  )
}

const UserInfoDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-userInfo">
        אזור אישי <i className="fas fa-user"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="text-right" style={{ width: "200px" }}>
        <Dropdown.Header>
          <h5>שלום ליעד</h5>
        </Dropdown.Header>
        <UserInfoDropDownItem
          text="הוסף מתכון"
          linkTo="/new-recipe"
          image={addRecipeImg}
        />
        <UserInfoDropDownItem
          text="הפרופיל שלי"
          linkTo="/profile"
          image={profileIcon}
        />
        <UserInfoDropDownItem text="התנתק" linkTo="/" image={logoutIcon} />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserInfoDropdown
