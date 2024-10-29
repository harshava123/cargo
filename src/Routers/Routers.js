// src/Routers/Routers.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/HomePage'; // Make sure this matches the file name and path
import CargoLoader from '../pages/CargoLoader';

const Routers = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cargo-loader" element={<CargoLoader />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default Routers;
