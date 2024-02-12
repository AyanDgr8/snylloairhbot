// src/components/routes/Oxygen/Welness/Welness.js


import React from "react";

import Header from '../../LandingPage/Header/Header';
import Footer from '../../LandingPage/Footer/Footer';
import LowerFooter from '../../LandingPage/LowerFooter/LowerFooter';

import './Welness.css'; 


const Welness = () =>{
    return(
        <div>
            <Header />
            <section className="welness-container-one"> 
                <img 
                src="/uploads/beauty-bg.png"
                className="beauty-bg"
                alt="beauty-bg" 
                />
                <div className='welness-container-one-content'>
                    <div className='welness-container-one-line1'>
                        Optimal health is inner beauty.
                    </div>
                    <div className='welness-container-one-line2'>
                        Hyperbaric Oxygen Therapy for beauty and relaxation
                    </div>
                    <div className='welness-container-one-line3'>
                        Embracing the use of HBOT to favor aesthetic objectives is a relatively new approach to an ever-growing complementary treatment, oxygen therapy.
                    </div>
                </div>
            </section>

            <Footer />
            <LowerFooter />
        </div>

    );
};

export default Welness;