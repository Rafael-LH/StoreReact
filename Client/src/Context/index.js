import React, { useState } from 'react'
import initialState from '../initialState.js'

export const Context = React.createContext()
export const Provider = ({ children }) => {
  const [data, setData] = useState(initialState)

  const addToCart = paylaod => {
    setData({
      ...data,
      cart: [...data.cart, paylaod]
    })
  }
  const removeFromCart = paylaod => {
    setData({
      ...data,
      cart: data.cart.filter(item => item.id !== paylaod.id)
    })
  }
  const value = {
    data,
    addToCart,
    removeFromCart
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}