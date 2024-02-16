// src/components/routes/Faq/Faq.js

import React, { useState } from "react";
import './Faq.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import LowerFooter from '../LandingPage/LowerFooter/LowerFooter';

const FaqButton = ({ isOpen, onClick, question }) => (
    <button className={`faq-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
      {question}
      <span className="icon">{isOpen ? '-' : '+'}</span>
    </button>
  );

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const faqData = [
        {
            question: "What is a hyperbaric chamber?",
            answer: `A Hyperbaric Chamber is a medical device specially designed to deliver oxygen at a pressure higher than the normal atmospheric. It increases the concentration and availability of this gas in the blood plasma.
            Biobarica uses Hyperbaric Chambers with Revitalair®️ technology that reach a pressure of 1.45 ATA and achieve complete efficiency in the diffusion of oxygen to all body tissues.`
        },
        {
            question: "Why are Revitalair Hyperbaric Chambers safe?",
            answer: `All protocols with the Revitalair® 430 Hyperbaric Chamber demonstrate that normal or excessive use does not approach toxicity values. Unlike other hyperbaric chambers, they pressurize with ambient air in circulation and oxygen is administered through a mask, so there is no risk of interference with different types of textile or therapeutic materials that have metals in their composition.
            The Revitalair® 430 hyperbaric chamber has a triple security system that acts sequentially to avoid any fault or malfunction of the user. The closure system is made of aeronautical aluminum and has a design that can withstand pressures several times higher than normal work. The flexible fabric and windows are designed and tested for frequent use and overpressures that cannot be reached by the equipment compression system.`
        },
        {
            question:"What are the differences between Revitalair 430 and other Hyperbaric Chambers?",
            answer:`Rigid hyperbaric chambers work with high pressure. This requires high maintenance costs and a specialized operator. Also, its safety requirements are very high and the treatment is more aggressive and stressful for the patient. Regarding the effects, there are no substantial differences in the results.
            The Revitalair® Hyperbaric Chambers are 1.45 ATA-certified medical devices that have a removable stretcher for patients with reduced mobility and a zipperless opening system. Finally, there are large technological differences in air flows. In the Revitalair® technology hyperbaric chambers the treatment pressure can be lowered, but it cannot be raised. The equipment operating in standard form only works at 1.45 ATA, but in some cases, the doctors decide to work at a lower pressure and open the outlet valve 1 or 2 points. The internal pressure is stabilized at values between 1.1 and 1.45 ATM as indicated.`
        },
        {
            question: "What is required to install and maintain a Hyperbaric Chamber?",
            answer:`Because Revitalair® 430 Hyperbaric Chamber is flexible and portable, it can be installed in any environment with absolute safety. The recommended, but not mandatory, is to place a common air conditioner since inside the chamber the temperature rises from 2 to 3 degrees per action of the pressurization of the air and the air conditioning make it more pleasant in hot climates. The minimum measures to install and operate equipment commercially are 3.6 meters by 2.5 meters.
            Maintenance is done by the hyperbaric chamber operator with the instructions we provide. The Biobarica Global System (BGS) management software notifies you of all necessary maintenance for the equipment to function properly. In case of any technical problem, Biobarica offers personalized attention and operational support through direct contact with the factory.`
        },
        {
            question:"How does Hyperbaric Oxygen Therapy work?",
            answer:`Hyperbaric Oxygen Therapy (HBOT) is a non-invasive medical treatment that involves breathing high concentrations of oxygen in a pressurized Hyperbaric Chamber at a minimum of 1.45 ATA.
            Oxygen is obtained through a mask. This generates strong hyperoxia. Hyperoxia produces different beneficial physiological effects that act at different levels and in different tissues simultaneously.`
        },
        {
            question:"What are the applications of Hyperbaric Oxygen Therapy?",
            answer:`Due to its therapeutic physiological effects, Hyperbaric Oxygenation Treatment is indicated in all pathologies that occur with pain and inflammation. Among its main effects: accelerates rehabilitation times and promotes wound healing.
            Know the applications of Hyperbaric Oxygen Treatment in:
            PAIN
            WOUNDS
            REHABILITATION
            `
        },
        {
            question:"What are the physiological effects of Hyperbaric Oxygen Therapy?",
            answer:`Hyperbaric Oxygen Therapy generates strong hyperoxia. Its physiological effects are:
            Non-hypoxemian vasoconstriction
            Angiogenesis and vasculogenesis
            Proliferation and stimulation of stem cells
            Stimulation of collagen synthesis
            Regulates oxidative stress and inflammatory response
            Stimulates axonal and peripheral regeneration
            Increases neuronal function and neuroprotection
            Bactericidal activity
            Promotes cellular immunity`
        },
        {
            question:"What are the benefits of Hyperbaric Oxygen Therapy at 1.45 ATA?",
            answer:`The new medium pressure technology is efficient and does not carry the risks of high-pressure hyperbaric chambers. Both technologies have similar performance and even the dose of oxygen provided at medium pressure gives in some cases a greater anti-inflammatory effect than high-pressure chambers.
            In neurology, there were achieved superior therapeutic effects by working with pressures lower than 2 ATM. The researchers suggest that, at the neuronal level, neuroplasticity or neuronal recovery and nerve fiber regeneration is achieved with low-level oxygen dose, since at higher levels of oxygen the reactive oxygen species are toxic to the neuron and therapeutic effect is not produced. This pressure at 1.45 ATA is also ideal for treating pediatric or epileptic patients.`
        },
        {
            question:"What are the contraindications of Hyperbaric Oxygenation Treatment?",
            answer:`Hyperbaric Oxygen Therapy at 1.45 ATA only has as an absolute contraindication: the untreated or spontaneous pneumothorax and pulmonary bullae. Relative contraindications should be evaluated by the doctor at the first consultation: unhealed tympanic perforation, chemotherapy with certain medications (bleomycin, cisplatin, doxorubicin, disulfiram) performed on the same day of the Hyperbaric Chamber session and the use of a technology pacemaker ancient.
            Some special care should be taken in patients with claustrophobia, upper airway diseases, patients with chronic obstructive pulmonary disease, as well as controlling blood glucose in diabetic patients and checking blood pressure in hypertensive patients. By taking the necessary precautions, all these conditions can be overcome without major problems.`
        },
        {
            question:"Are there clinical studies demonstrating the effectiveness of the treatment?",
            answer:`There are different clinical studies and treatment protocols in the hyperbaric chamber. We have a scientific division that is responsible for collecting, updating and disseminating documentation relevant to hyperbaric oxygen therapy. We also provide statistics of the entire network of providers and the pathologies we work with, in addition to the scientific studies we develop to disseminate among professionals. We do all this through our management software Biobarica Global System (BGS).
            If you require documentation on hyperbaric chamber therapy, its fundamentals, applications and benefits, please do not hesitate to contact us.`
        },
       
    ];

    const handleQuestionClick = (index) => {
        setOpenQuestion((prevOpenQuestion) => (prevOpenQuestion === index ? null : index));
    };

    return(
        <div>
        <Header />
        

        <section className='faq-container'>
            <img 
                src='/uploads/faq.png'
                className='faqs'
                alt='faqs'
            />
            <div className='faq-heading'>
                <div className='faq-line1'>Frequently Asked Questions</div>
                <div className='faq-line2'>All your questions, already answered.</div>
            </div>
        </section>

        <section className="faq-qs">
        <div className="fa-questions">
            {faqData.map((faq, index) => (
            <div key={index}>
                <FaqButton
                isOpen={openQuestion === index}
                onClick={() => handleQuestionClick(index)}
                question={faq.question}
                />
                {openQuestion === index && <p className="faq-answers">{faq.answer}</p>}
            </div>
            ))}
        </div>
        </section>
        


        <Footer />
        <LowerFooter />
            
        </div>
    );
};

export default Faq;