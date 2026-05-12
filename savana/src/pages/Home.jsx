import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
  }, [])

  return (
    <>
      <Navbar />
      <Banner />

      <main className="container mt-4">
        <div className="d-flex justify-content-between align-items-end mb-4 flex-column flex-md-row gap-3">
          <div>
            <h2 className="section-title">Shop top products</h2>
            <p className="text-muted">Curated collection with fast delivery and premium deals.</p>
          </div>
          <div className="text-muted">{products.length} products available</div>
        </div>

        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="loading-card rounded-3 p-5 text-center">
                Loading products...
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
