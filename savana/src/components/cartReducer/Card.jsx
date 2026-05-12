import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from '../Theme/ThemeProvider'
import { cartInitialState, cartReducer } from './cartReducer/cartReducer'
import { CartContextAPI } from './cartReducer/CartProvider'

const Card = ({ product }) => {
  const [p, setP] = useState()
  const {theme} = useContext(ThemeContext)
  const {cartState, cartDispatch} = useContext(CartContextAPI)
  //   useEffect(()=>{
  //     setP(product)
  //   },[])
  // console.log(product,"In card")
function handleAddToCart(p){
          console.log("Dispatching ID:", p.id);
          cartDispatch({type:"ADD_TO_BAG", payload:{prod_id:p.id,prod_Name:p.name,prod_price:p.price}})
        }


  return (
    <div className={`card ${theme=='light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Price : &#8377;<i>{product.price}</i></p>
        <button className="btn btn-primary" 
        onClick={()=>handleAddToCart(product)}>
          Add To Bag
        </button>
        <Link to={`/product/${product.id}`} className='btn btn-success ms-2'>Explore</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Card