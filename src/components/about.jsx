// src/components/About.js

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={require('../images/about.jpg')} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About SmartFields</h2>
          <p>
            Welcome to SmartFields! We are dedicated to providing intelligent solutions and cutting-edge technology to enhance your productivity and streamline your processes. Our team of experts is committed to delivering innovative products and exceptional services that meet the evolving needs of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
