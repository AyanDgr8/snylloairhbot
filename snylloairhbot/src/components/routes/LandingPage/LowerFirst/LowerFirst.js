// src/components/routes/LandingPage/LowerFirst/LowerFirst.js

import React from 'react';
import './LowerFirst.css';

const LowerFirst = () =>{
    return(
        <div className='lowerfirst-container'>
            <div className='lowerfirst-container-boxes'>
                
                <div className='lowerfirst-container-box' >
                    <div className='lowerfirst-container-heading'>Up to 60%</div>
                    <div className='lowerfirst-container-line'>Improved immune system functioning</div>
                </div>

                <div className='lowerfirst-container-box' >
                    <div className='lowerfirst-container-heading'>Up to 150%</div>
                    <div className='lowerfirst-container-line'>More oxygen into the body</div>
                </div>

                <div className='lowerfirst-container-box' >
                    <div className='lowerfirst-container-heading'>Up to 95% </div>
                    <div className='lowerfirst-container-line'>Improved cognitive functioning</div>
                </div>

                <div className='lowerfirst-container-box' >
                    <div className='lowerfirst-container-heading'>Up to 50%</div>
                    <div className='lowerfirst-container-line'>Reduced physical recovery time</div>
                </div>
            </div>
            

        </div>

    );
};

export default LowerFirst;