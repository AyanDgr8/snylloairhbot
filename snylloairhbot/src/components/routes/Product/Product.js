// src/components/routes/Product/Product.js

import React from 'react';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import Second from '../LandingPage/Second/Second';
import Third from '../LandingPage/Third/Third';
import { FaAngleRight } from 'react-icons/fa';


import './Product.css';


const Product = () => {
    return(
        <div>
        <Header />

        <section className="product-container-one">
                <img 
                src="/uploads/machine-product.png"
                className='machine-product'
                alt="Machine Background Image"
                />
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

        <Footer />
        <LowerFooter />

        </div>
    );
};

export default Product;