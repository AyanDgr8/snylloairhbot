// src/components/routes/Oxygen/Aging/Aging.js

import React from "react";
import LazyLoad from 'react-lazyload';
import Header from '../../LandingPage/Header/Header';
import Footer from '../../LandingPage/Footer/Footer';
import LowerFooter from '../../LandingPage/LowerFooter/LowerFooter';

import  './Aging.css'; 

const Aging = () =>{
    return(
        <div>
            <Header />
            <section className="aging-container-one"> 
                <LazyLoad>
                    <img 
                    src="/uploads/aging-bg.png"
                    className="aging-bg"
                    alt="aging-bg" 
                    />
                </LazyLoad>
                <div className='aging-container-one-content'>
                    <div className='aging-container-one-line1'>
                        Relax and feel younger with every breath.
                    </div>
                    <div className='aging-container-one-line2'>
                        Hyperbaric Oxygen Therapy for elderly people
                    </div>
                    <div className='aging-container-one-line3'>
                        Inside the hyperbaric chamber, a user will absorb oxygen close to four times the normal breathing conditions.
                    </div>
                </div>
            </section>



            {/* ************ */}



            <section className="aging-container-two">

                <div></div>
                <div></div>


            </section>


            <Footer />
            <LowerFooter />
        </div>

    );
};

export default Aging; 
