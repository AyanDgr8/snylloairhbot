// src/components/routes/Product/Product.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import Second from '../LandingPage/Second/Second';
import Third from '../LandingPage/Third/Third';
import Video from '../LandingPage/Video/Video';
import Ninth from '../LandingPage/Ninth/Ninth';

import { FaAngleRight } from 'react-icons/fa';


import './Product.css';


const Product = () => {
    return(
        <div>
        <Header />

        <section className="product-container-one">
            <LazyLoad>
                <img 
                    src="/uploads/machine-product.png"
                    className='machine-product'
                    alt="Machine Background Image"
                />
            </LazyLoad>
                <div className='product-container-one-content'>
                    <div className='product-container-one-line1'>
                        HYPERBARIC CHAMBER
                    </div>
                    <div className='product-container-one-line2'>
                    SnylloAir 02 TUNNEL
                    </div>
                    <div className='product-container-one-line3'>
                        The Hyperbaric Chamber is a medical device where the patient enters and breathes high concentrations of oxygen in a pressurized environment at a minimum of 1.45 ATA. As a consequence, hyperoxia is produced and an extensive series of physiological therapeutic effects are triggered.
                    </div>
                <div>
                    <button className='butt-contact butt'>Contact </button>
                    <button className='butt-learn butt'>Learn more <FaAngleRight /></button>
                </div>
                </div>
        </section>

        <Second/>
        <Third/>
        <Video/>

        <section className='product-container-two'>
            <LazyLoad>
                <img 
                    src="/uploads/red-tunnel.png"
                    className='red-tunnel'
                    alt="red-tunnel Background Image"
                />

            </LazyLoad>
            <div className='product-container-two-content'>
                <div className='product-container-two-line1'>
                    HYPERBARIC CHAMBER
                </div>
                <div className='product-container-two-line2'>
                Technical Security
                </div>
                <div className='product-container-two-line3'>
                SnylloAir Hyperbaric Chambers have multiple safety systems that act sequentially to avoid any failure or misoperation. It has exhaust valves regulated at 1.45 ATA inside the chamber. If any of them should fail, the other one will work.<br></br>
                Inside the compressor cabinet it has a calibrated relief valve that would act in case neither of the two main valves would not. All parts of the chamber and its manufacturing are under controlled and certified quality standards.
                </div>
            </div>
        </section>

        <Ninth/>

        <section className='product-container-three'>
            <div className='product-container-three-left'>
                <LazyLoad>
                    <img 
                        src='/uploads/mat.png'
                        className='mat'
                        alt='mat' 
                    />
                </LazyLoad>
            
            </div>
            <div className='product-container-three-right'>
                <div className='product-container-three-content'>
                    <div className='product-container-three-line1'>
                        HYPERBARIC CHAMBER
                    </div>
                    <div className='product-container-three-line2'>
                        Technical Service
                    </div>
                    <div className='product-container-three-line3'>
                        SnylloAir includes a warranty on all of its products. This warranty is subject to terms and conditions.<br></br><br></br>
                        We also offer an optional extended warranty program. In addition, we provide the necessary technical service to solve any inconvenience in their products.
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        <LowerFooter />

        </div>
    );
};

export default Product;