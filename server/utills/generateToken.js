const jwt = require("jsonwebtoken")

const generateToken = (id, email, firstName) => {
  return jwt.sign({ id, email, firstName }, process.env.JWT_SECRET, {
    expiresIn: "6h",
  })
}

module.exports = generateToken
