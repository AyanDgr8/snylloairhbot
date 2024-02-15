// src/components/routes/Faq/Faq.js

import React from 'react';
import './Faq.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';


const Faq = () => {
    return(
        <div>
        <Header />
        

        <section className='faq-container'>
            <img 
                src='/uploads/faq.png'
                className='faqs'
                alt='faqs'
            />
        </section>
        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Faq;