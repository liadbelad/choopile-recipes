const { HEBREW_ENGLISH_SPACE_TEXT_REGEX } = require("../utills/constants")
const Yup = require("yup")

const recipeDetailsSchema = Yup.object().shape({
  title: Yup.string()
    .required("*חובה")
    .min(2, "מינימום 2 תווים")
    .max(30, "מקסימום 30 תווים")
    .matches(HEBREW_ENGLISH_SPACE_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),

  description: Yup.string()
    .required("*חובה")
    .max(255, "מקסימום 255 תווים")
    .matches(HEBREW_ENGLISH_SPACE_TEXT_REGEX, "אותיות בלבד אנגלית או עברית"),

  servings: Yup.number()
    .required("*חובה")
    .max(100, "מקסימום 100 מנות")
    .min(1, "מספר חיובי"),
  prepTimeMins: Yup.number()
    .required("*חובה")
    .max(1000, "מקסימום 1000 דקות")
    .min(1, "מספר חיובי"),
  category: Yup.number().required("*חובה").min(1, "מספר חיובי"),
  ingredients: Yup.array()
    .required("חובה*")
    .test("CHECK_LENGTH", "לפחות 2 מרכיבים", (arr) => arr.length < 2),

  instructions: Yup.array()
    .required("חובה*")
    .test("CHECK_LENGTH", "לפחות 2 הוראות הכנה", (arr) => arr.length < 2),
})

module.exports = { recipeDetailsSchema }
