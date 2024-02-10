// src/components/routes/LandingPage/Sixth/Sixth.js


import React from "react";
import './Sixth.css';

const Sixth = () => {
    return(
        <div className="sixth-page-content">
            <div className="sixth-page-left">
                <img 
                src="/uploads/snylloair-hbots.png"
                className='snylloair-hbots'
                alt="snylloair-hbots"
                >
                </img>
            </div>
            <div className="sixth-page-right">
                <div className="sixth-right-content">
                    <div className="sixth-right-icon">
                        <img 
                        src="/uploads/sixth-right.png"
                        className='sixth-right-icon-drop'
                        alt="sixth-right-icon-drop"
                        >
                        </img>
                    </div>
                    <h3 className="sixth-right-icon-question">What's HBOT?</h3>
                    <div className="sixth-heading">
                        Hyperbaric Oxygen Therapy
                    </div>
                    <div className="sixth-caption">
                        <p>
                            It is a non-invasive treatment that consists of supplying high concentrations of oxygen in a hyperbaric chamber pressurized to 1.45 atmospheres. Oxygen is transported through the blood and manages to reach all body tissues, including those affected.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sixth;