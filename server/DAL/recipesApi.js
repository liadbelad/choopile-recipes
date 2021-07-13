// userID: 2,
// title: "bla blas",
// description: "asdasf asfasf asfasfika asjfbasjf",
// servings:2,
// prepTimeMins:20,
// image: "url.jpg",
// categoryID: 5,
// isPrivate:false,
// ingredients: [
//   { amount: 1, measureUnitId: 1, ingredientID: 1, note: "קצוץ לקוביות" },
//   { amount: 0.5, measureUnitId: 2, ingredientID: 3 },
//   { amount: 0.2, measureUnitId: 4, ingredientID: 2 },
// ],
// instructions: ["ערבב סוכר", "הוסף מלח", "חרטט משהו להוראה"],
const connection = require("../config/db")
// const Recipe = require("../models/recipe/recipes")
// const Sequelize = require("sequelize")
// const Op = Sequelize.Op

const getRecipesQuery = async (pageNumber = 0, limit = 5) => {
  return Recipe.findAll({ offset: pageNumber * 5, limit })
}

const getRecipeBySearchTermQuery = async (
  pageNumber = 0,
  limit = 5,
  keyword
) => {
  return Recipe.findAll({
    offset: pageNumber * 5,
    limit,
    where: {
      title: {
        [Op.like]: `%${keyword}%`,
      },
    },
  })
}

const addNewRecipe = async (newRecipe) => {
  const {
    userId,
    title,
    description,
    servings,
    category: categoryId,
    prepTimeMins,
    ingredients,
    instructions,
    imageURL,
  } = newRecipe

  const newRecipeDetailsQuery = `INSERT INTO recipes
    (userId,title,description,servings,prepTimeMins)
    VALUES(?,?,?,?,?)`

  const connector = await connection

  const [{ insertId: recipeId }] = await connector.execute(
    newRecipeDetailsQuery,
    [userId, title, description, servings, prepTimeMins]
  )

  const ingredientsArr = JSON.parse(ingredients)
  ingredientsArr.forEach((ingredient) =>
    addNewRecipeIngredient(ingredient, recipeId)
  )

  const instructionsArr = JSON.parse(instructions)
  instructionsArr.forEach((instruction) =>
    addNewRecipeInstruction(instruction, recipeId)
  )

  const addCategoryQuery = `INSERT INTO recipe_categories (recipeId,categoryid)
  VALUES(?,?)`

  await connector.execute(addCategoryQuery, [recipeId, categoryId])

  const addImageQuery = `INSERT INTO recipe_images (recipeId,url)
  VALUES(?,?)`

  await connector.execute(addImageQuery, [recipeId, imageURL])
}

const addNewRecipeIngredient = async (ingredient, recipeId) => {
  const { ingredientId, amount, measureUnitId, title, note } = ingredient

  const addIngredientQuery = `INSERT INTO recipe_ingredients 
  (ingredientId,recipeId,measureUnitId,qty,title,note)
  VALUES(?,?,?,?,?,?) `

  const connector = await connection

  await connector.execute(addIngredientQuery, [
    ingredientId,
    recipeId,
    measureUnitId,
    amount,
    title,
    note,
  ])
}

const addNewRecipeInstruction = async (instruction, recipeId) => {
  const addInstructionQuery = `INSERT INTO recipe_instructions 
  (recipeId,instruction)
  VALUES(?,?) `

  const connector = await connection

  await connector.execute(addInstructionQuery, [recipeId, instruction])
}

module.exports = { addNewRecipe, getRecipesQuery, getRecipeBySearchTermQuery }
