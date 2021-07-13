const arrangeRecipeData = ({
  recipeDetails,
  recipeInstructions,
  recipeIngredients,
  recipeImages,
  recipeCategories,
}) => {
  const arrangedRecipeData = { ...recipeDetails[0] }
  arrangedRecipeData.images = [...recipeImages]

  arrangeRecipeInstructions(arrangedRecipeData, recipeInstructions)

  arrangeRecipeIngredients(arrangedRecipeData, recipeIngredients)

  return arrangedRecipeData
}

const findIngredientsOfTitle = (ingredientsByTitle, title) => {
  return ingredientsByTitle.find(
    ({ title: titleToFind }) => titleToFind === title
  )
}

const arrangeRecipeInstructions = (arrangedRecipeData, recipeInstructions) => {
  arrangedRecipeData.instructions = recipeInstructions.map(
    ({ id, instruction }) => ({ id, instruction })
  )
}

const arrangeRecipeIngredients = (arrangedRecipeData, recipeIngredients) => {
  const ingredientTitles = {}

  arrangedRecipeData.ingredientsByTitle = []
  for (const {
    title,
    name,
    amount: decimalAmount,
    measureUnit,
    note,
  } of recipeIngredients) {
    const amount = decimalAmount.replace(/(\.0+|0+)$/, "")

    if (title in ingredientTitles) {
      const { ingredientsByTitle } = arrangedRecipeData

      const ingredientsTitleCurrent = findIngredientsOfTitle(
        ingredientsByTitle,
        title
      )

      const { ingredients } = ingredientsTitleCurrent

      ingredients.push({ name, amount, measureUnit, note })

      continue
    }

    ingredientTitles[title] = title
    arrangedRecipeData.ingredientsByTitle.push({
      title,
      ingredients: [{ name, measureUnit, amount, note }],
    })
  }
}

module.exports = { arrangeRecipeData }
