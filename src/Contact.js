import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
   <>
   <h3 className={styles.contact}>Contact page</h3>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.056203706001!2d85.33273987561775!3d27.68465772649159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a2da53041%3A0x102ea3fa0fc08e43!2sMaya%20Girls%20Hostel!5e0!3m2!1sen!2snp!4v1685074366830!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
  <div className={styles.container2}>
  <div className={styles.contactform}>
      <form action='https://formspree.io/f/mayzzaol' method='POST' className={styles.contactinputs}>
      <input type="text" placeholder='username' name='username' autoComplete='off'className={styles.contactform1}/>
       
     
        <input type='email' placeholder='enter your email' name='Email' autoComplete='off'className={styles.contactform1}/>
     
       
       <textarea  name=' messsage' required autoComplete='off' placeholder='Enter your message' rows="5" cols="30"className={styles.contactform2}/>
     
       <button>send</button>
        
      </form>
</div>
    </div>
  
   </>
  )
}

export default Contact