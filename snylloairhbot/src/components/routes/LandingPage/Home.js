// src/components/routes/LandingPage/Home.js

import React from 'react';
import Header from './Header/Header';
import First from './First/First';
// import LowerFirst from './LowerFirst/LowerFirst';
import Second from './Second/Second';
import Third from './Third/Third';
import Forth from './Forth/Forth';
import Fifth from './Fifth/Fifth';
import Sixth from './Sixth/Sixth';
import Seventh from './Seventh/Seventh';
import Eighth from './Eighth/Eighth';
import Ninth from './Ninth/Ninth';
import Tenth from './Tenth/Tenth';
import Eleventh from './Eleventh/Eleventh';


import Footer from './Footer/Footer';
import LowerFooter from './LowerFooter/LowerFooter';
import FormContact from './FormContact/FormContact';



export default function Home(){
    return (
        <div>
            <div className='landingPage-size'>
                <Header />
                <First />
                {/* <LowerFirst /> */}
                <Fifth />
                <Forth />
                <Second /> 
                <Third />
                <Sixth />
                <Seventh />
                <Eighth />
                <Tenth />
                <Ninth />
                <Eleventh />
                
                <FormContact />

                <Footer />
                <LowerFooter />
            </div>
        </div>
    );
}