import React from 'react'
import styles from  "./trusted.module.css"
import { AiFillAmazonCircle ,AiOutlineAlibaba,AiFillApple } from 'react-icons/ai'
import{SiWalmart} from 'react-icons/si'
import {FaEbay} from 'react-icons/fa'

const Trusted = () => {
  return (
  <>
 <div className={styles.trusted}>
  <div className={styles.trusted1}>
    <h3> Trusted By 1000+ Companies</h3>
  </div>
  <div className={styles.company}>
<div className={styles.company1}>
    <AiFillAmazonCircle/>
    </div>
    <div className={styles.company2}><AiOutlineAlibaba/></div>
  <div className={styles.company3}>  <SiWalmart/></div> 
<div className={styles.company4}> <AiFillApple/></div>
<div className={styles.company5} > <FaEbay/></div> 

</div> 
  


 </div>
  </>
  )
}

export default Trusted