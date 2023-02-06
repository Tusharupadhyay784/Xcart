import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import './App.css'
import { Toaster } from 'react-hot-toast'


const App = () => {
  // you have to put a button adjacent to the cart so that you will make all the items in one single row and make it appear as powerfull customizable layout ===> Future Task
  return (
    <Router>
      <div><Toaster /></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </Router>



  )
}

export default App