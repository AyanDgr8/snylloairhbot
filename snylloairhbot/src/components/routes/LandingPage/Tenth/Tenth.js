// src/components/routes/LandingPage/Tenth/Tenth.js


import React from "react";
import LazyLoad from 'react-lazyload';
import './Tenth.css';

const Tenth = () => {
    return(
        <div className="tenth-page-content">
            <div className="tenth-page-left">
                <LazyLoad>
                    <img 
                    src="/uploads/oxygen-guyy.png"
                    className='oxygen-guy'
                    alt="oxygen-guy"
                    />
                </LazyLoad>
            </div>
            <div className="tenth-page-right">
                <div className="tenth-right-content">
                    <div className="tenth-right-icon">
                        <LazyLoad>
                            <img 
                            src="/uploads/tenth-right-icon.png"
                            className='tenth-right-icon-drop'
                            alt="sixth-right-icon-drop"
                            />
                        </LazyLoad>
                    </div>
                    <h3 className="tenth-right-icon-question">ABOUT</h3>
                    <div className="tenth-heading">
                        Hyperbaric Medicine
                    </div>
                    <div className="tenth-caption">
                        <p>
                            Hyperbaric Oxygen Therapy consists of increasing the level of oxygen in the blood several times. For this, the patient enters a specially designed and pressurized hyperbaric chamber. There, high concentrations of O2 are breathed at a higher pressure (3 ATA) than normal atmospheric pressure (1 ATA).
                            This generates hyperoxia and triggers various beneficial physiological effects.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tenth;