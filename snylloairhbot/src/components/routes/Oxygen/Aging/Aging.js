// src/components/routes/Oxygen/Aging/Aging.js

import React from "react";
import LazyLoad from 'react-lazyload';
import FormContact from '../../LandingPage/FormContact/FormContact';
import Header from '../../LandingPage/Header/Header';
import Footer from '../../LandingPage/Footer/Footer';
import LowerFooter from '../../LandingPage/LowerFooter/LowerFooter';

import  './Aging.css'; 

const Aging = () =>{
    return(
        <div>
            <Header />
            <section className="aging-container-one"> 
                <LazyLoad>
                    <img 
                    src="/uploads/aging-bg.png"
                    className="aging-bg"
                    alt="aging-bg" 
                    />
                </LazyLoad>
                <div className='aging-container-one-content'>
                    <div className='aging-container-one-line1'>
                        Relax and feel younger with every breath.
                    </div>
                    <div className='aging-container-one-line2'>
                        Hyperbaric Oxygen Therapy for elderly people
                    </div>
                    <div className='aging-container-one-line3'>
                        Inside the hyperbaric chamber, a user will absorb oxygen close to four times the normal breathing conditions.
                    </div>
                </div>
            </section>



            {/* ************ */}



            <section className="aging-container-two">

                <div className="aging-two-left">
                    <img 
                    src="/uploads/otto.png"
                    className="otto"
                    alt="otto" 
                    />
                    <div className="otto-heading">
                        Dr. Otto Warburg, Nobel Prize winner in medicine (1931)
                    </div>
                    <div className="otto-line">
                        "The fundamental cause of all degenerative disease is a condition called hypoxia, oxygen deprival at cellular level."
                    </div>

                </div>
                <div className="aging-two-right">
                    <div className="aging-two-content">
                        <div className="aging-two-heading">
                        Master your breath, master your health
                        </div>
                        <div className="aging-two-para">
                        Oxygen controls most of the body’s processes, including the immune system. Lack of oxygen can lead to a vulnerable immune response, increased fatigue and eventually hypoxia, oxygen starvation in the cells which is considered the cause of many degenerative diseases.
                        </div>
                    </div>
                </div>


            </section>

            {/* ****** */}

            <section className="aging-container-three">
                <div className="aging-three-left">
                    <div className="aging-three-content">
                        <div className="aging-three-line1">
                        Pure oxygen to stimulate the natural healing process
                        </div>
                        <div className="aging-three-line2">
                        Hyperbaric oxygen therapy sessions are comfortable and relaxing and all you have to do is breathe pure oxygen inside a chamber with increased atmospheric pressure that enhances the distribution of oxygen through blood capillaries, through tissues, organs, and the brain. The treatment is non-invasive and fit for mostly everyone, with a few exceptions.
                        </div>
                    </div>
                    
                    <div>
                        <button className='butt-hbot buttt'>Read more about potential risks </button>
                    </div>
                </div>
                <div className="aging-three-right">
                    <LazyLoad>
                        <img 
                        src="/uploads/aging-boy11.png"
                        className="aging-boy11"
                        alt="aging-boy11"
                        />
                    </LazyLoad>
                </div>

            </section>



            {/* ************** */}


            <section className="aging-container-four">
                <div className="aging-four-left">
                    <LazyLoad>
                        <img 
                            src="/uploads/snylloair-capsule.png"
                            className="snylloair-capsulee"
                            alt="snylloair-capsulee" 
                        />
                    </LazyLoad>

                    <div>
                        <button className='butt-hbot butty'>Step inside our hyperbaric chambers </button>
                    </div>
                </div>

                <div className="aging-four-right">
                    <div className="aging-four-content">
                        <div className="aging-four-line1">
                            Hyperbaric Oxygen Therapy can be beneficial for:
                        </div>
                        <div className="aging-four-line2">
                            Stimulate the natural recovery process and immunity.<br></br><br></br>
                            Boost vitality, heighten concentration and memory.<br></br><br></br>
                            Reduce fatigue and improve energy levels, stamina and endurance.<br></br><br></br>
                            Improve cell rejuvenation and help with anti-aging strategies.<br></br><br></br>
                            Remove the sensation of brain fog and jet lag.<br></br><br></br>
                            Eliminates toxins and debris.<br></br><br></br>
                            Reactivate skin cells and improve blood circulation 
                        </div>
                    </div>
                </div>

            </section>

            {/* ***************** */}


            

            <section className="aging-container-five">
                <LazyLoad>
                    <img 
                    src="/uploads/blood.png"
                    className="shiny"
                    alt="shiny" 
                    />
                </LazyLoad>
                <div className="aging-five-content">
                    <div className="aging-five-line1">
                        Hyperbaric Oxygen Therapy is as natural as breathing
                    </div>
                    <div className="aging-five-line2">
                        One of the most efficient natural methods to increase both physical and cognitive performance.
                    </div>
                </div>
            </section>


            {/* ****************** */}

            <section className="aging-container-six">

                <div className="aging-six-para">
                    <div className="aging-six-line1">
                        The beneficial role of HBOT for the elderly
                    </div>
                    <div className="aging-six-line2">
                        Aging is not a disease per se, but certain diseases are associated with aging. Hyperbaric oxygenation (HBO) has an important role. Multiple factors, including the inborn aging process, genetic defects, and environmental agents, participate in the aging process. There are more than 300 theories to explain the aging phenomenon. The most well-known of these states is that aging may be due to deleterious, irreversible changes produced by free radical reactions.
                    </div>
                </div>

                <div className="aging-boxes">

                    <div className="aging-box">
                        <div className="aging-box-line1">
                        Free Radicals and Aging
                        </div>
                        <div className="aging-box-line3">
                            The free radical theory of aging postulates that a single common process, modified by genetic and environmental factors, is responsible for the aging and death of all living cells.
                        </div>
                        <div className="aging-box-line2">
                        The free radical theory of aging, postulated by Denham Harman in 1954, remains the most popular and widely tested theory of aging. It is based on the chemical nature and ubiquitous presence of free radicals.<br></br><br></br>
                        Despite the actions of antioxidant nutrients, some oxidative damage will occur, and accumulation of this damage throughout life is believed to be a major contributing factor to aging and disease. Oxidative stress and production of free radicals tend to increase with aging,whereas the body’s natural antioxidant defenses decline.
                        </div>
                    </div>

                    <div className="aging-box">
                    <LazyLoad>
                        <img 
                        src="/uploads/aging-boy22.png"
                        className="aging-boy22"
                        alt="aging-boy22" 
                        />
                    </LazyLoad>
                    </div>
                    
                    <div className="aging-box ">
                        <div className="aging-box-line1">
                        Oxygen therapy to help elderly persons
                        </div>
                        <div className="aging-box-line3">
                        Helping elderly people to regain health can be a real challenge
                        </div>
                        <div className="aging-box-line2">
                        The capacity for physical exercise is reduced in these group of people. HBO may not increase the physical performance in healthy adults, but it can help to regain the physical strengh for elderly people. Physical therapy can be carried out in a multi-place hyperbaric chamber.<br></br><br></br>
                        The main object of HBO is to help counteract the deprival of oxygen and help improve the metabolism. These two disturbances, also affect the brain, which constitutes a major portion of the problems for eledery persons. Eldery users might experience positive effects after using hyperbaric oxygen therapy in this regard.
                        </div>
                    </div>

                    <div className="aging-box">
                        <div className="aging-box-line1">
                        Hypoxia is central to decreasing mental function with aging
                        </div>
                        <div className="aging-box-line3">
                        The deprival of oxygen accompanies the aging process and hyperbaric oxygen therapy can counteract this.
                        </div>
                        <div className="aging-box-line2">
                        Aging can be viewed as a manifestation of hypoxia. The aging process involves a diminished capacity of the central nervous system to use oxygen. The decline of mental function resulting from aging is similar to the decline resulting from hypoxia. Although there is impairment of functional activity with hypoxia in aging, the metabolic capacity of the brain is not totally exhausted.
                        </div>
                    </div>

                </div>

            </section>


            {/* ************* */}

            <section className="aging-container-seven">
                <div className="aging-seven-left">
                    <LazyLoad>
                        <img 
                        src="/uploads/aging-boy33.png"
                        className="aging-boy33"
                        alt="aging-boy33" 
                        />
                    </LazyLoad>
                </div>
                <div className="aging-seven-right">
                    <div className="aging-seven-content">
                        <div className="aging-seven-line1">
                        HBO in the Management of Decline of Mental Function with Aging
                        </div>
                        <div className="aging-seven-line2">
                        HBO is part of a multidisciplinary approach to the persons with decline of mental function with aging. It works best combined with brain jogging (mental exercises), physical exercise, and nootropic substances (to improve cerebral metabolism).<br></br><br></br>
                        HBO can improve the overall mental functions, as well as metabolic disturbances associated with a lack of oxygen for elderly persons .<br></br><br></br>
                        HBO is generally considered to be safe in the aged persons unless they have a medical contraindication.
                        </div>

                    </div>
                </div>

            </section>

            <FormContact/>
            <Footer />
            <LowerFooter />
        </div>

    );
};

export default Aging; 
