import React from 'react';
import './Gallery.css';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/3/398054588/DP/TD/WH/6973140/three-phase-industrial-pcc-panel-1000x1000.jpeg', alt: 'Image 1' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2020/9/VK/LV/LM/99457312/industrial-automatic-power-factor-panel-1000x1000.jpg', alt: 'Image 2' },
  { src: 'https://tiimg.tistatic.com/fp/1/005/377/industrial-300-kva-apfc-panels-529.jpg', alt: 'Image 3' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFZ5qMxbsM5cI0KRjyw5ZxjjjNSD0PUlN-Q&s', alt: 'Image 4' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXcSQ44u5jKMJcQiQN5g47Jm0I35anKt5QA&s', alt: 'Image 5' },
  { src: 'https://5.imimg.com/data5/VR/MM/JG/SELLER-10475050/mcc-panels-500x500.jpg', alt: 'Image 6' },
];

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="gallery-container">
        <h1 className="gallery-title">Project Gallery</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
