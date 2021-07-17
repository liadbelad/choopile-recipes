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
  .get(getUserSession)
  .post(validation(userLoginSchema), login)

module.exports = router
