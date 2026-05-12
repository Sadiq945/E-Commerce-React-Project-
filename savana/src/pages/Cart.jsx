import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContextAPI } from '../components/cartReducer/CartProvider'

export default function Cart() {
  const { cartState, cartDispatch } = useContext(CartContextAPI)

  const handleRemove = (id) => {
    cartDispatch({ type: 'REMOVE_FROM_BAG', payload: { id } })
  }

  const handleClear = () => {
    cartDispatch({ type: 'CLEAR_CART' })
  }

  return (
    <main className="container cart-page py-5">
      <div className="cart-hero d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h1>Your Cart</h1>
          <p className="text-muted">Review items, update quantities, and checkout faster.</p>
        </div>
        <div className="text-end">
          <span className="badge bg-warning text-dark mb-2">{cartState.cartLength} items</span>
          <h3 className="mb-0">₹ {cartState.totalPrice.toFixed(2)}</h3>
        </div>
      </div>

      {cartState.items.length === 0 ? (
        <div className="empty-cart card shadow-sm p-5 text-center">
          <h4>Your bag is empty</h4>
          <p className="text-muted">Add products from the store to see them here.</p>
          <Link to="/" className="btn btn-dark mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="cart-list card shadow-sm p-4">
              {cartState.items.map((item) => (
                <div className="cart-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4" key={item.id}>
                  <div className="d-flex gap-3 align-items-center">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div>
                      <h5>{item.name}</h5>
                      <p className="text-muted mb-1">₹ {item.price}</p>
                      <small className="text-secondary">Quantity: {item.quantity}</small>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                    <span className="fw-semibold">₹ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="col-lg-4">
            <div className="checkout-card card shadow-sm p-4 h-100">
              <h4 className="mb-3">Order summary</h4>
              <p className="d-flex justify-content-between mb-2">
                <span>Items</span>
                <strong>{cartState.cartLength}</strong>
              </p>
              <p className="d-flex justify-content-between mb-4">
                <span>Estimated total</span>
                <strong>₹ {cartState.totalPrice.toFixed(2)}</strong>
              </p>
              <button className="btn btn-dark w-100 mb-3">Proceed to checkout</button>
              <button className="btn btn-outline-secondary w-100" onClick={handleClear}>
                Clear cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}
