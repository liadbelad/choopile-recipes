import React from "react"

// App wide state
const AuthContext = React.createContext({
  isLoggedIn: false,
  handleLogin: (loginUser) => {},
  handleRegister: (newUser) => {},
  handleLogout: () => {},
  user: null, // user token to send to server to get back the user details after auth
})

export default AuthContext
