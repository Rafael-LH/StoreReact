import React, { useState } from 'react'
import initialState from '../initialState.js'

export const Context = React.createContext()
export const Provider = ({ children }) => {
  if (!JSON.parse(window.localStorage.getItem('store'))) {
    window.localStorage.setItem('store', JSON.stringify(initialState))
  }
  const [data, setData] = useState(() => JSON.parse(window.localStorage.getItem('store')))

  const addToCart = payload => {
    setData({
      ...data,
      cart: [...data.cart, payload]
    })
    window.localStorage.setItem('store', JSON.stringify({
      ...data,
      cart: [...data.cart, payload]
    }))
  }
  const removeFromCart = payload => {
    setData({
      ...data,
      cart: data.cart.filter(item => item.id !== payload.id)
    })
    window.localStorage.setItem('store', JSON.stringify({
      ...data,
      cart: data.cart.filter(item => item.id !== payload.id)
    }))
  }
  const addToBuyer = (payload) => {
    setData({
      ...data,
      buyer: [...data.buyer, payload]
    })
    window.localStorage.setItem('store', JSON.stringify({
      ...data,
      buyer: [...data.buyer, payload]
    }))
  }
  const addNewOrder = (payload) => {
    setData({
      ...data,
      orders: [...data.orders, payload],
      cart: [],
    })
    window.localStorage.setItem('store', JSON.stringify({
      ...data,
      orders: [...data.orders, payload],
      cart: [],
    }))
  }
  const value = {
    data,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}