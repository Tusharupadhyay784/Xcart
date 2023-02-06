import React from 'react'
import './footer.css'

import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='cart_footer'>
            <h1>Made By X</h1>
            <div>
               <a href="https://www.instagram.com/tushar_upadhyay_7/" target='_Xmen'><AiFillInstagram color='white' size={'1.5em'} /></a>
               <a href="https://twitter.com/tusharXstar" target='_Xmen'><AiOutlineTwitter color='white' size={'1.5em'} /></a>
               <a href="https://github.com/Tusharupadhyay784" target='_Xmen'><AiFillGithub color='white' size={'1.5em'} /></a> 
                
                
            </div>
        </div>
    )
}

export default Footer