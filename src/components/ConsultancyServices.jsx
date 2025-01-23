import React from "react";
import "./ConsultancyServices.css";
import Footer from "./Footer";
import Header from "./Header";

const ConsultancyServices = () => {
    return (
        <div>
            <Header />
            <div className="container">
                {/* Image Section */}
                <div className="image-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFizBIE_eGqs2C2JL6DvXkvEKUDPQAvOEr1g&s" // Replace with your image URL
                        alt="Consultancy Services"
                        className="image"
                    />
                </div>
                {/* Information Section */}
                <div className="info-container">
                    <h1 className="title">Consultancy Services</h1>
                    <p className="description">
                        We provide professional consultancy services for the following:
                    </p>
                    <ul className="list">
                        <li>Total Sugar Plant Projects</li>
                        <li>Co-Generation/Power Plant Projects</li>
                        <li>Distillery & Ethanol Plant Projects</li>
                    </ul>
                    <p className="description">
                        Our services include:
                    </p>
                    <ul className="list">
                        <li>New Project Detailed Project Report (DPR) Preparation</li>
                        <li>Technical Bid Preparation & Evaluation for Projects</li>
                        <li>Design & Drawings Preparation and Approval</li>
                        <li>Stagewise Machinery Inspection & Erection Work</li>
                        <li>Expansion, Upgradation, & Modernization of Existing Plants</li>
                    </ul>
                    <p className="additional-info">
                        With years of experience and expertise, we help you achieve operational efficiency and ensure the highest standards of quality for your projects.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ConsultancyServices;
