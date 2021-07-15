import axios from "axios"
axios.defaults.credentials = true

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}

const DUMMY_SINGLE_RECIPE_SERVER = {
  userID: 2,
  title: "bla blas",
  description: "asdasf asfasf asfasfika asjfbasjf",
  image: "url.jpg",
  categoryID: 5,
  ingredients: [
    { amount: 1, measureUnitId: 1, ingredientID: 1, note: "קצוץ לקוביות" },
    { amount: 0.5, measureUnitId: 2, ingredientID: 3 },
    { amount: 0.2, measureUnitId: 4, ingredientID: 2 },
  ],
  instructions: ["ערבב סוכר", "הוסף מלח", "חרטט משהו להוראה"],
}

const DUMMY_SINGLE_RECIPE = [
  {
    id: 1,
    userID: 2,
    title: "פיצה איטלקית אמיתית",
    description: "הפיצה הכי טובה שיש באזור השרון של הגברת צופי ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 120,
    createdAt: new Date(2020, 11, 17),
    categories: [
      { id: 1, name: "בשרי" },
      { id: 5, name: "איטלקי" },
    ],
    ingredientsByTitle: [
      {
        title: "לבצק",
        ingredients: [
          { id: 1, amount: 1, measureUnit: "כוס", name: "חלב" },
          {
            id: 2,
            amount: 1.5,
            measureUnit: "כפית",
            name: "מלח",
          },
        ],
      },
      {
        title: "למלית",
        ingredients: [
          {
            id: 3,
            amount: 1,
            measureUnit: "קילו",
            name: "קמח",
          },
          {
            id: 4,
            amount: 5,
            measureUnit: "כפות",
            name: "סוכר",
          },
        ],
      },
    ],
    instructions: [
      { id: 1, content: "ערבב סוכר ומלר" },
      { id: 2, content: "תוסיף מלח אין מספיק מלח" },
      { id: 3, content: "איזה אנטריקוט ינעל העולם" },
      { id: 4, content: "שים פה מלא דברים בסוף ייצא משהו" },
    ],
  },
  {
    id: 2,
    userID: 1,
    title: "פיצה מעדנות (גועל נפש)",
    description: "הפיצה הכי טובה שיש לעצלנים רווקים ושות ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 1,
    createdAt: new Date(2020, 10, 12),
    categories: [
      { id: 1, name: "בשרי" },
      { id: 3, name: "כשר שנדב אוהב :)" },
    ],
    ingredients: [
      { id: 1, amount: 1, measureUnit: "כוס", name: "חלב" },
      { id: 2, amount: 1.5, measureUnit: "כפית", name: "מלח" },
      { id: 3, amount: 1, measureUnit: "קילו", name: "קמח" },
      { id: 4, amount: 5, measureUnit: "כפות", name: "סוכר" },
    ],
    instructions: [
      { id: 1, title: "למלית", content: "ערבב סוכר ומלר" },
      { id: 2, title: "לרוטב", content: "תוסיף מלח אין מספיק מלח" },
      { id: 3, title: "לבשר", content: "איזה אנטריקוט ינעל העולם" },
      { id: 4, title: "לקערה", content: "שים פה מלא דברים בסוף ייצא משהו" },
    ],
  },
  {
    id: 3,
    userID: 2,
    title: "פיצה איטלקית לא אמיתית",
    description: "הפיצה הכי מעפנה שיש באזור השרון של הגברת ללה ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 5,
    createdAt: new Date(2021, 10, 17),
    categories: [
      { id: 1, name: "בשרי" },
      { id: 10, name: "אקסטרים שנדב מת עליו !" },
    ],
    ingredients: [
      { id: 1, amount: 1, measureUnit: "כוס", name: "חלב" },
      { id: 12, amount: 1.5, measureUnit: "כפית", name: "מלח" },
      { id: 10, amount: 1, measureUnit: "קילו", name: "סוכר" },
      { id: 5, amount: 5, measureUnit: "כפיות", name: "פרמזן" },
    ],
    instructions: [
      { id: 1, title: "למלית", content: "ערבב סוכר ומלר" },
      { id: 2, title: "לרוטב", content: "תוסיף מלח אין מספיק מלח" },
      { id: 3, title: "לבשר", content: "איזה אנטריקוט ינעל העולם" },
      { id: 4, title: "לקערה", content: "שים פה מלא דברים בסוף ייצא משהו" },
    ],
  },
]

// show his recipes first ! ?

const DUMMY_RECIPE_HOMEPAGE = [
  {
    id: 1,
    userID: 2, // for when user is logged he can edit his recipes
    title: "פיצה איטלקית אמיתית",
    description: "הפיצה הכי טובה שיש באזור השרון של הגברת צופי ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 120,
    createdAt: new Date("2020-03-25"),
  },
  {
    id: 2,
    userID: 1,
    title: "פיצה מעדנות (גועל נפש)",
    description: "הפיצה הכי טובה שיש לעצלנים רווקים ושות ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 1,
    createdAt: new Date("2018-07-25"),
  },
  {
    id: 3,
    userID: 2,
    title: "פיצה איטלקית לא אמיתית",
    description: "הפיצה הכי מעפנה שיש באזור השרון של הגברת ללה ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 5,
    createdAt: new Date("2021-03-25"),
  },
  {
    id: 4,
    userID: 2,
    title: "עוגת בולונז טבעונית",
    description: `עוגת בולונז טבעונית? כן כן אתם שומעים נכון! הפסטה האהובה עליי,
    בגרסא אפויה שיוצרת מעטפת קראנצ'ית מושלמת, וכל זה ללא בשר בכלל!
    כנסו כנסו `,
    image: "https://source.unsplash.com/80x50/?food",
    views: 5,
    createdAt: new Date("2021-02-25"),
  },
]

const DUMMY_USERS = [
  {
    id: 1,
    firstName: "Liad",
    lastName: "Beladev",
    email: "liad@gmail.com",
    password: "Secret123",
  },
  {
    id: 2,
    firstName: "Gal",
    lastName: "Beladev",
    email: "gal@gmail.com",
    password: "secret12",
  },
  {
    id: 3,
    firstName: "Moshmosh",
    lastName: "Beladev",
    email: "moshmosh@gmail.com",
    password: "Secret123",
  },
]

// const DUMMY_NEW_RECIPE = {
//   userID: 2,
//   title: "פיצה איטלקית אמיתית",
//   description: "הפיצה הכי טובה שיש באזור השרון של הגברת צופי ",
//   image: "https://source.unsplash.com/80x50/?food",
//   views: 0,
//   createdAt: new Date(2020, 11, 17),
//   categories: [1, 5],
//   ingredients: [
//     { id: 1, amount: 1, measureUnit: "כוס", name: "חלב" },
//     { id: 2, amount: 1.5, measureUnit: "כפית", name: "מלח" },
//     { id: 3, amount: 1, measureUnit: "קילו", name: "קמח" },
//     { id: 4, amount: 5, measureU\nit: "כפות", name: "סוכר" },
//   ],
//   instructions: [
//     { id: 1, title: "למלית", content: "ערבב סוכר ומלר" },
//     { id: 2, title: "לרוטב", content: "תוסיף מלח אין מספיק מלח" },
//     { id: 3, title: "לבשר", content: "איזה אנטריקוט ינעל העולם" },
//     { id: 4, title: "לקערה", content: "שים פה מלא דברים בסוף ייצא משהו" },
//   ],
// }

const getSessionFromServer = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/users/login")(
      data
    )
    return data
  } catch (error) {
    return error.message
  }
}

const login = async (loginUser) => {
  try {
    const { data: userInfo } = await axios.post(
      "http://localhost:5000/api/users/login",
      loginUser,
      config
    )

    return {
      loading: false,
      success: true,
      userInfo,
      message: "מתחבר...",
    }
  } catch (error) {
    return { loading: false, error: true, message: error.message }
  }
}

const register = async (newUser) => {
  try {
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || "שגיאה בהרשמה,נסה שוב")
    }

    return {
      loading: false,
      success: true,
      userInfo: data,
      message: "נרשמת בהצלחה!!",
    }
  } catch (error) {
    return { loading: false, error: true, message: error.message }
  }
}

const getUserDetails = async (userID = 4) => {
  try {
    const user = DUMMY_USERS.find((user) => user.id === userID)
    if (!user) throw new Error("who are you?")
    return user
  } catch (error) {
    return error.message
  }
}

const getUserRecipes = async (userID) => {
  try {
    const { data: userRecipes } = await axios(
      `http://localhost:5000/api/recipes/users/${userID}`,
      config
    )

    return userRecipes
  } catch (error) {
    return error.message
  }
}

const getAllCategoriesOfUserRecipes = async (userID) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/categories/users/${userID}`
    )
    return data
  } catch (error) {
    return error.message
  }
}

// RECIPES ACTIONS

const getAllCategories = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/categories`)
    const categories = await response.json()

    const transformedCategories = categories.map((category) => ({
      value: category.id,
      label: category.label,
    }))
    return transformedCategories
  } catch (error) {
    return error.message
  }
}

const getAllMeasureUnits = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/measure_units")
    const measureUnits = await response.json()
    return measureUnits
  } catch (error) {
    return error.message
  }
}

const getAllIngredients = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/ingredients")
    const ingredients = await response.json()
    return ingredients
  } catch (error) {
    return error.message
  }
}

const getAllRecipes = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/recipes`)
    const recipes = await response.json()
    return recipes
  } catch (error) {
    return error.message
  }
}

const getAllRecipesHomepage = async (
  searchTerm = "",
  pageNum = "",
  orderBy = "",
  orderDirection = "asc"
) => {
  try {
    const response = await fetch(`http://localhost:5000/api/recipes/newest`)
    const recipesHomepage = await response.json()
    return recipesHomepage
  } catch (error) {
    return error.message
  }
}

const getFullRecipeDetailsByID = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/recipes/${id}`)
    const recipe = await response.json()
    if (!recipe) throw new Error("recipe not found")
    return recipe
  } catch (error) {
    return error.message
  }
}

const getRecipesByCategory = async (categoryID) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/recipes/categories/?category=${categoryID}`
    )

    return data
  } catch (error) {
    return error.message
  }
}

const getUserRecipesByCategory = async ({ userID, categoryID }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/recipes/categories/?category=${categoryID}&user=${userID}`
    )
    return data
  } catch (error) {
    return error.message
  }
}

export {
  login,
  register,
  getAllCategories,
  getAllRecipes,
  getFullRecipeDetailsByID,
  getAllCategoriesOfUserRecipes,
  getUserRecipesByCategory,
  getUserRecipes,
  getRecipesByCategory,
  getAllMeasureUnits,
  getAllIngredients,
  getSessionFromServer,
}
