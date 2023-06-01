import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './footer.module.css'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.contactshort}>

        <div className={styles.ready}>
          <h3>Ready to get started?</h3>
          <h3> Talk to us today</h3>
        </div>
        <div className={styles.get}>
          <button><NavLink to="/contact">Get Started</NavLink></button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerabout}>
          <h3>E-Store</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className={styles.footersubscribe}>
          <h3>Subscribe to get important updates</h3>
          <form method="POST" action='#'>
            <input type="email" placeholder='email' />
          </form>
          <button>Subscribe</button>

        </div>
        <div className={styles.footersocial}>
          <h3>follow us</h3>
          <AiFillFacebook className={styles.social} />
          < AiFillInstagram className={styles.social} />
          <AiFillLinkedin className={styles.social} />
        </div>
        <div className={styles.callus}>
          <h3>Call Us</h3>
          <a href="tel:">9847698091</a>
        </div>
      </div>

      <div className={styles.footerbottomsection}>
        <p>@{new Date().getFullYear()} SujataShrestha.All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer