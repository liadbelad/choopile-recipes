import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import AuthContextProvider from "./store/AuthCtx/AuthContextProvider"
import ModalContextProvider from "./store/ModalCtx/ModalContextProvider"

ReactDOM.render(
  <ModalContextProvider>
    <AuthContextProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </AuthContextProvider>
  </ModalContextProvider>,
  document.getElementById("root")
)
