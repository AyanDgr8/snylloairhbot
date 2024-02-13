// src/components/routes/LandingPage/FormContact/FormContact.js

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazyload';
import "./FormContact.css";


const FormContact = () =>{
    const [submitStatus, setSubmitStatus] = useState(null);
    const [bookFormData, setbookFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        profession: "",
        message: "",
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setbookFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
          // Mock API endpoint for demonstration purposes
          const apiUrl = 'https://snylloairhbot-backend.onrender.com/user-details-bookform';
    
          console.log('bookFormData:', bookFormData); 
    
          fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookFormData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Error submitting form');
              }
              return response.json();
            })
            .then((data) => {
              console.log('Submission successful:', data);
              toast.success('Thank you for contacting us, we will be in touch shortly!');
              setSubmitStatus('success');
            })
            .catch((error) => {
              console.error('Error submitting form:', error);
              toast.error('Error submitting form. Please try again.');
            });
        } else {
          toast.error('Please fill in all the required fields');
        }

    };

    useEffect(() => {
      if (submitStatus === 'success') {
        // Reset the form after 3 seconds
        const resetForm = setTimeout(() => {
          setSubmitStatus(null);
          setbookFormData({
            name: '',
            phone: '',
            email: '',
            country: "",
            profession: "",
            message: "",
          });
        }, 3000);
        return () => clearTimeout(resetForm);
      }
    }, [bookFormData, submitStatus]);

    return(
        <div className="formContact-page">
            <div className="formContact-left-content">
              <LazyLoad>
                <img 
                    src="/uploads/snyllo-air-globe.gif"
                    className='formContact-left'
                    alt="formContact-left"
                />
              </LazyLoad>
            </div>
            <div className="formContact-right-content">
                <div className="formContact-container">
                    <div className="formContact-heading">
                        <div className="formContact-line1">
                            We would like to hear from you.
                        </div>
                        <div className="formContact-line2">
                            Contact Us
                        </div>
                        <div className="formContact-line3">
                            Our technical, medical and commercial team is at your disposal to assist you.
                        </div>

                        <div>
                        <div id="formContact-section" onSubmit={handleSubmit}>
                            <div className="input-row">
                                <input
                                type="text"
                                placeholder="Your Name*"
                                name="name"
                                className="name-bookForm"
                                value={bookFormData.name}
                                onChange={handleChange}
                                required
                                />
                                <input
                                type="tel"
                                placeholder="Phone Number*"
                                name="phone"
                                className="telephone-bookForm"
                                value={bookFormData.phone}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                required
                                />
                            </div>
                            <div className="input-row">
                                <input
                                type="email"
                                placeholder="Email Address*"
                                name="email"
                                className="email-bookForm"
                                value={bookFormData.email}
                                onChange={handleChange}
                                required
                                />
                                <select
                                    name="country"
                                    className="country"
                                    value={bookFormData.country}
                                    onChange={handleChange}
                                    required
                                    >
                                    <option value="India">India</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                            <input 
                                type="text"
                                placeholder="Profession"
                                name="profession"
                                className="profession-bookForm"
                                value={bookFormData.profession}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                placeholder="Message"
                                name="message"
                                className="message-bookForm"
                                value={bookFormData.message}
                                onChange={handleChange}
                            />
                            <button className="bookFormbutton" type="submit">
                                I want to be contacted
                            </button>
                            </div>

                            
                            {submitStatus && (
                                <p className={submitStatus === 'success' ? 'success-message' : 'error-message'}>
                                    {submitStatus === 'success' ? 'Thank you for contacting us, we will be in touch shortly!' : 'Error submitting form. Please try again.'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FormContact;