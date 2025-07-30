import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Fresh food. Fast delivery. Everyday delight. At Tomato, we believe good food should be effortless. From farm-fresh ingredients to doorstep delivery, we’re here to make your meals memorable. Hungry?<br/> Let’s get it to you—hot, tasty, and on time.</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
           </div>
        
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
    
       <div className="footer-content-right">
       <h2>GET IN TOUCH</h2>
       <ul>
        <li>+234-704-295-3337</li>
        <li>hadeniyiadekunle27@gmail.com</li>
       </ul>
    </div>
</div>
<hr />
<p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved</p>
</div>
  )
}

export default Footer
