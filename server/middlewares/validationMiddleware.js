const validation = (schema) => async (req, res, next) => {
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

module.exports = validation
