const express = require("express")
const router = express.Router()
const validation = require("../middlewares/validationMiddleware")
const {
  userLoginSchema,
  userRegisterSchema,
} = require("../validations/userValidation")
const { register, login } = require("../controllers/userController")

// `/api/recipes?popular='false'&keyword=${keyword}&pageNumber=${pageNumber}&recipeCount={recipeCount}`

// get 1 time the data from server on homepage and then manpulate date on client routes using context for recipes

router.post("/", validation(userRegisterSchema), register)
router.post("/login", validation(userLoginSchema), login)

module.exports = router
