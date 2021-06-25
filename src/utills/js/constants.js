const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const HEBREW_ENGLISH_TEXT_REGEX = /^[a-zA-Z\u0590-\u05fe]+$/i
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
const FILE_SIZE = 160 * 1024
const SUPPORTED_FILE_FORMATS = ["jpg", "jpeg", "gif", "png"]

// password regex Description
// ^	The password string will start this way
// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.*[!@#$%^&*])	The string must contain at least one special character,
// but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer

export {
  EMAIL_REGEX,
  HEBREW_ENGLISH_TEXT_REGEX,
  PASSWORD_REGEX,
  SUPPORTED_FILE_FORMATS,
  FILE_SIZE,
}
