const express = require("express")
const colors = require("colors")
const path = require("path")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const userRouter = require("./routes/userRoutes")
const recipeRouter = require("./routes/recipeRoutes")
const categoriesRouter = require("./routes/categoriesRoutes")
const measureUnitsRouter = require("./routes/measureUnitsRoutes")
const ingredientsRouter = require("./routes/ingredientsRoutes")
const fileUpload = require("./middlewares/fileUploadMiddleware")
const app = express()
require("dotenv").config()

app.use(cors())
app.use(logger("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/recipes", recipeRouter)
app.use("/api/users", userRouter)
app.use("/api/categories", categoriesRouter)
app.use("/api/measure_units", measureUnitsRouter)
app.use("/api/ingredients", ingredientsRouter)

app.post("/upload_files", fileUpload.array("image"), uploadFiles)

function uploadFiles(req, res) {
  console.log(req.body)
  console.log(req.files)
  res.json({ message: "Successfully uploaded files" })
}

// sequelize.sync()

module.exports = app
