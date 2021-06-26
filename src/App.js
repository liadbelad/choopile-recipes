import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainNavbar from "./componenets/Navbar/MainNavbar"
import AuthContext from "./store/AuthCtx/auth-context"
import HomePage from "./pages/HomePage"
import RecipesPage from "./pages/RecipesPage"
import ErrorPage from "./pages/ErrorPage"
import SingleRecipePage from "./pages/SingleRecipePage/SingleRecipePage"
import AddNewRecipePage from "./pages/AddNewRecipePage"

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <Router>
      <MainNavbar />
      <main className="py-5">
        <Switch>
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/my-recipes" exact component={RecipesPage} />
          {authCtx.isLoggedIn && (
            <Route path="/new-recipe" exact component={AddNewRecipePage} />
          )}
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
