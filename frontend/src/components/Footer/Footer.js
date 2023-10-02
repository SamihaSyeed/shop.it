import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import ContactForm from '../ContactForm/ContactForm'
import "../ContactForm/ContactForm.css"
const Footer = () => {
    return (
        <div>
        <div className='footer'>
            <div className='contact-form-columns'>
                <div style={{letterSpacing:"0.2em", paddingBottom:"15px"}}>GET IN TOUCH:</div>
                <div style={{padding:"10px 0"}}>
                    <div>Tel: +91 9940499793</div>
                    <div>Email: syeedsamiha@gmail.com</div>
                </div>
                <div style={{padding:"10px 0"}}>
                    <div className="media-icons">
                        <Link to=""><img src="https://static.wixstatic.com/media/16c1c1_3202b2c10b7242b7b560ce4406422f52~mv2.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16c1c1_3202b2c10b7242b7b560ce4406422f52~mv2.png" alt="instagram" /></Link>
                        <Link to=""><img src="https://static.wixstatic.com/media/16c1c1_a990e52e6d0b46f1a64e45ecf06fd676~mv2.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16c1c1_a990e52e6d0b46f1a64e45ecf06fd676~mv2.png" alt="facebook" /></Link>
                        <Link to=""><img src="https://static.wixstatic.com/media/16c1c1_3b7ccd6d4ac84813a5d3198ef8ebcf23~mv2.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16c1c1_3b7ccd6d4ac84813a5d3198ef8ebcf23~mv2.png" alt="linkedin" /></Link>
                    </div>
                    <div>© 2022 by Samiha Syeed.</div>
                </div>
                
            </div>
            <ContactForm />
        </div>
        </div>
        
    )
}

export default Footer