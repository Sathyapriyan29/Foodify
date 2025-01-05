import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>Spizy</h1>
                <p>Order your favorite food in just a few taps.
              Fast delivery, fresh flavors, and endless choices.
              Satisfy your cravings anytime, anywhere!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h1>
                    Company
                </h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h1>
                    Get In Touch
                </h1>
                <li>+91 8797647764</li>
                <li>contact@redzy.com</li>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
        2025 Spizy. All rights reserved. 
        </p>
    </div>
  )
}

export default Footer
