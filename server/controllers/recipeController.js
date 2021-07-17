const {
  getRecipesOfCategoryQuery,
  getRecipesOfUserQuery,
  getPopularRecipesQuery,
  getNewestRecipesQuery,
  getSingleRecipeByIdQuery,
  getUserRecipesOfCategoryQuery,
  updateSingleRecipeViewsByIdQuery,
  getRecipesQuery,
  getRecipeBySearchTermQuery,
} = require("../DAL/api")
const {
  addNewRecipe,
  updateRecipe,
  addRecipeCommentForUser,
  getNumberOfPagesQuery,
} = require("../DAL/recipesApi")
const { PAGES_LIMIT } = require("../utills/constants")

// @desc    Fetch all recipes
// @route   GET /api/recipes
// @access  Public
const getRecipes = async (req, res) => {
  try {
    const pageSize = PAGES_LIMIT
    const pageNumber = Number(req.query.pageNumber) || 1
    const { keyword } = req.query
    if (!keyword) {
      const recipes = await getRecipesQuery(pageSize, pageNumber)
      return res.json(recipes)
    }
    const recipesBySearchTerm = await getRecipeBySearchTermQuery(keyword)
    res.json(recipesBySearchTerm)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    get number of pages for pagination by recipes amount
// @route   GET /api/recipes/pages
// @access  Public
const getNumberOfPages = async (req, res) => {
  try {
    const limit = PAGES_LIMIT
    const { user } = req.query
    if (!user) {
      const pages = await getNumberOfPagesQuery(limit)
      return res.json(pages)
    }
    // const recipesBySearchTerm = await getRecipeBySearchTermQuery(keyword)
    // res.json(recipesBySearchTerm)
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

// @desc    add single recipe
// @route   POST /api/recipes/add
// @access  Public
const addSingleRecipe = async (req, res) => {
  try {
    const { ...newRecipe } = req.body
    newRecipe.imageURL = req.file?.filename

    await addNewRecipe(newRecipe)
    res.status(200).send("מתכון התקבל")
  } catch (error) {
    res.status(404).json(error.message)
  }
}

// @desc    add recipe comment by user
// @route   POST /api/recipes/comments/:recipeId
// @access  Public
const addNewRecipeComment = async (req, res) => {
  try {
    const { comment: content } = req.body
    const { recipeId } = req.params
    const { userId } = req.cookies

    const commentsWithNewComment = await addRecipeCommentForUser(
      recipeId,
      userId,
      content
    )
    res
      .status(200)
      .json({ msg: "תודה, תגובתך הוספה", comments: commentsWithNewComment })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// @desc    update single recipe
// @route   PUT /api/recipes/update
// @access  Public
const updateSingleRecipe = async (req, res) => {
  try {
    const { ...updatedRecipe } = req.body
    updatedRecipe.imageURL = req.file?.filename
    const { recipeId } = req.params
    await updateRecipe(updatedRecipe, recipeId)
    res.status(200).send("המתכון עודכן בהצלחה")
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
  addSingleRecipe,
  addNewRecipeComment,
  updateSingleRecipeViewsById,
  updateSingleRecipe,
  getNumberOfPages,
}
