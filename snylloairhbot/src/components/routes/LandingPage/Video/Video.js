// src/components/routes/LandingPage/Video/Video.js


import React from "react";
import LazyLoad from 'react-lazyload';
import "./Video.css";


const Video = () =>{
    return(
        <div className="video-page-content">
            <div className="video-background">
            <LazyLoad>
                <video autoPlay loop muted className="video">
                    <source src="/uploads/snyllo-machine.mp4" type="video/mp4" className="video-machine"/>
                    Your browser does not support the video tag.
                </video>
            </LazyLoad>
            </div>
        </div>
    );
};

export default Video;