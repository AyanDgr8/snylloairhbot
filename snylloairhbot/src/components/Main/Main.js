// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/LandingPage/Home';
import Medicine from '../routes/Medicine/Medicine';
import Oxygen from '../routes/Oxygen/Oxygen/Oxygen';
import Sports from '../routes/Oxygen/Sports/Sports';
import Welness from '../routes/Oxygen/Welness/Welness';
import Aging from '../routes/Oxygen/Aging/Aging';
import Product from '../routes/Product/Product';
import Company from '../routes/Company/Company';
import Faq from '../routes/Faq/Faq';
import Contact from '../routes/Contact/Contact';
import Login from '../routes/Login/Login';
import Register from '../routes/Register/Register';


import './Main.css';


export default function Main(){
    return (
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/medicine" element={<Medicine />} />
                    <Route path='/oxygen' element={<Oxygen />} />
                    <Route path='/oxygen/sports' element={<Sports />} /> 
                    <Route path='/oxygen/welness' element={<Welness />} />
                    <Route path='/oxygen/anti-aging' element={<Aging />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    </>
    );
}