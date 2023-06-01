import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './error.module.css'

const ErrorPage = () => {
  return (
  <>
 <div className={styles.container6}>
  <h2>404</h2>
 <h2>OH! You're lost</h2> 
 <p> The page you are looking for does not exist.But you can click the button below to go back to the home page.</p>
  <NavLink to='/'><button>Go Back To Home</button></NavLink>
  

 </div>
  </>
  )
}

export default ErrorPage