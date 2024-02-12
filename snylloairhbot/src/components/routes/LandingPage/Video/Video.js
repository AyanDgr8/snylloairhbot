// src/components/routes/LandingPage/Video/Video.js


import React from "react";


const Video = () =>{
    return(
        <div className="first-page-content">
            <div className="video-background">
                <video autoPlay loop muted className="video">
                    <source src="/uploads/snyllo-machine.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Video;