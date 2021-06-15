import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import MainNavbar from "./componenets/Navbar/MainNavbar"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Router>
      <MainNavbar />

      <main className="py-5">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
