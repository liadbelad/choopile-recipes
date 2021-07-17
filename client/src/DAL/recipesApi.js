import axios from "axios"

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}

const getNewestRecipes = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/recipes/newest`)
    const recipesHomepage = await response.json()
    return recipesHomepage
  } catch (error) {
    return error.message
  }
}

const getNumberOfPages = async (userRecipes = "") => {
  try {
    const { data } = await axios(
      `http://localhost:5000/api/recipes/pages?user=${userRecipes}`
    )
    return data
  } catch (error) {
    return error.message
  }
}

const getRecipesBySearchTerm = async (
  keyword = "",
  pageNumber = "",
  category = ""
) => {
  try {
    const { data: recipes } = await axios(
      `http://localhost:5000/api/recipes?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}`
    )
    return recipes
  } catch (error) {
    return error.message
  }
}

const addNewRecipe = async (newRecipe) => {
  try {
    const response = await fetch("http://localhost:5000/api/recipes/add", {
      method: "POST",
      body: newRecipe,
    })
    return await response.json()
  } catch (error) {
    return error.message
  }
}

const updateRecipe = async (updatedRecipe, recipeId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/recipes/${recipeId}`,
      {
        method: "PUT",
        body: updatedRecipe,
      }
    )
    return await response.json()
  } catch (error) {
    return error.message
  }
}

const updateRecipeViewsById = async (recipeID) => {
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/recipes/views/${recipeID}`
    )
    return data
  } catch (error) {
    return error.message
  }
}

const addRecipeCommentById = async ({ recipeID, content }) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/recipes/comments/${recipeID}`,
      content,
      config
    )

    return data
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export {
  getNewestRecipes,
  getRecipesBySearchTerm,
  updateRecipeViewsById,
  addRecipeCommentById,
  addNewRecipe,
  updateRecipe,
  getNumberOfPages,
}
