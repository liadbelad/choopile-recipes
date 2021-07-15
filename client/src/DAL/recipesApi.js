import axios from "axios"

const getRecipesBySearchTerm = async (keyword = "", pageNumber = "") => {
  try {
    const { data: recipes } = await axios(
      `http://localhost:5000/api/recipes?keyword=${keyword}&pageNumber=${pageNumber}`
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

export {
  getRecipesBySearchTerm,
  updateRecipeViewsById,
  addNewRecipe,
  updateRecipe,
}
