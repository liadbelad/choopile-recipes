import React, { useState, useEffect } from "react"
import { addNewRecipe } from "../../DAL/recipesApi"
import {
  addNewArrayDataToFormData,
  appendDataToFormData,
} from "../../utills/js/functions"
import newRecipeContext from "./new-recipe-context"

const AuthContextProvider = ({ children }) => {
  const [recipeDetails, setRecipeDetails] = useState({})
  const [recipeIngredients, setRecipeIngredients] = useState({})
  const [recipeInstructions, setRecipeInstructions] = useState({})
  const [newRecipe, setNewRecipe] = useState(new FormData())

  const handleAddRecipeDetails = (newRecipeDetails) => {
    setRecipeDetails(newRecipeDetails)

    const {
      categories: { value: categoryID },
      ...restRecipeDetails
    } = newRecipeDetails

    restRecipeDetails.category = categoryID

    const formData = appendDataToFormData(newRecipe, restRecipeDetails)
    setNewRecipe(formData)
    localStorage.setItem("recipeDetails", JSON.stringify(newRecipeDetails))
  }

  const handleAddRecipeIngredients = (newRecipeIngredients) => {
    setRecipeIngredients(newRecipeIngredients)

    const transformedRecipeIngredients = newRecipeIngredients.map(
      (ingredientData) => {
        return {
          amount: ingredientData.qty,
          measureUnitId: ingredientData.measureUnit.value,
          ingredientId: ingredientData.ingredient.value,
          title: ingredientData.title || "",
          note: ingredientData.note || "",
        }
      }
    )

    addNewArrayDataToFormData(
      newRecipe,
      "ingredients",
      transformedRecipeIngredients
    )
    localStorage.setItem(
      "recipeIngredients",
      JSON.stringify(newRecipeIngredients)
    )
  }

  const handleAddRecipeInstructions = (newRecipeInstructions, userID) => {
    setRecipeInstructions(newRecipeInstructions)

    const transformedRecipeInstructions = newRecipeInstructions.map(
      ({ instruction }) => instruction
    )

    addNewArrayDataToFormData(
      newRecipe,
      "instructions",
      transformedRecipeInstructions
    )
    if (newRecipe.has("userId")) {
      newRecipe.delete("userId")
      newRecipe.append("userId", userID)
    } else {
      newRecipe.append("userId", userID)
    }

    localStorage.setItem(
      "recipeInstructions",
      JSON.stringify(newRecipeInstructions)
    )
    handleAddNewRecipe()
  }

  const handleAddNewRecipe = () => {
    addNewRecipe(newRecipe)
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
