import React from 'react'

export default function Banner() {
  return (
    <section className="hero-banner">
      <div className="hero-overlay" />
      <div className="hero-content container text-white">
        <div className="hero-text">
          <span className="badge bg-warning text-dark mb-3">Deal of the day</span>
          <h1>Shop smart with Savana</h1>
          <p className="lead">
            Discover premium products, fast delivery, and exclusive savings in one place.
          </p>
          <button className="btn btn-warning btn-lg">Shop Bestsellers</button>
        </div>
      </div>
    </section>
  )
}
