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
} = require("../controllers/recipeController")

// `/api/recipes?popular='false'&keyword=${keyword}&pageNumber=${pageNumber}&recipeCount={recipeCount}`

// get 1 time the data from server on homepage and then manpulate date on client routes using context for recipes

router.get("/", getRecipes)

router.get("/categories", getRecipesOfCategory)

router.get("/users/:userId", getUserRecipes)

router.get("/popular", getPopularRecipes)

router.get("/newest", getNewestRecipes)

router.put("/views/:recipeId", updateSingleRecipeViewsById)

router.route("/:recipeId").get(getSingleRecipeById)

// // @desc    Fetch single product
// // @route   GET /api/recipes/:recipeId
// // @access  Public
// router.get("/:recipeId", (req, res) => {

//   const recipeDetails = db.query(
//     `SELECT *
//   FROM recipes
//   WHERE recipes.id = ${recipeId};`,
//     (err, result) => {
//       if (err) throw err
//       console.log(`recipeDetails ${result}`.green.bold)
//     }
//   )

//   const recipeIngredients = db.query(
//     `SELECT
//   ingredients.name,measuring_units.name,
//   recipe_ingredients.qty,recipe_ingredients.note
//   FROM recipes
//   JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipeId
//   JOIN ingredients on ingredients.id = recipe_ingredients.ingredientId
//   JOIN measuring_units on measuring_units.id = recipe_ingredients.measureUnitId
//   WHERE recipes.id = ${recipeId};`,
//     (err, result) => {
//       if (err) throw err
//       console.log(`recipeIngredients ${result}`.yellow.bold)
//     }
//   )

//   const recipeInstructions = db.query(
//     `SELECT * FROM recipes_instructions
//     WHERE recipes_instructions.recipeId = ${recipeId};`,
//     (err, result) => {
//       if (err) throw err
//       console.log(`recipeInstructions ${result}`.red.bold)
//     }
//   )

//   res.json(recipeDetails)
// })

module.exports = router
