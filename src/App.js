import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainNavbar from "./componenets/Navbar/MainNavbar"
import HomePage from "./pages/HomePage"
import RecipesPage from "./pages/RecipesPage"
import SingleRecipePage from "./pages/SingleRecipePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Router>
      <MainNavbar />

      <main className="py-5">
        <Switch>
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/recipes/:id" exact component={SingleRecipePage} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
