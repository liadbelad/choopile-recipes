const {
  loginUserQuery,
  registerUserQuery,
  userExistQuery,
} = require("../DAL/api")
const bcrypt = require("bcryptjs")

// @desc    register new user
// @route   POST /api/users
// @access  Public
const register = async (req, res) => {
  const { firstName, email, password, lastName } = req.body

  try {
    const userExist = await userExistQuery(email)

    if (userExist[0]) {
      throw new Error("משתמש קיים,התחבר")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const createdUser = await registerUserQuery(
      firstName,
      lastName,
      hashedPassword,
      email
    )

    console.log(createdUser)

    if (!createdUser) {
      throw new Error("שגיאה ביצירת משתמש,נסה שוב מאוחר יותר")
    }

    res.status(201).json(createdUser)
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

// @desc    login user
// @route   POST /api/users
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await loginUserQuery(email)
    const isSamePassword = await bcrypt.compare(password, user.password)

    if (!user || !isSamePassword) {
      throw new Error("אימייל או סיסמא לא נכונים")
    }
    res.status(200).json(user)
  } catch (error) {
    return res.status(401).json({ error: true, message: error.message })
  }
}

module.exports = { login, register }
