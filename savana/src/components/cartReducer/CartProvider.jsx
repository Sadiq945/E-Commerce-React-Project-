import React, { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from './cartReducer'

export const CartContextAPI = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)

  return (
    <CartContextAPI.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContextAPI.Provider>
  )
}
