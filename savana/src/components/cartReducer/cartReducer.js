export const cartInitialState = {
  items: [],
  cartLength: 0,
  totalPrice: 0,
}

const calculateTotals = (items) => ({
  cartLength: items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
})

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BAG': {
      const existing = state.items.find((item) => item.id === action.payload.id)
      let updatedItems

      if (existing) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }]
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      }
    }

    case 'REMOVE_FROM_BAG': {
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id)
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      }
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      )
      return {
        ...state,
        items: updatedItems.filter((item) => item.quantity > 0),
        ...calculateTotals(updatedItems.filter((item) => item.quantity > 0)),
      }
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        cartLength: 0,
        totalPrice: 0,
      }

    default:
      return state
  }
}
