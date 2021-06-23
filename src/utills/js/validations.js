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
    messageOnError:
      "(יש להזין סיסמה באורך 8 תווים לפחות עם סימן מיוחד ! * & וכ'ו)",
  },
  confirmPassword: {
    required: true,
    pattern: PASSWORD_REGEX,
    messageOnError: "סיסמאות לא תואמות",
  },
}

const validateUserData = ({ target: { value, name } }) => {
  const newErrors = []
  console.log(name, value)
  const validations = userValidations[name]

  if (validations.required && !value) {
    newErrors.push(`שדה חובה*`)
    // return // ?
  } else if (validations.pattern && !validations.pattern.test(value)) {
    newErrors.push(validations.messageOnError)
  }

  return newErrors
}

export { validateUserData }

// const validateDataOnSubmit = () => {
//   const userInputErrors = []
//   for (const name in userValidations) {
//     const { value } = userData[name]
//     const newErrors = handleUpdateUserData({ target: { value, name } })
//     if (newErrors.length > 0) userInputErrors.push(newErrors)
//   }
//   return userInputErrors
// }

// const handleUpdateStudentData = (e) => {
//   const errors = validateStudentData(e)
//   console.log(errors)

//   const {
//     target: { name, value },
//   } = e

//   setStudentData((prevStudentData) => ({
//     ...prevStudentData,
//     [name]: {
//       value,
//       errors,
//     },
//   }))

//   return errors
// }

// const validateDataOnSubmit = () => {
//   const userInputErrors = []
//   for (const name in studentValidations) {
//     const { value } = studentData[name]
//     const newErrors = handleUpdateStudentData({ target: { value, name } })
//     if (newErrors.length > 0) userInputErrors.push(newErrors)
//   }
//   return userInputErrors
// }

// const handleFormSubmit = (e) => {
//   e.preventDefault()

//   const userInputErrors = validateDataOnSubmit()

//   if (userInputErrors.length) return

//   const newStudnet = {
//     name: studentData.username.value,
//     email: studentData.email.value,
//     address: studentData.address.value,
//     gender: studentData.gender.value,
//     course: studentData.course.value,
//     average: Math.floor(Math.random() * (100 - 56 + 1) + 56),
//     image: `https://i.pravatar.cc/150?img=`,
//   }

//   onNewStudentData(newStudnet)

//   clearState()
// }
