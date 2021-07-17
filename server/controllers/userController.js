const {
  loginUserQuery,
  registerUserQuery,
  userExistQuery,
} = require("../DAL/api")
const bcrypt = require("bcryptjs")
const generateToken = require("../utills/generateToken")

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

    if (!createdUser) {
      throw new Error("שגיאה ביצירת משתמש,נסה שוב מאוחר יותר")
    }

    const token = generateToken(
      createdUser.id,
      createdUser.email,
      createdUser.firstName
    )

    res.status(201).json({ createdUser, token })
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
    if (!user) {
      throw new Error("אימייל או סיסמא לא נכונים")
    }
    const isSamePassword = await bcrypt.compare(password, user.password)

    if (!isSamePassword) {
      throw new Error("אימייל או סיסמא לא נכונים")
    }
    const expiryDate = new Date(Number(new Date()) + 315360000000)

    res.cookie("userId", user.id, {
      expires: expiryDate,
      httpOnly: true,
    })
    req.session.userInfo = user

    const token = generateToken(user.id, user.email, user.firstName)

    res.status(200).json(user)
  } catch (error) {
    return res.status(401).json({ error: true, message: error.message })
  }
}

// @desc    get user session
// @route   GET /api/users/login
// @access  Public
const getUserSession = async (req, res) => {
  try {
    console.log(req.session)
    if (req.session.user) {
      res.json({ isLoggedIn: true, user: req.session.user })
    } else {
      res.status(401).json({ isLoggedIn: false })
    }
  } catch (error) {
    return res.status(401).json({ error: true, message: error.message })
  }
}

module.exports = { login, register, getUserSession }
