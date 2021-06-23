import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "./constants"

const userValidations = {
  firstName: {
    required: true,
    pattern: NAME_REGEX,
    messageOnError: "אותיות בלבד אנגלית או עברית",
  },
  lastName: {
    required: true,
    pattern: NAME_REGEX,
    messageOnError: "אותיות בלבד אנגלית או עברית",
  },
  email: {
    required: true,
    pattern: EMAIL_REGEX,
    messageOnError: "אימייל לא תקין",
  },
  password: {
    required: true,
    pattern: PASSWORD_REGEX,
    messageOnError: "חובה ספרה, אות קטנה ואות גדולה (באנגלית) - לפחות 8 תווים",
  },
  confirmPassword: {
    required: true,
    pattern: PASSWORD_REGEX,
    messageOnError: "סיסמאות לא תואמות",
  },
}

const validateUserData = ({ target: { value, name } }) => {
  const newErrors = []
  const validations = userValidations[name]

  if (validations.required && !value) {
    newErrors.push(`שדה חובה*`)
  } else if (validations.pattern && !validations.pattern.test(value)) {
    newErrors.push(validations.messageOnError)
  }

  return newErrors
}

const validateDataOnSubmit = (userData) => {
  console.log(userData)
  const userInputErrors = {}
  for (const name in userValidations) {
    console.log(name)
    const { value } = userData[name]
    const newErrors = validateUserData({ target: { value, name } })
    // if (newErrors.length > 0)
    userInputErrors[name] = { value, errors: newErrors }
  }
  return userInputErrors
}

export { validateUserData, validateDataOnSubmit }
