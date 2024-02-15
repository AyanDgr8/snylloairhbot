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
                        <div className='footer-column-5-icons'>
                            <a href="https://www.instagram.com/snylloestetica/?igsh=bmRyMTF3anM0OHpn" >
                                <img 
                                src="/uploads/icon-instagram.png"
                                className="icon-one footer-icons"
                                alt="instagram"
                                />
                            </a>
                            <a href="https://www.facebook.com/snylloestetica" >
                                <img 
                                src="/uploads/icon-facebook.png"
                                className="icon-two footer-icons"
                                alt="facebook"
                                />
                            </a>
                            <a href="https://www.youtube.com/channel/UC8DT1-rd61x1HkEkR2AVVzQ" >
                                <img 
                                src="/uploads/icon-youtube.png"
                                className="icon-three footer-icons"
                                alt="youtube"
                                />
                            </a>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSnylloestetica" >
                                <img 
                                src="/uploads/icon-twitter.png"
                                className="icon-four footer-icons"
                                alt="twitter"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/snyllo-%C3%A9stetica/mycompany/" >
                                <img 
                                src="/uploads/icon-linkedin.png"
                                className="icon-five footer-icons"
                                alt="linkedin"
                                />
                            </a>
                        </div>
                    </div>

                </div>
                    
            </div>
        </div>
    )
}

export default Footer;