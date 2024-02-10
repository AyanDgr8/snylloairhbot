// src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
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
                        <img 
                        src="/uploads/snylloair-footer.png"
                        className="footer-column-one snylloair-footer"
                        alt="snylloair-footer"
                        />
                    </div>


                    <div className='footer-column-two'>
                        <h3>Product</h3>

                        <a href="#"  className='linkis' onClick={scrollToTop}>
                            <Link to="/medicine" className="button-footer"  rel="noopener noreferrer">Medicine</Link>
                        </a>

                        <a href="#" className='linkis' onClick={scrollToTop}>
                            <Link to="/products" className="button-footer" rel="noopener noreferrer">Chamber</Link> 
                        </a>
                    </div>


                    <div className='footer-column-three'>
                        <h3>Treatment</h3>

                        <a href="#"  className='linkis' onClick={scrollToTop}>
                            <Link to="/applications" className="button-footer"  rel="noopener noreferrer">Physiological Effects</Link>
                        </a>

                        <a href="#" className='linkis' onClick={scrollToTop}>
                            <Link to="/applications" className="button-footer" rel="noopener noreferrer">Applications</Link> 
                        </a>

                    </div>


                    <div className='footer-column-four'>
                        <h3>More</h3>

                        <a href="#" className='linkis' onClick={scrollToTop}>  
                            <Link to="/faq" className="button-footer" rel="noopener noreferrer">FAQs</Link>
                        </a>
                        <a href="#"  className='linkis' onClick={scrollToTop}>  
                            <Link to="/company" className="button-footer" rel="noopener noreferrer">Company</Link>
                        </a>
                    </div>

                </div>
                    
            </div>
        </div>
    )
}

export default Footer;