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
      { id: 5, name: "חלבי" },
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
    createdAt: new Date(2020, 10, 12),
  },
  {
    id: 2,
    userID: 1,
    title: "פיצה מעדנות (גועל נפש)",
    description: "הפיצה הכי טובה שיש לעצלנים רווקים ושות ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 1,
    createdAt: new Date(2020, 10, 12),
  },
  {
    id: 3,
    userID: 2,
    title: "פיצה איטלקית לא אמיתית",
    description: "הפיצה הכי מעפנה שיש באזור השרון של הגברת ללה ",
    image: "https://source.unsplash.com/80x50/?food",
    views: 5,
    createdAt: new Date(2020, 10, 12),
  },
]

const DUMMY_RECIPE_CATEGORIES = [
  { categoryID: 1, recipes: [1, 5] },
  { categoryID: 2, recipes: [2, 5, 8] },
  { categoryID: 3, recipes: [4, 5, 8] },
]

const DUMMY_RECIPE_GALLERY = [
  {
    id: 1,
    userID: 2,
    title: "פיצה איטלקית אמיתית",
    image: "https://source.unsplash.com/80x50/?food",
  },
  {
    id: 2,
    userID: 1,
    title: "פיצה מעדנות (גועל נפש)",
    image: "https://source.unsplash.com/80x50/?food",
  },
  {
    id: 3,
    userID: 2,
    title: "פיצה איטלקית לא אמיתית",
    image: "https://source.unsplash.com/80x50/?food",
  },
]

const DUMMY_CATEGORIES = [
  { id: 1, name: "איטלקי" },
  { id: 2, name: "חלבי" },
  { id: 3, name: "בשרי" },
]

const DUMMY_MEASURE_UNITS = [
  { id: 1, name: "כוס" },
  { id: 2, name: "כוסות" },
  { id: 3, name: "כפית" },
]

const DUMMY_INGREDIENTS = [
  { id: 1, name: "מלח" },
  { id: 2, name: "סוכר" },
  { id: 3, name: "שום" },
]

const DUMMY_USERS = [
  {
    id: 1,
    f_name: "Liad",
    l_name: "Beladev",
    email: "liad@gmail.com",
    password: "Secret123",
  },
  {
    id: 2,
    f_name: "Gal",
    l_name: "Beladev",
    email: "gal@gmail.com",
    password: "secret12",
  },
  {
    id: 3,
    f_name: "Moshmosh",
    l_name: "Beladev",
    email: "moshmosh@gmail.com",
    password: "secret1",
  },
]

const DUMMY_NEW_RECIPE = {
  userID: 2,
  title: "פיצה איטלקית אמיתית",
  description: "הפיצה הכי טובה שיש באזור השרון של הגברת צופי ",
  image: "https://source.unsplash.com/80x50/?food",
  views: 0,
  createdAt: new Date(2020, 11, 17),
  categories: [1, 5],
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
}

const DUMMY_USER_WANTED = [
  { userid: 1, categories: [1, 5] },
  { userid: 2, categories: [1, 5] },
]

const loginUser = { email: "liad@gmail.com", password: "Secret123" }
const registerUser = {
  f_name: "Moshmosh",
  l_name: "Beladev",
  email: "moshmosh@gmail.com",
  password: "secret2",
}

// fetch
// GET
// /api/route/

// example requestedRecipeDetails = [id,userID,title,image]

// USER ACTIONS
//

const login = async (loginUser) => {
  try {
    console.log(loginUser)
    const foundUser = DUMMY_USERS.find(
      (user) =>
        user.email === loginUser.email && user.password === loginUser.password
    )
    if (!foundUser) throw new Error(`invalid credentials`)
    return foundUser
  } catch (error) {
    return error.message
  }
}

const register = async (newUser) => {
  try {
    const foundUser = DUMMY_USERS.find((user) => user.email === newUser.email)
    if (foundUser) throw new Error("User already exist")

    DUMMY_USERS.push(newUser)
    return `Welcome ${newUser.fullName}`
  } catch (error) {
    return error.message
  }
}

// ;(async () => {
//   const user = await register(registerUser)
//   console.log("register", user)
// })()

const getUserDetails = async (userID = 4) => {
  try {
    const user = DUMMY_USERS.find((user) => user.id === userID)
    if (!user) throw new Error("who are you?")
    return user
  } catch (error) {
    console.log(error.message)
  }
}

const getUserRecipes = async (userID = 2) => {
  try {
    const userRecipes = DUMMY_RECIPE_GALLERY.filter(
      (recipe) => recipe.userID === userID
    )
    return userRecipes
  } catch (error) {
    return error.message
  }
}

// RECIPES ACTIONS

const getAllCategories = async () => {
  try {
    return DUMMY_CATEGORIES
  } catch (error) {
    return error.message
  }
}

const getAllMeasureUnits = async () => {
  try {
    return DUMMY_MEASURE_UNITS
  } catch (error) {
    return error.message
  }
}

const getAllIngredients = async () => {
  try {
    return DUMMY_INGREDIENTS
  } catch (error) {
    return error.message
  }
}

const getAllRecipesGallery = async () => {
  try {
    return DUMMY_RECIPE_GALLERY
  } catch (error) {
    return error.message
  }
}

const getAllRecipesHomepage = async () => {
  try {
    return DUMMY_RECIPE_HOMEPAGE
  } catch (error) {
    return error.message
  }
}

const getRecipeByID = async (id) => {
  try {
    const recipe = DUMMY_SINGLE_RECIPE.find((recipe) => recipe.id === id)

    if (!recipe) throw new Error("recipe not found")

    return recipe
  } catch (error) {
    return error.message
  }
}

// ?
// userID = 1
// categoriesID's = [ 1,4 ]
// fetch ('/localhost:5000/recipes/:id')

const getRecipesByUserCategories = async (userID, categories) => {
  try {
    // fetch
  } catch (error) {
    return error.message
  }
}

const addNewRecipe = async (newRecipe) => {
  try {
    // after frontend validations
    DUMMY_SINGLE_RECIPE.push(newRecipe)
  } catch (error) {
    return error.message
  }
}

const editRecipe = async (id, updatedRecipe) => {
  // checkIfUpdateNeeded ??
  const { newTitle, newDescription, newImage, newCategories } = updatedRecipe

  try {
    const recipeToUpdate = DUMMY_SINGLE_RECIPE.find(
      (recipe) => recipe.id === id
    )

    if (!recipeToUpdate) throw new Error("recipe doesnot exist")

    recipeToUpdate.title = newTitle
    recipeToUpdate.description = newDescription
    recipeToUpdate.image = newImage
    recipeToUpdate.categories = newCategories
  } catch (error) {
    return error.message
  }
}

export { login, register }
