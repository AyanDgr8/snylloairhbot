// src/components/routes/Contact/Contact.js

import React from 'react';
// import './Contact.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';
import FormContact from '../LandingPage/FormContact/FormContact';

const Contact = () => {
    return(
        <div>
        <Header />

        <FormContact />


        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Contact;