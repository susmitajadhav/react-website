import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer';
import Header from './Header';

const Services = () => {
  const services = [
    {
      title: 'Consultancy Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFizBIE_eGqs2C2JL6DvXkvEKUDPQAvOEr1g&s',
      link: "/consultancyservices"
    },
    {
      title: 'Mechanical Engineering',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBkbETGBOr5-vnTTi9th3MP-hlQUbu2aOxg&s',
      link: "/mechanicalengineering"
    },
    
    {
      title: 'O & M Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS059frnmzmI_KVvyU3GfNKC09N_JzAH79Obg&s',
      link: "/om"
    },
    {
      title: 'Electrical Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TL3L9MBpjEds4qVkIzGmBX4dNzG0I0XGeg&s',
      link: "/civilconstruction"
    },
    {
      title: ' Instrumentation Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s',
      link: "/electrical"
    },
  ];

  return (
    <div>
      <Header />
      <div className="modern-services-container">
        <h1 className="modern-services-title">Our Services</h1>
        <div className="modern-services-grid">
          {services.map((service, index) => (
            <Link to={service.link} className="modern-service-card" key={index}>
              <div className="modern-card-image">
                <img src={service.image} alt={service.title} className="modern-img" />
              </div>
              <div className="modern-card-text">
                <h2 className="modern-service-name">{service.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
