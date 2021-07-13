// import { useLocation, useHistory } from "react-router-dom"

// const fetchCategories = async () => {
//   const history = useHistory()
//   const location = useLocation()

//   if (
//     location.pathname === "/recipes" ||
//     (isLoggedIn && location.pathname === "/new-recipe")
//   ) {
//     const categories = await getAllCategories()
//     setCategories(categories)
//   }

//   if (
//     !isLoggedIn &&
//     (location.pathname === "/my-recipes" || location.pathname === "/new-recipe")
//   ) {
//     history.push("/")
//   }

//   if (isLoggedIn && location.pathname === "/my-recipes") {
//     const categories = await getAllCategoriesOfUserRecipes(userID)
//     setCategories(categories)
//   }
// }

// export { fetchCategories }

export const addNewArrayDataToFormData = (formData, key, data = []) => {
  if (!formData.has(key)) {
    formData.append(key, JSON.stringify(data))
  } else {
    formData.delete(key)
    formData.append(key, JSON.stringify(data))
  }
}

export const appendDataToFormData = (formData, data) => {
  for (const key in data) {
    if (!formData.has(key)) {
      formData.append(key, data[key])
    } else {
      formData.delete(key)
      formData.append(key, data[key])
    }
  }
  return formData
}
