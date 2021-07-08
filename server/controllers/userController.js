const {
  registerUserQuery,
  userExistQuery,
  loginUserQuery,
} = require("../DAL/api")

// @desc    register new user
// @route   POST /api/users
// @access  Public
const register = async (req, res) => {
  const { firstName, email, password, lastName } = req.body

  const newUser = { firstName, lastName, email, password }
  try {
    const userExist = await userExistQuery(email)
    if (userExist[0]) {
      throw new Error("משתמש קיים,התחבר")
    }

    const createdUser = await registerUserQuery(newUser)

    if (createdUser.length === 0) {
      throw new Error("שגיאה ביצירת משתמש,נסה שוב מאוחר יותר")
    }

    res.status(201).json(createdUser[0])
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
    const user = await loginUserQuery(email, password)
    if (!user) {
      throw new Error("אימייל או סיסמא לא נכונים")
    }
    res.status(200).json(user)
  } catch (error) {
    return res.status(401).json({ error: true, message: error.message })
  }
}

module.exports = { login, register }
