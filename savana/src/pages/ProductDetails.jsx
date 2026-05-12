import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContextAPI } from '../components/cartReducer/CartProvider'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { cartState, cartDispatch } = useContext(CartContextAPI)

  useEffect(() => {
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
      .then((response) => response.json())
      .then((data) => setProduct(data.find((item) => item.id === id)))
      .catch(() => setProduct(null))
  }, [id])

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="alert alert-light text-center">Loading product details...</div>
      </div>
    )
  }

  const isInCart = cartState.items.some((item) => item.id === product.id)

  const addToCart = () => {
    cartDispatch({
      type: 'ADD_TO_BAG',
      payload: {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
      },
    })
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row gap-3">
        <Link to="/" className="btn btn-outline-dark">
          ← Back to store
        </Link>
        <span className="badge bg-warning text-dark">Fast delivery & premium support</span>
      </div>

      <div className="card detail-card p-4 shadow-sm">
        <div className="row g-4">
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <img src={product.image} alt={product.name} className="detail-img" />
          </div>
          <div className="col-12 col-lg-7">
            <h1 className="mb-3">{product.name}</h1>
            <p className="detail-price mb-3">₹ {product.price}</p>
            <p className="text-secondary mb-4">
              Grab this top-rated product with exclusive Savana offers and fast shipping.
            </p>
            <div className="mb-4">
              <span className="badge bg-dark me-2">Free delivery</span>
              <span className="badge bg-primary">Amazon-like experience</span>
            </div>
            <button className="btn btn-dark btn-lg" onClick={addToCart} disabled={isInCart}>
              {isInCart ? 'Already in bag' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
