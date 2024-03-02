// src/components/routes/Meidicine/Medicine.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import './Medicine.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import Sixth from '../LandingPage/Sixth/Sixth';
import Tenth from '../LandingPage/Tenth/Tenth';
import Eleventh from '../LandingPage/Eleventh/Eleventh';
import Eighth from '../LandingPage/Eighth/Eighth';
import FormContact from '../LandingPage/FormContact/FormContact'

const Medicine = () => {
    return(
        <div>
            <Header />
            <Tenth />
            <section className='medicine-container-one'>
                <div className='medicine-one-left'></div>
                <div className='medicine-one-right'></div>

            </section>
            <div className='medicine-cotainer-mechanisms'>
                <h1 className='medicine-cotainer-mechanisms-heading'>Mechanisms of action of HBOT</h1>
                <div className="mechanism-hbot">

                    <div classname='icon-text'>
                        <img 
                        src='/uploads/right-tickk.png'
                        className='right-tick'
                        alt= 'right-tick'
                        />
                        <p>The patient breathes high doses of <strong className='our-color'>O2</strong>  in a hyperbaric environment.</p>
                    </div>

                    <div classname='icon-text'>
                        <img 
                        src='/uploads/right-tickk.png'
                        className='right-tick'
                        alt= 'right-tick'
                        />
                        <p>High <strong className='our-color'>HYPEROXIA</strong>  increases the volume of dissolved oxygen in the blood plasma.</p>
                    </div>

                    <div classname='icon-text'>
                        <img 
                        src='/uploads/right-tickk.png'
                        className='right-tick'
                        alt= 'right-tick'
                        />
                        <p>The greater diffusion of oxygen reaches the less irrigated tissues.</p>
                    </div>

                    <div classname='icon-text'>
                        <img 
                        src='/uploads/right-tickk.png'
                        className='right-tick'
                        alt= 'right-tick'
                        />
                        <p><strong className='our-color'>HYPEROXIA</strong> produces a wide variety of physiological benefits to the body.</p>
                    </div>

                </div>
                 
            </div>
            <Eleventh/>
            
            <Sixth />
            
            <Eighth/>

            <section className='medicine-history'>
                <div className='history-heading'>History of Hyperbaric Medicine</div>
                <LazyLoad>
                    <img 
                    src="/uploads/history.png"
                    className='history'
                    alt="history"
                    />
                </LazyLoad>
                <LazyLoad>
                    <img 
                    src="/uploads/historyy.png"
                    className='historyy'
                    alt="historyy"
                    />
                </LazyLoad>
                
            </section>


            {/* **************** */}


            <section className='medicine-clinic-contra'>
                <div className='medicine-sec-two-left'>
                    <img 
                    src="/uploads/clinic.png"
                    className='clinic'
                    alt ="clinic"
                    />
                </div>

                <div className='medicine-sec-two-right'>
                    <img 
                    src="/uploads/contra.png"
                    className='contra'
                    alt ="contra"
                    />
                    <img 
                    src="/uploads/contrad.png"
                    className='contrad'
                    alt ="contrad"
                    />
                </div>


            </section>

            <FormContact />

            <Footer />
            <LowerFooter />
            
        </div>
    );
};

export default Medicine;