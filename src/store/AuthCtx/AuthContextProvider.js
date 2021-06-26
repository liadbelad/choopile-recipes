import React, { useState, useEffect } from "react"
import { login, register } from "../../DAL/api"
import AuthContext from "./auth-context"

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (userLogin) => {
    const userInfo = login(userLogin)
    if (userInfo) {
      localStorage.setItem("userInfo", userInfo)
      setIsLoggedIn(true)
    }
  }

  const handleRegister = async (newUser) => {
    const userRegister = await register(newUser)
    console.log(userRegister)
    return userRegister
  }

  const handleLogout = () => {
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
