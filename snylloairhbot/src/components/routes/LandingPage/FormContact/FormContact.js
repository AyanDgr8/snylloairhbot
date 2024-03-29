// src/components/routes/LandingPage/FormContact/FormContact.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    const handleSubmit = async (event) => {
      event.preventDefault();

      // Validation checks
      if (!validateForm()) return;

      const apiUrl = 'https://snylloairhbot-backend.onrender.com/user-details-bookform';

      try {
        // Prepare request data
        const requestData = {
          ...bookFormData,
          selectedBodyParts: JSON.stringify(bookFormData.selectedBodyParts)
        };
    
        // Submit the form data
        await axios.post(apiUrl, requestData);
        console.log('Submission successful');
        setSubmitStatus('success');
        handleSubmissionSuccess();
      } catch (error) {
        console.error('Error submitting form:', error);
        handleSubmissionError(error);
      }
    };

    const validateForm = () => {
      const { name, phone, email} = bookFormData;
      const phoneRegex = /^\d{10}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
      if (!name || !phone || !email ) {
        alert('Please fill in all the required fields');
        return false;
      }
    
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
      }
    
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }
    
      return true;
    };
  
    // Function to handle successful form submission
    const handleSubmissionSuccess = () => {
      setSubmitStatus('success');
      resetForm();
    };
    
    // Function to handle form submission error
    const handleSubmissionError = (error) => {
      if (error.response && error.response.data && error.response.data.error &&
        (error.response.data.error.includes('duplicate key error') ||
          error.response.data.error.includes('duplicate key email'))) {
        window.alert('The phone number or email you entered is already in use. Please enter different information.');
      } else {
        window.alert('An error occurred. Please try again later.');
      }
      setSubmitStatus('error');    
    };
    
    const resetForm = () => {
      setbookFormData({
        name:'',
        phone:'',
        email: '',
        country: "",
        profession: "",
        message: "",
      });
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
    
      setbookFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
  
      
    


        // **********************************


    //     if (form.checkValidity()) {
    //       const apiUrl = 'https://snylloairhbot-backend.onrender.com/user-details-bookform';
    //       console.log('bookFormData:', bookFormData); 
    
    //       fetch(apiUrl, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(bookFormData),
    //       })
    //         .then((response) => {
    //           if (!response.ok) {
    //             throw new Error('Error submitting form');
    //           }
    //           return response.json();
    //         })
    //         .then((data) => {
    //           console.log('Submission successful:', data);
    //           toast.success('Thank you for contacting us, we will be in touch shortly!');
    //           setSubmitStatus('success');
    //         })
    //         .catch((error) => {
    //           console.error('Error submitting form:', error);
    //           toast.error('Error submitting form. Please try again.');
    //         });
    //     } else {
    //       toast.error('Please fill in all the required fields');
    //     }

    // };

    useEffect(() => {
      if (submitStatus === 'success') {
        const resetFormTimeout = setTimeout(() => {
          setSubmitStatus(null);
          resetForm();
        }, 4000);
        return () => clearTimeout(resetFormTimeout);
      }
    }, [ submitStatus]);

    return(
        <div className="formContact-page">
            
            <div className="formContact-left-content">
                <form onSubmit={handleSubmit} className="formContact-container">
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
                                {submitStatus && (
                                  (() => {
                                    if (submitStatus === 'success') {
                                      window.alert('Thank you for contacting us, we will be in touch shortly!');
                                    } else {
                                      window.alert('Please try again!');
                                    }
                                  })()
                                )}
                              </p>
                            )}
                        </div>
                    </div>
                </form>
            </div>

          <div className="formContact-right-content">
          <LazyLoad>
            <img 
                src="/uploads/companyy.png"
                className='formContact-right'
                alt="formContact"
                />
          </LazyLoad>
          </div>
        </div>
    );
};

export default FormContact;