// src/components/routes/LandingPage/Header/Header.js


import React, { useState, useRef }  from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Header.css';
import { FaAngleDown, FaBars } from 'react-icons/fa';

const Header = () =>{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return(
        <div>
            <header className="hbot_header">

                <div className="logo-header-hbot">
                    <Link to="/" className="logo-link">
                        <LazyLoad>
                            <img
                            src="/uploads/snylloair-logo.png"
                            alt="snylloair-logo"
                            className="snylloair-logo"
                            rel="noopener noreferrer"
                            onClick={scrollToTop}
                            />
                        </LazyLoad>
                    </Link>
                </div>
                <div className="header-buttons">
                    <Link to="/medicine" className="button-h " rel="noopener noreferrer"  onClick={scrollToTop}>
                    Hyperbaric Medicine
                    </Link>
                    {/* <Link to="/applications" className="button-h " rel="noopener noreferrer"  onClick={scrollToTop}>
                    Application
                    </Link> */}
                    <div className="dropdown">
                    <Link to="/oxygen/" className="button-h dropbtn">Oxygen Therapy  <FaAngleDown />
                        <div className="dropdown-content">
                            <Link to="/oxygen/sports" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                Sports
                            </Link>
                            <Link to="/oxygen/welness" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                Beauty & Wellness
                            </Link>
                            <Link to="/oxygen/anti-aging" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                Anti-aging
                            </Link>
                        </div>
                    </Link>
                        
                    </div>
                    <Link to="/product" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    Product
                    </Link>
                    <Link to="/company" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    About Us
                    </Link>
                    <Link to="/faq" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    FAQs
                    </Link>
                    <Link to="/contact" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                    Contact
                    </Link>
                </div>  


                {/* *********** */}

                <div className="mobile-menu">
                    <div id="mylinks" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
                        <Link to="/medicine" className="button-h " rel="noopener noreferrer"  onClick={scrollToTop}>
                        Hyperbaric Medicine
                        </Link>
                        {/* <Link to="/applications" className="button-h " rel="noopener noreferrer"  onClick={scrollToTop}>
                        Application
                        </Link> */}
                        <div className="dropdown">
                        <Link to="/oxygen/" className="button-h dropbtn">Oxygen Therapy  <FaAngleDown />
                            <div className="dropdown-content">
                                <Link to="/oxygen/sports" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                    Sports
                                </Link>
                                <Link to="/oxygen/welness" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                    Beauty & Wellness
                                </Link>
                                <Link to="/oxygen/anti-aging" className="subpart" rel="noopener noreferrer" onClick={scrollToTop}>
                                    Anti-aging
                                </Link>
                            </div>
                        </Link>
                            
                        </div>
                        <Link to="/product" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                        Product
                        </Link>
                        <Link to="/company" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                        About Us
                        </Link>
                        <Link to="/faq" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                        FAQs
                        </Link>
                        <Link to="/contact" className="button-h" rel="noopener noreferrer" onClick={scrollToTop}>
                        Contact
                        </Link>
                    </div>
                    
                    <div className="hamburger" onClick={toggleMobileMenu}>☰
                        {/* <FaBars /> */}
                    </div>
                    

                </div>
            </header>

        </div>
    );
};

export default Header;