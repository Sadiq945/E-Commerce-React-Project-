import React, { useContext } from 'react'
import { FaShoppingCart, FaSearch, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Theme/ThemeProvider'
import { CartContextAPI } from './cartReducer/CartProvider'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cartState } = useContext(CartContextAPI)

  return (
    <header className={`amazon-nav ${theme === 'dark' ? 'dark-theme-nav' : ''}`}>
      <div className="nav-top container-fluid d-flex align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="brand-logo">
            <span className="logo-line-one">savana</span>
            <strong className="logo-line-two">STORE</strong>
          </div>
        </div>

        <div className="search-box d-none d-md-flex">
          <input className="form-control search-input" placeholder="Search products, brands and more" />
          <button className="search-button" aria-label="Search">
            <FaSearch />
          </button>
        </div>

        <div className="nav-actions d-flex align-items-center gap-3">
          <button className="theme-switch btn btn-outline-light" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <Link to="/cart" className="cart-button btn btn-warning d-flex align-items-center gap-2">
            <FaShoppingCart />
            <span>Cart</span>
            <span className="badge bg-dark text-white rounded-pill">{cartState.cartLength}</span>
          </Link>
        </div>
      </div>
      <div className="nav-bottom container-fluid">
        <nav className="d-flex flex-wrap gap-3">
          <Link to="/" className="nav-bottom-link">Best Sellers</Link>
          <Link to="/" className="nav-bottom-link">Mobiles</Link>
          <Link to="/" className="nav-bottom-link">Fashion</Link>
          <Link to="/" className="nav-bottom-link">Electronics</Link>
          <Link to="/" className="nav-bottom-link">Home</Link>
          <Link to="/" className="nav-bottom-link">Beauty</Link>
          <Link to="/" className="nav-bottom-link">Deals</Link>
        </nav>
      </div>
    </header>
  )
}
