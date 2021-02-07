import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(JSON.stringify(localStorage.getItem('user')))
      ? JSON.parse(localStorage.getItem('user'))
      : {}
  })
  const value = {
    user,
    userUpdate: (newData) => {
      setUser(newData)
      localStorage.setItem('user', JSON.stringify(newData))
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}