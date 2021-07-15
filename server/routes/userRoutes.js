const express = require("express")
const router = express.Router()
const validation = require("../middlewares/validationMiddleware")
const {
  userLoginSchema,
  userRegisterSchema,
} = require("../validations/userValidation")
const {
  register,
  login,
  getUserSession,
} = require("../controllers/userController")

router.post("/", validation(userRegisterSchema), register)
router
  .route("/login")
  .post(validation(userLoginSchema), login)
  .get(getUserSession)

module.exports = router
