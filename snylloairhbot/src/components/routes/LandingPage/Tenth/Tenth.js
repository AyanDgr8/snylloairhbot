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
                    <div className="tenth-heading">
                        Hyperbaric Oxygen Therapy
                    </div>
                    <div className="tenth-caption">
                        <p>
                            It is a non-invasive medical treatment. The patient enters the Hyperbaric Chamber and by means of a mask breathes high concentrations of oxygen at a pressure higher than the normal atmospheric pressure.<br></br><br></br>
                            The Hyperbaric Chamber Treatment contributes to the recovery of different pathologies that present inflammation or pain. It is a safe therapy, since the number of sessions and their duration are always indicated by a physician.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tenth;