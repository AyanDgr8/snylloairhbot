// src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <div className='footer-content'>
                <div className='footer-container'>
                    
                    <div className='footer-column-one'>
                        <LazyLoad>
                            <img 
                            src="/uploads/snylloair-footer.png"
                            className="footer-column-one snylloair-footer"
                            alt="snylloair-footer"
                            />
                        </LazyLoad>
                    </div>


                    <div className='footer-column-two'>
                        <h3>Product</h3>

                        <a href="#"  className='linkis' onClick={scrollToTop}>
                            <Link to="/medicine" className="button-footer"  rel="noopener noreferrer">Medicine</Link>
                        </a>

                        <a href="#" className='linkis' onClick={scrollToTop}>
                            <Link to="/product" className="button-footer" rel="noopener noreferrer">Chamber</Link> 
                        </a>
                    </div>


                    <div className='footer-column-three'>
                        <h3>Treatments</h3>

                        <a href="#"  className='linkis' onClick={scrollToTop}>
                            <Link to="/oxygen/sports" className="button-footer"  rel="noopener noreferrer">Sports</Link>
                        </a>

                        <a href="#" className='linkis' onClick={scrollToTop}>
                            <Link to="/oxygen/welness" className="button-footer" rel="noopener noreferrer">Beauty & Welness</Link> 
                        </a> 

                        <a href="#" className='linkis' onClick={scrollToTop}>
                            <Link to="/oxygen/anti-aging" className="button-footer" rel="noopener noreferrer">Anti-aging</Link> 
                        </a>

                    </div>


                    <div className='footer-column-four'>
                        <h3>More</h3>

                        <a href="#" className='linkis' onClick={scrollToTop}>  
                            <Link to="/faq" className="button-footer" rel="noopener noreferrer">FAQs</Link>
                        </a>
                        <a href="#"  className='linkis' onClick={scrollToTop}>  
                            <Link to="/company" className="button-footer" rel="noopener noreferrer">About Us</Link>
                        </a>
                    </div>

                    


                    <div className='footer-column-five'>
                        <h3>Social Media</h3>

                        <a href="#" className='linkis' onClick={scrollToTop}>  
                            <Link to="/faq" className="button-footer" rel="noopener noreferrer">FAQs</Link>
                        </a>
                        <a href="#"  className='linkis' onClick={scrollToTop}>  
                            <Link to="/company" className="button-footer" rel="noopener noreferrer">About Us</Link>
                        </a>
                    </div>

                </div>
                    
            </div>
        </div>
    )
}

export default Footer;