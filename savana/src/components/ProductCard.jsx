import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContextAPI } from './cartReducer/CartProvider'

export default function ProductCard({ product }) {
  const { cartState, cartDispatch } = useContext(CartContextAPI)
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
    <div className="card product-card h-100 shadow-sm">
      <div className="card-img-top d-flex justify-content-center align-items-center">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="product-title">{product.name}</h6>
        <div className="price-row mt-2 mb-3 d-flex align-items-center justify-content-between gap-2">
          <span className="price">₹ {product.price}</span>
          <span className="badge bg-warning text-dark">Prime</span>
        </div>
        <div className="rating mb-3 text-warning">★★★★★</div>
        <button className="btn btn-warning mb-2" onClick={addToCart} disabled={isInCart}>
          {isInCart ? 'Added to bag' : 'Add to bag'}
        </button>
        <Link to={`/product/${product.id}`} className="btn btn-dark">
          View Product
        </Link>
      </div>
    </div>
  )
}
