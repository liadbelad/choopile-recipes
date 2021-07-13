const User = require("../models/users")

const isUserExist = async (email) => {
  return await User.findOne({ where: { email } })
}

const registerNewUser = async (firstName, lastName, email, password) => {
  return User.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  })
}

module.exports = { isUserExist, registerNewUser }
