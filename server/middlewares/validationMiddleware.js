const validation = (schema) => async (req, res, next) => {
  const { ingredients, instructions } = req.body
  if (ingredients && instructions) {
    newRecipeValidation(ingredients, instructions)
  }
  const body = req.body
  try {
    await schema.validate(body)
    next()
  } catch (error) {
    return res
      .status(401)
      .json({ error: true, name: error.path, message: error.message })
  }
}

const newRecipeValidation = (ingredients, instructions) => {
  console.log(ingredients, instructions)
}

module.exports = validation
