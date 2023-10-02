import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
  return (
    <div>
        <div className='contact-form-columns' style={{letterSpacing:"0.2em"}} >CONTACT US: </div>
        <div className="contact-form-fields">
          <div className="contact-form-columns">
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="tel" placeholder='Phone'/>
          </div>
          <div className="contact-form-columns"> 
              <textarea placeholder='Message' rows="5"></textarea>
              <button type='submit' className="primary-btn">Send</button>
          </div>
        </div>
    </div>
  )
}

export default ContactForm