import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './herosection.module.css'

const HeroSection = ({props}) => {
    const { name } = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.herosection1}>
                        <p className={styles.intro}>WELCOME TO</p>
                        <h1>{name} </h1>
                        <p className={styles.para}>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy 
                            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <NavLink className={styles.shop}><button>Shop Now</button></NavLink>
                    </div>
                   
                    <div className={styles.images}> 
                   <img className={styles.image1} src='images/s.jpg' / >
                   <div className={styles.box}>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection