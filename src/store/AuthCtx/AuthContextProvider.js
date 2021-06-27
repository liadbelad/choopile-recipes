import React, { useState, useEffect } from "react"
import { login, register } from "../../DAL/api"
import AuthContext from "./auth-context"

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async (userLogin) => {
    const response = await login(userLogin)
    if (response.userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(response.userInfo))
      setIsLoggedIn(true)
    }
    return response
  }

  const handleRegister = async (newUser) => {
    const userRegister = await register(newUser)
    return userRegister
  }

  const handleLogout = () => {
    console.log("????")
    localStorage.removeItem("userInfo")
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo")
    if (storedUserInfo) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
