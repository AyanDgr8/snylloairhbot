// src/components/routes/Company/Company.js

import React from 'react';
import "./Company.css"
import LazyLoad from 'react-lazyload';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';


const Company = () => {
    return(
        <div>
        <Header />
        <section className='company-container-one'>
            <LazyLoad>
                <img 
                    src='/uploads/company.png'
                    className='company'
                    alt='company'
                />
            </LazyLoad>
            <div className='company-container-one-content'>
                <div className='company-container-one-line1'>
                Bringing the future of hyperbaric medicine to fruition
                </div>
                <div className='company-container-one-line2'>
                    We are a company that manufactures and distributes medium pressure hyperbaric chambers that aims to develop hyperbaric medicine with high quality standards in equipment and services around the world.
                </div>
            </div>

        </section>

        <section className='company-container-two'>
            <div className='company-two-left'>
                <LazyLoad>
                    <img 
                        src='/uploads/catch.png'
                        className='catch'
                        alt='catch' 
                    />
                </LazyLoad>
            </div>
            <div className='company-two-right'>
                <div className='company-two-right-content'>
                    <div className='company-content-line1'>
                        ABOUT US
                    </div> 
                    <div className='company-content-line2'>
                        SnylloAir is the brand of hyperbaric chambers manufactured by Biobarica Medical Hyperbaric Solutions, the network of centers and multidisciplinary professionals that aims to develop hyperbaric medicine with high quality standards in equipment and services around the world.<br></br><br></br>
                        SnylloAir hyperbaric chambers are therapeutically efficient and safe medical devices that can be easily installed in any space that meets the requirements of medical activity.<br></br><br></br>
                        For more information on our hyperbaric chambers, please contact us.
                    </div> 
                
                </div>

            </div>

        </section>
        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Company;