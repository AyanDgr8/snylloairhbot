// src/components/routes/LandingPage/Seventh/Seventh.js

import React from 'react';
import './Seventh.css';

const Seventh = () =>{
    return(
        <div className='seventh-page-content'>
            <div className='seventh-page-heading'>
                Five Zones of Hyperbaric Oxygen Therapy for Well-Being
            </div>

            <div className='seventh-page-boxes'>

                <div className='seventh-page-box'>
                    <div className='seventh-box-icon'>
                        <img 
                        src="/uploads/snyllo-air-icon-1.png"
                        className='snylloair-icon-1 seventh-icon'
                        alt="snylloair-icon-1"
                        >
                        </img>
                    </div>
                    <div className='seventh-box-subheading'>
                        Sport Performance Enhancement
                    </div>
                    <div className='seventh-box-caption'> 
                        Athletes utilize hyperbaric oxygen therapy to boost their performance by enhancing oxygen supply to muscles, reducing inflammation, and expediting post-training or competition recovery.
                    </div>
                </div>

                <div className='seventh-page-box'>
                    <div className='seventh-box-icon'>
                        <img 
                        src="/uploads/snyllo-air-icon-2.png"
                        className='snyllo-air-icon-2 seventh-icon'
                        alt='snyllo-air-icon-2'
                        >
                        </img>
                    </div>
                    <div className='seventh-box-subheading'>
                        Anti-Aging and Wellness
                    </div>
                    <div className='seventh-box-caption'> 
                        Some individuals incorporate hyperbaric oxygen therapy into their wellness routine to enhance skin health, diminish wrinkles, and foster overall vitality.
                    </div>
                </div>

                <div className='seventh-page-box'>
                    <div className='seventh-box-icon'>
                        <img 
                        src="/uploads/snyllo-air-icon-3.png"
                        className='snyllo-air-icon-3 seventh-icon'
                        alt='snyllo-air-icon-3'
                        >
                        </img>
                    </div>
                    <div className='seventh-box-subheading'>
                        Diving
                    </div>
                    <div className='seventh-box-caption'> 
                        Hyperbaric oxygen chambers serve divers in the treatment and prevention of decompression sickness.
                    </div>
                </div>

                <div className='seventh-page-box'>
                    <div className='seventh-box-icon'>
                        <img 
                        src="/uploads/snyllo-air-icon-4.png"
                        className='snyllo-air-icon-4 seventh-icon'
                        alt='snyllo-air-icon-4'
                        >
                        </img>
                    </div>
                    <div className='seventh-box-subheading'>
                        Aviation
                    </div>
                    <div className='seventh-box-caption'> 
                        Pilots and crew members employ hyperbaric oxygen therapy to prevent and manage hypoxia, a condition arising from low oxygen levels at high elevations.
                    </div>
                </div>

                <div className='seventh-page-box'>
                    <div className='seventh-box-icon'>
                        <img 
                        src="/uploads/snyllo-air-icon-5.png"
                        className='snyllo-air-icon-5 seventh-icon'
                        alt='snyllo-air-icon-5'
                        >
                        </img>
                    </div>
                    <div className='seventh-box-subheading'>
                        Military
                    </div>
                    <div className='seventh-box-caption'> 
                        The military harnesses hyperbaric oxygen chambers for altitude training, performance improvement at high altitudes, and the treatment of altitude sickness.
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Seventh;