import React from 'react';
import './services.css';

const Services = () => {
  const services = [
    { 
      id: 1, 
      image: require('../images/cat.jpg'), 
      description: 'Service 1 description goes here.',
      buttonText: 'Learn More' 
    },
    { 
      id: 2, 
      image: require('../images/dog.jpg'), 
      description: 'Service 2 description goes here.',
      buttonText: 'Learn More' 
    },
    { 
      id: 3, 
      image: require('../images/logo.png'), 
      description: 'Service 3 description goes here.',
      buttonText: 'Learn More' 
    },
    { 
      id: 4, 
      image: require('../images/logo.png'), 
      description: 'Service 4 description goes here.',
      buttonText: 'Learn More' 
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div className="card" key={service.id}>
            <img src={service.image} alt={`Service ${service.id}`} />
            <p>{service.description}</p>
            <button className="btn">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
