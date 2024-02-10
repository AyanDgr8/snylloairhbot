// src/components/routes/LandingPage/Second/Second.js

import React from 'react';
import './Second.css';

const Second = () =>{
    return(
        <div>
            <div className='second-page-content'>
                <div className='second-page-left'>
                    <img 
                    src="/uploads/snylloair-capsule.png"
                    className='snylloair-capsule'
                    alt="snylloair-capsule"
                    >
                    </img>

                </div>
                <div className='second-page-right'>
                    <div className='second-page-right-heading'>
                        <h3 className='second-page-right-heading-line1'>SnylloAir 01 <br></br><strong className='snylloair-text-bold'>HBOT CAPSULE </strong> </h3>
                        <h2>Salient Features</h2>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Second;