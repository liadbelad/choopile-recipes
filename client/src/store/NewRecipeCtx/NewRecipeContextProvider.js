import React, { useState, useEffect } from "react"
import newRecipeContext from "./new-recipe-context"

const AuthContextProvider = ({ children }) => {
  const [recipeDetails, setRecipeDetails] = useState({})
  const [recipeIngredients, setRecipeIngredients] = useState({})
  const [recipeInstructions, setRecipeInstructions] = useState({})
  const [newRecipe, setNewRecipe] = useState([])

  const handleAddRecipeDetails = (newRecipeDetails) => {
    localStorage.setItem("recipeDetails", JSON.stringify(newRecipeDetails))
  }

  const handleAddRecipeIngredients = (newRecipeIngredients) => {
    console.log("recipe Ingredients", newRecipeIngredients)
  }

  const handleAddRecipeInstructions = (newRecipeInstructions) => {
    console.log("recipe Instructions", newRecipeInstructions)
  }

  const handleAddNewRecipe = (newRecipe) => {
    console.log("new recipe", newRecipe)
  }

  useEffect(() => {
    const storedRecipeDetails = JSON.parse(
      localStorage.getItem("recipeDetails")
    )
    if (storedRecipeDetails) {
      setRecipeDetails(storedRecipeDetails)
    }

    console.log(storedRecipeDetails)
  }, [])

  return (
    <newRecipeContext.Provider
      value={{
        recipeDetails,
        recipeIngredients,
        recipeInstructions,
        newRecipe,
        handleAddRecipeDetails,
        handleAddRecipeIngredients,
        handleAddRecipeInstructions,
        handleAddNewRecipe,
      }}
    >
      {children}
    </newRecipeContext.Provider>
  )
}

export default AuthContextProvider
