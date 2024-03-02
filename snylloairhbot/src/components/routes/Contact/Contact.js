// src/components/routes/Contact/Contact.js

import React from 'react';
import './Contact.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import FormContact from '../LandingPage/FormContact/FormContact';

const Contact = () => {
    return(
        <div>
        <Header />

        <section className='contact-container'>
            {/* <img 
                src='/uploads/selected.jpg'
                className='rectangle'
                alt='rectangle'
            />
            <div className='contact-two-lines'>
                <div className='contact-heading'>Contact</div>
                <div className='contact-subheading'>Get in touch with our experts, we'd love to hear from you!</div>
            </div> */}
        </section>

        <FormContact />


        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Contact;