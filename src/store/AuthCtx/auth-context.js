import React from "react"

// App wide state
const AuthContext = React.createContext({
  isLoggedIn: false,
  handleLogin: (loginUser) => {},
  handleRegister: (newUser) => {},
  handleLogout: () => {},
})

export default AuthContext
