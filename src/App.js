import React from 'react'
import Nav from './Nav'
import Rout from './Rout'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter >
      <Nav />
      <Rout />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
