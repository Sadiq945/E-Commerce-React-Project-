import React, { useEffect, useState } from 'react'
import Card from './Card'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    async function fetchProducts() {
        await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproduct')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => {
                console.log(err)
                setError(true)
            })
        setLoading(false)
    }

    async function fetchData() {
        try {
            const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
            if(!res.ok) {
                setLoading(false)
                setError(true)
            }else{
            const data = await res.json()
            setProducts(data)
            setLoading(false)
            setError(false)
            }
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }



    useEffect(() => {
            // fetchProducts()
            fetchData()
}, [])


    if (loading) return <p>Loading....</p>
    if (error) return <p>404 Page</p>
    return (
        <>
            <div>ProductList</div>
            <div className="container-fluid">
                <div className="row">
                    {
                        products.map((prod, i) => (
                            <div className='col mb-1' key={i}>
                                <Card product={prod} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList