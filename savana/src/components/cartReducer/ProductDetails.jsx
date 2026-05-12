import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const {ID} = useParams()
  const [product,setProduct] = useState()
  const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)



        async function fetchData() {
            try {
                const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
                if(!res.ok) {
                    setLoading(false)
                    setError(true)
                }else{
                const data = await res.json()
                const product =await data.find((p)=>p.id == ID)
                setProduct(product)
                setLoading(false)
                setError(false)
                }
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }
    
    
    
        useEffect(() => {
                fetchData()
    }, [])

console.log(product,ID)

    if (loading) return <p>Loading....</p>
    if (error) return <p>404 Page</p>
    if(!product) return <p>Product not found</p>
  return (
    <>
    <div>ProductDetails</div>
    <h1>{product.name}</h1>
    
    </>
  )
}

export default ProductDetails