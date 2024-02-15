// src/components/routes/LandingPage/Sixth/Sixth.js


import React from "react";
import LazyLoad from 'react-lazyload';
import './Sixth.css';

const Sixth = () => {
    return(
        <div className="sixth-page-content">
            <div className="sixth-page-left">
                <LazyLoad>
                    <img 
                    src="/uploads/snylloair-hbots.png"
                    className='snylloair-hbots'
                    alt="snylloair-hbots"
                    />
                </LazyLoad>
            </div>
            <div className="sixth-page-right">
                <div className="sixth-right-content">
                    <div className="sixth-right-icon">
                        <LazyLoad>
                            <img 
                            src="/uploads/sixth-right.png"
                            className='sixth-right-icon-drop'
                            alt="sixth-right-icon-drop"
                            />
                        </LazyLoad>
                    </div>
                    <h3 className="sixth-right-icon-question">ABOUT</h3>
                    <div className="sixth-heading">
                    Hyperoxia
                    </div>
                    <div className="sixth-caption">
                        <p>
                        It is a non-invasive medical treatment that increases the volume of dissolved oxygen in the blood plasma. Inside the Hyperbaric Chamber, the patient breathes high concentrations of oxygen at a pressure higher than normal atmospheric pressure. This results in multiple benefits for the organism.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sixth;