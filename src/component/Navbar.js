import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [state, setstate] = useState(false)

  return (
    <>
    <div className={`${styles.navbar} ${state?styles.shownavbar:''}`}>
      <AiOutlineClose className={styles.close} onClick={()=>setstate(false)}/>
        <ul>
           <li><NavLink to="/">Home</NavLink></li> 
           <li><NavLink to="/about">About</NavLink></li> 
           <li><NavLink to="/product">Product</NavLink></li> 
           <li><NavLink to="/contact">Contact</NavLink></li> 
           <li><NavLink to="/cart" className={styles.cart1}><AiOutlineShoppingCart className={styles.cart}/></NavLink><span className={styles.carttotal}>10</span></li>  
        </ul>
    </div>

    <div className={styles.hammenu}>
    <GiHamburgerMenu onClick={()=>setstate(true)}/>
    </div>
    </>
  )
}

export default Navbar