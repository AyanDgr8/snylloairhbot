// src/components/routes/LandingPage/Ninth/Ninth.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import './Ninth.css';  

const Ninth = () =>{
    return(
        <div className="ninth-page-content">
            <div className="ninth-page-left">
                <div className='ninth-left-heading'>
                    <span className='ninth-left-icon'>
                        <LazyLoad>
                            <img 
                            src="/uploads/ninth-left.png"
                            className='ninth-left-icon'
                            alt="ninth-left-icon"
                            />
                        </LazyLoad>
                    </span>
                    <span className='ninth-left-text'>
                        Therapeutic Safety
                    </span>
                </div>
                <p className='ninth-left-para'>
                    At 3 ATA, working is safer regarding neurotoxicity compared to higher pressures. This is because neuronal excitability is dose-dependent on oxygen. While higher pressures induce neuronal hyperexcitability, breathing high oxygen concentrations at the pressure of the SnylloAir 01 HBOT CAPSULE induces neuronal sedation.
                </p>
            </div>

            <div className="ninth-page-right">
                <LazyLoad>
                    <img 
                    src="/uploads/masked-girl.png"
                    className='masked-girl'
                    alt="masked-girl"
                    />
                </LazyLoad>
                </div>
            </div>
    );
};

export default Ninth;