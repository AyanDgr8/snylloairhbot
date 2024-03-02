// src/components/routes/Oxygen/Welness/Welness.js


import React from "react";
import LazyLoad from 'react-lazyload';

import Header from '../../LandingPage/Header/Header';
import Footer from '../../LandingPage/Footer/Footer';
import LowerFooter from '../../LandingPage/LowerFooter/LowerFooter';
import FormContact from '../../LandingPage/FormContact/FormContact';

import './Welness.css'; 


const Welness = () =>{
    return(
        <div>
            <Header />
            <section className="welness-container-one"> 
                <LazyLoad>
                    <img 
                    src="/uploads/beauty-bg.png"
                    className="beauty-bg"
                    alt="beauty-bg" 
                    />
                </LazyLoad>
                <div className='welness-container-one-content'>
                    <div className='welness-container-one-line1'>
                        Optimal health is inner beauty
                    </div>
                    <div className='welness-container-one-line2'>
                        Hyperbaric Oxygen Therapy for beauty and relaxation
                    </div>
                    <div className='welness-container-one-line3'>
                        Embracing the use of HBOT to favor aesthetic objectives is a relatively new approach to an ever-growing complementary treatment, oxygen therapy
                    </div>
                </div>
            </section>

            {/* *********** */}

            <section className="welness-container-two">  
                <div className="welness-container-two-left">
                    <LazyLoad>
                        <img 
                        src="/uploads/mat.png"
                        className="welness-machine"
                        alt="welness-machine"
                        />
                    </LazyLoad>
                    
                    <div>
                        <button className='butt-hbot'>Step inside our hyperbaric chambers </button>
                    </div>
                
                </div>     
                <div className="welness-container-two-right">
                
                <div className='welness-container-two-content'>
                    <div className='welness-container-two-line1'>
                        HBOT to help rejuvenate your skin
                    </div>
                    <div className='welness-container-two-line3'>
                        Elevated levels of oxygen that reach areas with poor blood flow or deprived areas of oxygen, help the body recover faster in a natural way, as well as rejuvenate its look.
                    </div>
                    <div className='welness-container-two-line2'>
                        During a hyperbaric oxygen therapy session inside a pressurized chamber, the body receives pure oxygen at higher atmospheric pressure to boost the flow of oxygen into the circulatory systems.
                    </div>
                </div>
                </div>   
            
            </section>

            {/* ********* */}


            <section className="welness-container-three">
                <div className="welness-container-three-left">
                    <div className="welness-container-three-content">
                        <div className='welness-container-three-line1'>
                            Optimal health
                        </div>
                        <div className='welness-container-three-line2'>
                            An objective we can all reach
                        </div>
                        <div className='welness-container-three-line3'>
                            A healthy blood circulation enables the body to rejuvenate, repairs damaged skin cells, enables the skin to heal after trauma and diminishes the contour of wrinkles. Increased oxygen circulation within the body can reach areas affected by skin disorders to restart the natural processes such as collagen synthesis and tissue regeneration.
                        </div>
                    </div>
                </div>
                <div className="welness-container-three-right">
                    <LazyLoad>
                        <img 
                            src="/uploads/welness-girl11.png"
                            className="welness-girl1"
                            alt="welness-girl1" 
                        />
                    </LazyLoad>
                </div>
            </section>



            {/* ******* */}

            <section className="welness-container-four">
                <LazyLoad>
                    <img 
                    src="/uploads/blood.png"
                    className="shiny"
                    alt="shiny" 
                    />
                </LazyLoad>
                <div className="welness-four-content">
                    <div className="welness-four-line1">
                        Hyperbaric Oxygen Therapy is as natural as breathing
                    </div>
                    <div className="welness-four-line2">
                        One of the most efficient natural methods to increase both physical and cognitive performance.
                    </div>
                </div>
            </section>


            {/* **********/}


            <section className="welness-container-five">
                <div className="welness-five-left">
                    <div className="welness-five-content">
                        <div className="welness-five-line1">
                        Hyperbaric Oxygen Therapy is documented to:
                        </div>
                        <div className="welness-five-line2">
                            Reactivate skin cells and improve blood circulation. <br></br><br></br>
                            Stimulate the natural recovery process and immunity. <br></br><br></br>
                            Boost vitality, heighten concentration and memory. <br></br><br></br>
                            Reduce fatigue and improve energy levels, stamina and endurance. <br></br><br></br>
                            Improve cell rejuvenation and help with anti-aging strategies. <br></br><br></br>
                            Remove the sensation of brain fog and jet lag.
                        </div>
                    </div>
                </div>
                <div className="welness-five-right">
                    <LazyLoad>
                        <img 
                            src="/uploads/welness-girl22.png"
                            className="welness-girl22"
                            alt="welness-girl22" 
                        />
                    </LazyLoad>
                </div>

            </section>


            {/* ******** */}

            <section className="welness-container-six">

                <div className="welness-six-left">
                    <LazyLoad>
                        <img 
                            src="/uploads/welness-girl33.png"
                            className="welness-girl33"
                            alt="welness-girl33"
                        />
                    </LazyLoad>
                </div>

                <div className="welness-six-right">
                    <div className="welness-six-content">
                        <div className="welness-six-line1">
                        Oxygen and wellness
                        </div>
                        <div className="welness-six-line3">
                            A balanced diet, good exercise and a mindful approach to living a healthy lifestyle will guarantee a feel-great attitude every day.
                        </div>
                        <div className="welness-six-line2">
                            On our quest to enjoy the benefits of optimum health, breathing pure oxygen plays a vital role to aid the flow of blood circulation.<br></br><br></br>
                            Oxygen therapy works best inside a hyperbaric environment, as the increased pressure pushes oxygen molecules into the blood plasma, into the bodys fluid to reach the brain and spine, to help certain affected organs and tissues.
                        </div>
                    </div>

                </div>

            </section>

            {/* ********* */}

            <section className="welness-container-seven">
                <div className="welness-seven-left">
                    <div className="welness-seven-content">
                        <div className="welness-seven-line1">
                            The importance of your oxygen resources
                        </div>
                        <div className="welness-seven-line2">
                            As people advance with age, body functions decrease their performance levels, especially in regards to oxygen circulation to various vital destinations, like the heart, lungs, kidneys and other organs.
                        </div>
                        <div className="welness-seven-para">
                            Hyperbaric Oxygen therapy has been shown in several studies to improve the blood circulation. Supplemented oxygen levels given in a hyperbaric enviroment can create new blood vessels and new stem cells. In such an enviroment the body will use additonal oxygen for directing it to affected areas and stimulate recovery.
                        </div>
                        <div className="welness-seven-line3">
                            Turn back the clock and reach optimum health
                        </div>
                        <div className="welness-seven-para">
                            Hyperbaric Oxygen Therapy works best coupled with physical exercise to use your increased oxygen levels. Paired with smart nutrition, vitamin intake and other wellness techniques to aid you in all dimensions of life, oxygen therapy will create the best conditions to reach optimum health.
                        </div>
                    </div>
                </div>

                <div className="welness-seven-right">
                    <LazyLoad>
                        <img 
                            src="/uploads/welness-girl44.png"
                            className="welness-girl44"
                            alt="welness-girl44" 
                        />
                    </LazyLoad>
                </div>

            </section>


            <FormContact />

            <Footer />
            <LowerFooter />
        </div>

    );
};

export default Welness;