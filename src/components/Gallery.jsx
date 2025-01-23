import React from 'react';
import './Gallery.css';
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    { src: ' https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 1' },
    { src: 'https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 2' },
    { src: 'https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 3' },
    { src: 'https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 5' },
    { src: 'https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0=', alt: 'Image 6' },
  ];

  return (
    <div>
        <Header/>
    <div className="gallery-container">
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
