import React from 'react'
import Nav from './Nav'
import Rout from './Rout'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import { useState } from 'react'



const App = () => {

  // Add to cart
  const [cart, setCart] = useState([])

  // Product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])

  // Fiter Product
  const [product, setProduct] = useState(ProductDetail)
  const searchBtn = (product) => {
    const change = ProductDetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }

  // product detail
  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter >
      <Nav searchBtn={searchBtn} />
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
