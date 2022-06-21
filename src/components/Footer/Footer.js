import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='' style={{ backgroundColor: '#ededed' }}>
        <footer className='d-flex justify-content-around text-dark mt-5'>
            {/*address*/}
            <div>
                <ul>
                  <li><strong>ABOUT ZOMATO</strong></li>
                  <li>Who We Are</li>
                  <li>Blog</li>
                  <li>Work With Us</li>
                  <li>Investor Relations</li>
                  <li>Report Fraud</li>
                </ul>
            </div>
            <div>
                <ul>
                  <li><strong>ZOMAVERSE</strong></li>
                  <li>Zomato</li>
                  <li>Feeding India</li>
                  <li>Hyperpure</li>
                  <li>Zomaland</li>                  
                </ul>
            </div>
            <div>
                <ul>
                  <li><strong>FOR RESTAURANTS</strong></li>
                  <li>Partner With Us</li>
                  <li>Apps For You</li>                                    
                </ul>
                <ul>
                  <li><strong>FOR ENTERPRISES</strong></li>
                  <li>Zomato For Work</li>
                </ul>
            </div>            
            <div>
                <ul>
                  <li><strong>LEARN MORE</strong></li>
                  <li>Privacy</li>
                  <li>Security</li>
                  <li>Terms</li>
                  <li>Sitemap</li>                                    
                </ul>                
            </div>                      
        </footer>
        <div className='footer-break'>
          <hr />
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
