import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HeroSection.css';

const HeroSection = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div> {/* Overlay that covers the entire background */}
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Awesome Website!</h1>
        <p className="hero-description">
          We provide innovative solutions to take your business to the next level.
        </p>
        <a href="/services" className="cta-button">
          Explore Our Services
        </a>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKszY7Gh1ZXkLhTd6x4pUCQgfwwLiwG_a4zQ&s"
              alt="Slide 1"
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0="
              alt="Slide 2"
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKszY7Gh1ZXkLhTd6x4pUCQgfwwLiwG_a4zQ&s"
              alt="Slide 3"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
