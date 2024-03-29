// src/components/routes/LandingPage/Fifth/Fifth.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import './Fifth.css';  

const Fifth = () =>{
    return(
        <div className="fifth-page-content">
            <div className="fifth-page-left">
                <LazyLoad>
                    <img 
                    src="/uploads/snylloair-capsule.png"
                    className='snylloair-capsule'
                    alt="snylloair-capsule"
                    />
                </LazyLoad>
            </div>
            <div className="fifth-page-right">
                <div className='fifth-page-right-heading'>
                    <h3 className='fifth-page-right-heading-line1'>SnylloAir 01 <br></br><strong className='snylloair-text-bold'>HBOT CAPSULE </strong> </h3>       
                    <p className='fifth-page-right-para'>
                        Experience elevated hyperbaric therapy with the SnylloAir 01 HBOT CAPSULE. At 3 ATA, it delivers safe, efficient hyperoxia without risk. Crafted with advanced tech and premium materials, it's user-friendly for all.
                    </p>
                </div>
                </div>
            </div>
    );
};

export default Fifth;