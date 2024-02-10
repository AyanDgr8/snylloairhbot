// src/components/routes/Oxygen/Oxygen/Oxygen.js


import React from 'react';
import Header from '../../LandingPage/Header/Header';
import Footer from '../../LandingPage/Footer/Footer';
import LowerFooter from '../../LandingPage/LowerFooter/LowerFooter';
import Eleventh from '../../LandingPage/Eleventh/Eleventh';
import FormContact from '../../LandingPage/FormContact/FormContact';

import './Oxygen.css'; 

const Oxygen = () => {
    return(
        <div>
            <Header />
            <section className='oxygen-container-one'>
                <img 
                src="/uploads/oxygen-bg1.jpg"
                className='oxygen-bg1'
                alt="Oxygen Background Image"
                />
                <div className='oxygen-container-one-content'>
                    <div className='oxygen-container-one-line1'>
                        Welcome a healthy breath of pure oxygen
                    </div>
                    <div className='oxygen-container-one-line2'>
                        Hyperbaric Oxygen Therapy
                    </div>
                    <div className='oxygen-container-one-line3'>
                        Hyperbaric Oxygen Therapy (HBOT) is a procedure in which we breathe pure oxygen inside a chamber with increased atmospheric pressure to improve the natural healing powers of our body.
                    </div>
                </div>
            </section>

            <section className='oxygen-container-two'>
                <img 
                src="/uploads/oxygen-bg2.jpg"
                className='oxygen-bg2'
                alt="Oxygen Background two Image"
                />
                <div className='oxygen-container-two-content'>
                    <div className='oxygen-container-two-line1'>
                        Breathe wisely
                    </div>
                    <div className='oxygen-container-two-line2'>
                        The science behind the magical powers of oxygen
                    </div>
                    <div className='oxygen-container-two-paras'>
                    The air we breathe contains volumes of about 20.9% oxygen, 78% nitrogen and small amounts of argon, carbon dioxide, neon, helium and hydrogen. The breathing air we inhale contains oxygen particles that travel from our lungs into the red cells of our bloodstream.<br></br><br></br>
                    In normal conditions, cells absorb only 25% oxygen into their mitochondria – the power house of our cells – that convert oxygen and nutrients into ATP (Adenosine triphosphate), the high-energy molecule that stores and gives our body energy to function. This process is called aerobic respiration, the principal reason we breathe oxygen.<br></br><br></br>
                    Inside a hyperbaric oxygen chamber, the pressure forces the oxygen into our lungs, bloodstream and cells to increase the absorption rates within the cells. More 0xygen is supplied to mitochondria, thus enhancing the production of energy.</div>
                </div>
            </section>

            <section className='oxygen-container-three'>
                <div className='oxygen-container-three-left'>
                    <img 
                    src='/uploads/pink-mask.png'
                    className='pink-mask'
                    alt="pink mask"
                    />
                </div>
                <div className='oxygen-container-three-right'>
                    <div className='oxygen-container-three-right-content'>
                        <div className='oxygen-container-three-right-heading'>
                            The energy boost
                        </div>
                        <div className='oxygen-container-three-right-para'>
                            Under conditions of pressure (for example 1.5 ATA), lungs can absorb more oxygen than breathing pure oxygen at normal air pressure. The circulatory system carries oxygen throughout the body to help fight bacteria and help the body to increase the oxygen supply deep into the cells.
                        </div>
                        <div className='oxygen-container-three-right-para'>
                            In normal conditions, the oxygen level in our arteries is <strong className='righty'> 100mm Hg</strong>. Inside a hyperbaric chamber at 1.5 ATA, the oxygen level in our arteries can reach under optimal conditions even <strong className='righty'>1000 mm Hg</strong>, an increase of 10 times than in normal conditions.
                        </div>
                        <div className='oxygen-container-three-right-heading'>
                            The ideal supply of oxygen
                        </div>
                        <div className='oxygen-container-three-right-para'>
                        Organic tissues need an ideal supply of oxygen to function correctly. Injured tissue requires more oxygen to survive, thus hyperbaric oxygen therapy will increase the amount of oxygen carried by blood to restore adequate levels of blood gases and tissue function.
                        </div>
                    </div>
                </div>
            </section>

            <section className='oxygen-container-four'>
                <div className="oxygen-container-four-left">
                    <div className="oxygen-container-four-heading o2-l">
                        Reduced oxygen levels
                    </div>
                    <div className="oxygen-container-four-divider"></div>
                    <div className="oxygen-container-four-paras o2-ll">
                        Our bodies depend on oxygen for survival. A lack of oxygen can weaken and damage tissue, cause premature aging, cause hair to thin and even affect the memory. When we age, our cells are starved of nutrients, but supplying oxygen to our cells can provide health, energy and vitality.<br></br><br></br>
                        Most illnesses and injuries occur in the tissue level, within the cells. In cases of non-healing wounds, strokes or problems with blood circulation, not enough oxygen can reach the affected area and as a result, natural healing does not happen. Hyperbaric Oxygen Therapy provides an increase in oxygen naturally.
                    </div>
                </div>
                <div className="oxygen-container-four-right">
                    <div className="oxygen-container-four-heading o2-r">
                        Increased oxygen levels
                    </div>
                    <div className="oxygen-container-four-divider1"></div>
                    <div className="oxygen-container-four-paras o2-rr">
                    Hyperbaric Oxygen Therapy can work in areas where other options are simply ineffective, as a result it is improving the quality of life of the sufferer.<br></br><br></br>
                    HBOT can help in any condition where an increase in oxygen is needed, it even can be used in conjunction with other type of treatments.
                    </div>

                </div>
                
            </section>

            <Eleventh />

            <FormContact/>
            <Footer />
            <LowerFooter />
        </div>
    );
};

export default Oxygen;
