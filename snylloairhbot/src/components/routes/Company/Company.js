// src/components/routes/Company/Company.js

import React from 'react';
import "./Company.css"
import LazyLoad from 'react-lazyload';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import FormContact from '../LandingPage/FormContact/FormContact';


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
                Innovating Hyperbaric Medicine
                </div>
                <div className='company-container-one-line2'>
                We are a company specialized in the manufacture and distribution of medium pressure Hyperbaric Chambers that aims to develop Hyperbaric Medicine with high quality standards in equipment and services around the world.
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
                        In order to further develop Hyperbaric Medicine and expand the availability of treatment worldwide, SnylloAir developed the first medium-pressure Hyperbaric Chamber on the market.<br></br><br></br>
                        SnylloAir hyperbaric chambers are therapeutically efficient and safe medical devices that can be easily installed in any space that meets the requirements of medical activity.<br></br><br></br>
                        SnylloAir provides a comprehensive and cost-effective treatment system that will allow you to enhance your professional practice with the objective of providing your patients with a safe and non-invasive therapy.<br></br><br></br>
                        Join us into the future of Hyperbaric Medicine.
                    </div> 
                
                </div>

            </div>

        </section>

        {/* ************************* */}

        <section className='company-container-three'>
            <div className='mission-vision-box'>
                <div className='mission-vision'>
                    <div className='mission-vision-caption'>
                            <img 
                                src="/uploads/mission-icon.png"
                                className=' mis-vis-icon'
                                alt="mission-icon" 
                            />
                        <span className='mis-vis-heading'> Mission </span>
                    </div>
                    <p className='mis-vis-para'>
                        To promote and disseminate Hyperbaric Oxygen Therapy among health professionals in order to make it a real possibility for all those patients who need it.
                    </p>
                </div>

                <div className='mission-vision'>
                    <div className='mission-vision-caption'>
                            <img 
                                src="/uploads/vision-icon.png"
                                className='mis-vis-icon'
                                alt="vision-icon" 
                            />
                        <span className='mis-vis-heading'> Vision </span>
                    </div>
                    <p className='mis-vis-para'>
                        To be a leading specialist in Hyperbaric Oxygen Therapy and to provide all medical institutions with a treatment system of high therapeutic efficiency.
                    </p>
                </div>
            </div>

        </section>


        {/* ********* */}

        <section className='company-container-four'>
            <div className='company-four-heading'>Our Values</div>
            
            <div className="company-boxes">

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-one.png"
                                className='company-one'
                                alt="company-one"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                        Global vision
                    </div>
                    <div className="company-box-para">
                        We work to expand the availability of Hyperbaric Oxygen Therapy in the world. We offer professionals high quality Hyperbaric Chambers to contribute to the treatment of their patients.
                    </div>
                </div>

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-two.png"
                                className='company-two'
                                alt="company-two"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                        Medical ethics
                    </div>
                    <div className="company-box-para">
                        We act according to universal ethical and medical principles to guarantee patients a safe, non-invasive and beneficial treatment for different pathologies.
                    </div>
                </div>

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-three.png"
                                className='company-three'
                                alt="company-three"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                    Customer focus
                    </div>
                    <div className="company-box-para">
                    We aim to understand our clients' needs and meet their expectations, build trust and add value to their professional practice.
                    </div>
                </div>

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-four.png"
                                className='company-four'
                                alt="company-four"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                    Results oriented
                    </div>
                    <div className="company-box-para">
                    We incorporate Hyperbaric Chambers of high therapeutic efficiency and internationally certified. We support with scientific evidence the use of our medical devices in Hyperbaric Oxygen Therapy to guarantee optimal results.
                    </div>
                </div>

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-five.png"
                                className='company-five'
                                alt="company-five"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                    Competitiveness
                    </div>
                    <div className="company-box-para">
                    We seek to improve ourselves day by day to achieve the best results for health professionals and patients. Always with a clear objective of being leaders in high quality Hyperbaric Therapy.
                    </div>
                </div>

                <div className="company-box">
                    <div className="company-icon">
                        <LazyLoad>
                            <img 
                                src="/uploads/company-six.png"
                                className='company-six'
                                alt="company-six"
                            />
                        </LazyLoad>
                    </div>
                    <div className="company-box-heading">
                    Teamwork
                    </div>
                    <div className="company-box-para">
                    Our work philosophy and our commitment are fundamental. We promote harmony, organization and cooperation among each member of the Biobarica network to achieve our common goals.
                    </div>
                </div>

            </div>

        </section>

        <FormContact />

        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Company;