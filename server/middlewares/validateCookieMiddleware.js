function validateCookie(req, res, next) {
  const { cookies } = req
  if (!cookies.user) {
    res.status(401).json("משתמש לא מאושר")
  }

  next()
}

module.exports = validateCookie
