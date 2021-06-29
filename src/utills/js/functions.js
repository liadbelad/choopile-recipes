import { useLocation, useHistory } from "react-router-dom"

const fetchCategories = async () => {
  const history = useHistory()
  const location = useLocation()

  if (
    location.pathname === "/recipes" ||
    (isLoggedIn && location.pathname === "/new-recipe")
  ) {
    const categories = await getAllCategories()
    setCategories(categories)
  }

  if (
    !isLoggedIn &&
    (location.pathname === "/my-recipes" || location.pathname === "/new-recipe")
  ) {
    history.push("/")
  }

  if (isLoggedIn && location.pathname === "/my-recipes") {
    const categories = await getAllCategoriesOfUserRecipes(userID)
    setCategories(categories)
  }
}

export { fetchCategories }
