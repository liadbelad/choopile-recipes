const express = require("express")
const router = express.Router()
const {
  getRecipes,
  getRecipesOfCategory,
  getUserRecipes,
  getPopularRecipes,
  getNewestRecipes,
  getSingleRecipeById,
  updateSingleRecipeViewsById,
  addSingleRecipe,
  updateSingleRecipe,
} = require("../controllers/recipeController")
const fileUpload = require("../middlewares/fileUploadMiddleware")
const validation = require("../middlewares/validationMiddleware")
const validateCookie = require("../middlewares/validateCookieMiddleware")
const { recipeDetailsSchema } = require("../validations/recipeValidation")

// `/api/recipes?popular='false'&keyword=${keyword}&pageNumber=${pageNumber}&recipeCount={recipeCount}`

// get 1 time the data from server on homepage and then manpulate date on client routes using context for recipes

router.get("/", getRecipes)

router.get("/categories", getRecipesOfCategory)

router.get("/users/:userId", validateCookie, getUserRecipes)

router.get("/popular", getPopularRecipes)

router.get("/newest", getNewestRecipes)

router.post(
  "/add",
  fileUpload.single("imageFiles"),
  validation(recipeDetailsSchema),
  addSingleRecipe
)

router.put("/views/:recipeId", updateSingleRecipeViewsById)

router
  .route("/:recipeId")
  .get(getSingleRecipeById)
  .put(
    fileUpload.single("imageFiles"),
    validation(recipeDetailsSchema),
    updateSingleRecipe
  )

module.exports = router
