// src/components/routes/LandingPage/Eighth/Eighth.js


import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Eighth.css';

const Eighth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    "/uploads/painii.png",
    "/uploads/woundsii.png",
    "/uploads/rehabii.png"
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const SliderContent = ({ index }) => {
    return <img src={images[index]} className="slider-trio" alt={`Slide ${index}`} />;
  };

  return (
    <div className='eighth-page-content'>
      <div className='eighth-page-heading'>
        Applications
      </div>
      <div className='eighth-page-para'>
        Given its physiological therapeutic benefits, Hyperbaric Oxygenation Treatment 
        is recommended for all conditions associated with pain and inflammation. Its primary 
        effects include expediting rehabilitation durations and fostering the healing of wounds.
      </div>
      <div className="slider-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => handleClick(index)}
          >
            {index === 0 ? "Pain" : index === 1 ? "Wounds" : "Rehabilitation"}
          </button>
        ))}
      </div>
      <Slider ref={sliderRef} className='slider-three' {...sliderSettings}>
        {images.map((image, index) => (
          <SliderContent key={index} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Eighth;
