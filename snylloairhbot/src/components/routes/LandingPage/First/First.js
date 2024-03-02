// src/components/routes/LandingPage/First/First.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import './First.css';  

const First = () => {
    return(
        <div className="first-page-content">
            <div className="video-background">
                <LazyLoad>
                    <video autoPlay loop muted className="video">
                        <source src="/uploads/snylloair-main.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </LazyLoad>
            </div>
        </div>

    );
};

export default First;