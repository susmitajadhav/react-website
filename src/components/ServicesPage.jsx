import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ServicesPage.css';


const ServicesPage = () => {
  const services = [
    {
      title: 'Consultancy Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFizBIE_eGqs2C2JL6DvXkvEKUDPQAvOEr1g&s',
      link: "/consultancyservices"
    },
    {
      title: 'Mechanical Engineering Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBkbETGBOr5-vnTTi9th3MP-hlQUbu2aOxg&s',
      link: "/mechanicalengineering"
    },
    {
      title: 'Electrical & Instrumentation Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s',
      link: "/electrical"
    },
    {
      title: 'O & M Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS059frnmzmI_KVvyU3GfNKC09N_JzAH79Obg&s',
      link: "/om",
    }
  ];

  return (
  
      <div className="services-container">
        <h1 className="page-title">Our Services</h1>
        <div className="service-cards-container">
          {services.map((service, index) => (
            <Link to={service.link} className="service-item" key={index}>  {/* Wrap service item with Link */}
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default ServicesPage;
