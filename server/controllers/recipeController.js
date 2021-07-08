const {
  getRecipesQuery,
  getRecipesOfCategoryQuery,
  getRecipesOfUserQuery,
  getPopularRecipesQuery,
  getNewestRecipesQuery,
  getSingleRecipeByIdQuery,
  getUserRecipesOfCategoryQuery,
  getRecipeBySearchTermQuery,
  updateSingleRecipeViewsByIdQuery,
} = require("../DAL/api")

// @desc    Fetch all recipes
// @route   GET /api/recipes
// @access  Public
const getRecipes = async (req, res) => {
  try {
    const { keyword } = req.query
    if (!keyword) {
      const recipes = await getRecipesQuery()
      return res.json(recipes)
    }
    const recipesBySearchTerm = await getRecipeBySearchTermQuery(keyword)
    res.json(recipesBySearchTerm)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Fetch all recipes of a certain category
// @route   GET /api/recipes/categories
// @access  Public
const getRecipesOfCategory = async (req, res) => {
  try {
    const { category, user } = req.query
    if (!user) {
      const recipesOfCategory = await getRecipesOfCategoryQuery(category)
      res.json(recipesOfCategory)
    } else {
      const userRecipesOfCategory = await getUserRecipesOfCategoryQuery(
        user,
        category
      )
      res.json(userRecipesOfCategory)
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Fetch all recipes of a certain user
// @route   GET /api/recipes/users/:userId
// @access  Public
const getUserRecipes = async (req, res) => {
  try {
    const { userId } = req.params
    const userRecipes = await getRecipesOfUserQuery(userId)
    res.json(userRecipes)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Fetch all recipes sorted by views
// @route   GET /api/recipes/popular
// @access  Public
const getPopularRecipes = async (req, res) => {
  try {
    const popularRecipes = await getPopularRecipesQuery()
    res.json(popularRecipes)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Fetch all recipes sorted by newest
// @route   GET /api/recipes/newest
// @access  Public
const getNewestRecipes = async (req, res) => {
  try {
    const newestRecipes = await getNewestRecipesQuery()
    res.json(newestRecipes)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Fetch single recipe
// @route   GET /api/recipes/:recipeId
// @access  Public
const getSingleRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params
    const recipe = await getSingleRecipeByIdQuery(recipeId)
    res.json(recipe)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    Update single recipe views
// @route   PUT /api/recipes/:recipeId
// @access  Public
const updateSingleRecipeViewsById = async (req, res) => {
  try {
    const { recipeId } = req.params
    await updateSingleRecipeViewsByIdQuery(recipeId)
    res.status(204).send("צפיות עודכנו")
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = {
  getRecipes,
  getRecipesOfCategory,
  getUserRecipes,
  getPopularRecipes,
  getNewestRecipes,
  getSingleRecipeById,
  updateSingleRecipeViewsById,
}
