import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import AuthContextProvider from "./store/AuthCtx/AuthContextProvider"

ReactDOM.render(
  <AuthContextProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </AuthContextProvider>,
  document.getElementById("root")
)
