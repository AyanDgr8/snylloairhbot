// src/components/routes/LandingPage/Forth/Forth.js


import React from "react";
import './Forth.css';

const Forth = () => {
    return(
        <div className="forth-page-content">
            <div className="forth-page-left">
                <img 
                src="/uploads/snylloair-red-machine.png"
                className='snylloair-red-machine'
                alt="snylloair-red-machine"
                >
                </img>
            </div>
            <div className="forth-page-right">
                <div className="forth-right-content">
                    <div className="forth-machine-name">
                        <h3 className='second-page-right-heading-line1'>SnylloAir 01 <br></br><strong className='snylloair-text-bold'>HBOT CAPSULE </strong> </h3>
                    </div>
                    <div className="forth-heading">
                        Advanced Safety Features
                    </div>
                    <div className="forth-caption">
                        <p>
                            SnylloAir HBOT CAPSULE is equipped with multiple sequential safety systems to prevent malfunctions. Internal exhaust valves, regulated at 3 ATA -9 ATA, ensure redundancy in case of failure. <br></br>
                            Additionally, a calibrated relief valve within the compressor cabinet serves as a fail-safe mechanism. The entire chamber and its manufacturing processes adhere to stringent quality standards.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forth;
