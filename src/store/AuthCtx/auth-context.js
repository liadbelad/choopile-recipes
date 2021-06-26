import React from "react"

// App wide state
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (loginUser) => {},
  register: (newUser) => {},
  logout: () => {},
})

export default AuthContext
