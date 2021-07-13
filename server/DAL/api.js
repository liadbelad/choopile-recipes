const connection = require("../config/db")
const { arrangeRecipeData } = require("../utills/functions")

// USERS API

const userExistQuery = async (email) => {
  const query = `SELECT id FROM users WHERE email = ?`
  const connector = await connection
  const [userExist] = await connector.execute(query, [email])
  return userExist
}

const registerUserQuery = async (
  firstName,
  lastName,
  hashedPassword,
  email
) => {
  const insertNewUserQuery = `INSERT INTO users (first_name,last_name,password,email) VALUES(?,?,?,?)`

  const connector = await connection
  await connector.execute(insertNewUserQuery, [
    firstName,
    lastName,
    hashedPassword,
    email,
  ])

  const [userData] = await connector.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  )

  return userData
}

const loginUserQuery = async (email) => {
  try {
    const loginQuery = `SELECT id,first_name as 'firstName',last_name as 'lastName',email,password FROM users WHERE email = ?`
    const connector = await connection
    const [userExist] = await connector.execute(loginQuery, [email])
    return userExist[0]
  } catch (error) {
    return error
  }
}

// RECIPES API

const getRecipeBySearchTermQuery = async (keyword, limit = 2) => {
  try {
    const query = `SELECT id,userId,title 
    FROM recipes 
    WHERE title LIKE '%${keyword}%'
    OR description LIKE '%${keyword}%'
    LIMIT ${limit}
    `
    const connector = await connection
    const [recipes] = await connector.execute(query)
    return recipes
  } catch (error) {
    return error.message
  }
}

const getRecipesQuery = async () => {
  try {
    const connector = await connection
    const [recipes] = await connector.execute(
      `SELECT recipes.*, recipe_images.url 
      FROM recipes
      JOIN recipe_images
      ON recipes.id = recipe_images.recipeId`
    )
    return recipes
  } catch (error) {
    return error.message
  }
}

const getRecipesOfCategoryQuery = async (categoryId) => {
  try {
    const query = `SELECT recipes.id,recipes.title,recipes.userId 
    FROM recipes
    WHERE recipes.id IN
    (
        SELECT recipe_categories.recipeId 
        FROM recipe_categories
        where recipe_categories.categoryId = ?
    )`
    const connector = await connection
    const [recipesOfCategory] = await connector.execute(query, [categoryId])
    return recipesOfCategory
  } catch (error) {
    return error.message
  }
}

const getUserRecipesOfCategoryQuery = async (userID, categoryID) => {
  try {
    const query = `SELECT recipes.id,recipes.title,recipes.userId 
    FROM recipes
    WHERE recipes.userId = ? 
    AND recipes.id IN
    (
        SELECT recipe_categories.recipeId 
        FROM recipe_categories
        where recipe_categories.categoryId = ?
    )`
    const connector = await connection
    const [userRecipesOfCategory] = await connector.execute(query, [
      userID,
      categoryID,
    ])
    return userRecipesOfCategory
  } catch (error) {
    return error.message
  }
}

const getRecipesOfUserQuery = async (userId, limit = 5, pageNumber = 0) => {
  try {
    const query = `SELECT recipes.id, recipes.title 
    FROM recipes
    WHERE recipes.userId = ?
    LIMIT ?
    OFFSET ?
    ;`
    const connector = await connection
    const [userRecipes] = await connector.execute(query, [
      userId,
      limit,
      pageNumber * limit,
    ])

    return userRecipes
  } catch (error) {
    return error.message
  }
}

const getPopularRecipesQuery = async () => {
  try {
    const query = `SELECT recipes.title,recipes.views
    FROM recipes
    ORDER BY recipes.views DESC;`
    const connector = await connection
    const [rows] = await connector.execute(query)

    return rows
  } catch (error) {
    return error.message
  }
}

const getNewestRecipesQuery = async () => {
  try {
    const query = `SELECT id,userId,title,description,views,createdAt,isPrivate
    FROM recipes
    ORDER BY recipes.createdAt DESC;`
    const connector = await connection
    const [rows] = await connector.execute(query)

    return rows
  } catch (error) {
    return error.message
  }
}

const getSingleRecipeByIdQuery = async (recipeId) => {
  try {
    const recipeDetailsQuery = `SELECT * 
      FROM recipes 
      WHERE recipes.id = ?;`

    const recipeInstructionsQuery = `SELECT * FROM recipe_instructions
    WHERE recipe_instructions.recipeId = ?;`

    const recipeIngredientsQuery = `SELECT 
    ingredients.name 'name',measuring_units.name 'measureUnit',
    recipe_ingredients.qty 'amount',recipe_ingredients.note,
    recipe_ingredients.title
    FROM recipes
    JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipeId
    JOIN ingredients on ingredients.id = recipe_ingredients.ingredientId
    JOIN measuring_units on measuring_units.id = recipe_ingredients.measureUnitId
    WHERE recipes.id = ?;`

    const recipeImagesQuery = `SELECT url FROM recipe_images where recipeId = ?`

    const recipeCategoryQuery = `SELECT categories.label 
    FROM categories
    where id = (
    SELECT categoryId
    FROM recipe_categories
    WHERE recipeId = ?
    ); `

    const connector = await connection

    const [recipeDetails] = await connector.execute(recipeDetailsQuery, [
      recipeId,
    ])
    const [recipeInstructions] = await connector.execute(
      recipeInstructionsQuery,
      [recipeId]
    )
    const [recipeIngredients] = await connector.execute(
      recipeIngredientsQuery,
      [recipeId]
    )

    const [recipeImages] = await connector.execute(recipeImagesQuery, [
      recipeId,
    ])

    const [recipeCategory] = await connector.execute(recipeCategoryQuery, [
      recipeId,
    ])

    const recipeData = arrangeRecipeData({
      recipeDetails,
      recipeInstructions,
      recipeIngredients,
      recipeImages,
      recipeCategory,
    })
    return recipeData
  } catch (error) {
    return error.message
  }
}

const updateSingleRecipeViewsByIdQuery = async (recipeId) => {
  try {
    const query = `UPDATE recipes 
      SET views = views + 1 
      WHERE recipes.id = ?;`

    const connector = await connection

    const [updatedRecipe] = await connector.execute(query, [recipeId])
    return updatedRecipe
  } catch (error) {
    return error.message
  }
}

// CATEGORIES API

const getAllCategoriesQuery = async () => {
  try {
    const connector = await connection
    const [rows] = await connector.execute("SELECT * FROM `categories`")
    return rows
  } catch (error) {
    return error.message
  }
}

const getAllCategoriesOfUserRecipesQuery = async (userID) => {
  try {
    const query = `SELECT id as 'value',label
    FROM categories
    WHERE id IN
        (
          SELECT categoryId 
                FROM recipe_categories
                WHERE recipeId IN (
            SELECT recipes.id
                    FROM recipes
                    WHERE recipes.userId = ?
                )
        );`
    const connector = await connection
    const [categoriesOfUserRecipes] = await connector.execute(query, [userID])
    return categoriesOfUserRecipes
  } catch (error) {
    return error.message
  }
}

// Measure Units API

const getAllMeasureUnitsQuery = async () => {
  const noTitleId = 1
  try {
    const connector = await connection
    const [rows] = await connector.execute(
      "SELECT id 'value',name 'label' FROM `measuring_units` WHERE id != ?",
      [noTitleId]
    )
    return rows
  } catch (error) {
    return error.message
  }
}

// Measure Units API

const getAllIngredientsQuery = async () => {
  try {
    const connector = await connection
    const [rows] = await connector.execute(
      "SELECT id 'value',name 'label' FROM `ingredients`"
    )
    return rows
  } catch (error) {
    console.log("error".red, error.message)
    return error.message
  }
}

module.exports = {
  registerUserQuery,
  userExistQuery,
  loginUserQuery,
  getAllCategoriesQuery,
  getRecipesQuery,
  getRecipesOfCategoryQuery,
  getRecipeBySearchTermQuery,
  getUserRecipesOfCategoryQuery,
  getAllCategoriesOfUserRecipesQuery,
  getRecipesOfUserQuery,
  getPopularRecipesQuery,
  getNewestRecipesQuery,
  getSingleRecipeByIdQuery,
  getAllMeasureUnitsQuery,
  getAllIngredientsQuery,
  updateSingleRecipeViewsByIdQuery,
}
