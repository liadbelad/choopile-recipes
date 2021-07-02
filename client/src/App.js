import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ScrollToTop from "./componenets/ScrollToTop/ScrollToTop"
import MainNavbar from "./componenets/Navbar/MainNavbar"
import HomePage from "./pages/HomePage"
import RecipesPage from "./pages/RecipesPage"
import ErrorPage from "./pages/ErrorPage"
import SingleRecipePage from "./pages/SingleRecipePage/SingleRecipePage"
import NewRecipeDetailsPage from "./pages/NewRecipeDetailsPage"
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainNavbar />
      <main className="py-5">
        <Switch>
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/profile" exact component={UserProfilePage} />
          <Route path="/my-recipes" exact component={RecipesPage} />
          <Route
            path="/recipes/new/details"
            exact
            component={NewRecipeDetailsPage}
          />
          <Route path="/recipes/:id" exact component={SingleRecipePage} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  )
}

export default App

// Auth
