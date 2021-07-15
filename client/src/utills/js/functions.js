export const addNewArrayDataToFormData = (formData, key, data = []) => {
  formData.set(key, JSON.stringify(data))
}

export const appendDataToFormData = (formData, data) => {
  for (const key in data) {
    formData.set(key, data[key])
  }
  return formData
}

export const filterChoosenIngredient = (ingredients, value) => {
  return ingredients.filter((ingredient) => ingredient.value !== value)
}

export const findIngredientDeletedByUser = (
  newRecipeIngredients,
  deleteIdx
) => {
  return newRecipeIngredients.find((ingredient, idx) => idx === deleteIdx)
}

export const filterMultipleObjectsByValue = (arr1 = [], arr2 = []) => {
  let filterdArray = []
  filterdArray = arr1.filter((ingredient) => {
    return !arr2.find(({ ingredient: oldIngredient }) => {
      return ingredient.value === oldIngredient.value
    })
  })
  return filterdArray
}
