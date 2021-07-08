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

export { getRecipesBySearchTerm, updateRecipeViewsById }
