import React, { useEffect, useState } from 'react'
import axios from  'axios'
import styles from './feature.module.css'
import FormatPrice from '../Helpers/FormatPrice'

const Feature = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://api.pujakaitem.com/api/products').then(response=>{
            const images =response.data.slice(0,3);
          setdata(images)
        })
    },[])
    console.log(data)
  return (
  <>
  <div className={styles.feature}>
    <p>CHECK NOW!</p>
    <h3>Our Feature Services</h3>
</div>
 <div className={styles.data} >
 
    {
        data.map(item=>
   
        <div className={styles.image1}>
<img src={item.image} className={styles.image2}/>
<div className={styles.sujata}>
<h4>Name:{item.name}</h4>
<h4>  {<FormatPrice price={item.price}/>}</h4>
<h4>Company:{item.company}</h4>
</div>
</div>

  


        )
    }
 </div>
  </>
  )
}

export default Feature