import React, { useState, useEffect } from "react"
import { login, register } from "../../DAL/api"
import AuthContext from "./auth-context"

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userInfo,setUserInfo] = useState(null) // after getting token from server

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
    localStorage.removeItem("userInfo")
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"))
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
