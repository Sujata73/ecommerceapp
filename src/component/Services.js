import React from 'react'
import styles from './services.module.css'
import { TbTruckDelivery } from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
    return (
        <>
            <div className={styles.container1}>
                <div className={styles.box1} >
                    <div>
                        < TbTruckDelivery className={styles.icon} />
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.service1}>
                   < MdSecurity className={styles.icon1}/> 
                   <h3> Non-contact Shipping</h3>
                    </div>
                    <div className={styles.service2}>
                        <GiReceiveMoney className={styles.icon2}/>
                        <h3>Money-back Guaranted</h3>
                    </div>
                </div>
                <div className={styles.box3}>
               < RiSecurePaymentLine className={styles.icon3}/>
               <h3>Secure Payment System</h3>
                </div>
            </div>
        </>
    )
}

export default Services