import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from'./header.module.css'
import Navbar from './Navbar'

const Header = () => {
  return (
  <>
  <div className={styles.header}>
 <NavLink to='/' >
    <h2>E-<span>Store</span></h2>
 </NavLink>

 </div>
 <Navbar/> 
  </>
  )
}

export default Header