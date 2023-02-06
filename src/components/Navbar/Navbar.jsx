import React from 'react'
import './navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { cartItems } = useSelector((store) => store.cart);
    return (
        <div className='container'>
            <div className='item1'>
                <ul>
                    <Link to={'/'} style={{ textDecoration: 'none', margin: '1em', color: 'white' }} className='hover-underline-animation'><li>XCART</li></Link>
                    <Link to={'/'} style={{ textDecoration: 'none', margin: '1em', color: 'white' }} className='hover-underline-animation'><li>home</li></Link>
                </ul>
            </div>
            <div className='item2'>
                <Link to={'/cart'} className='icon'><AiOutlineShoppingCart size={'2em'} color='white' /></Link>
                <span style={{ color: 'white', fontWeight: 'bolder', fontSize: '1.2em' }}>{cartItems.length}</span>
            </div>
        </div>
    )
}

export default Navbar