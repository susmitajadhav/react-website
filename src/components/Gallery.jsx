import React from 'react';
import './Gallery.css';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const sections = [ 
  {
    title: "MECHANICAL ENGINEERING SERVICES",
    images: [
      "https://miro.medium.com/v2/resize:fit:1400/1*CyG0u82Tl9sv5cqj3PQY6Q.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2023/9/344797345/DL/ZP/AE/77855639/mechanical-engineering-services.jpg",
      "https://nativeengineeringsolutions.com/wp-content/uploads/2024/10/Untitled-design-1.png",
      "https://www.whizzsystems.com/wp-content/uploads/2022/11/mechanicaldesign-thermal.webp"
    ],
  },
  {
    title: "ELECTRICAL & INSTRUMENTATION SERVICES",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJfnKICij2jtxfOGNWvLInfIrmrs9twkQXQ&s",
      "https://corearbia.com/wp-content/uploads/2022/06/electrical-instrumentation-and-mechanical-onsite-services-1.jpg",
      "https://5.imimg.com/data5/HH/AU/MY-7337430/electrical-500x500.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyEhHLMWxPaXFfIVB3gdUIa9zOXJeYABL_g&s"
    ],
  },
  {
    title: "O&M SERVICES",
    images: [
      "https://engenda-group.com/assets/uploads/_1200xAUTO_fit_center-center_none/Electrician1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcu4xjEpPshZiasOCh3lp8jlwA3simnjniTDRbJv1SEzpVJ1Va6-OkBSyn9k3PaQi__0&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9v8ZUhJUJgE2U3sCpTgrwQJl2EpOzkXiE8Z6y6LdsNdh_lqRO7hOt-DgdvoNbqA5_kbM&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd89ioe1EHANSsaQbEJO0KiuEUGQ0hsM4NY1R9da5xav7gUoYUlXtEmUU5m8rD1tPkUos&usqp=CAU"
    ],
  },
  {
    title: "CONSULTANCY SERVICES",
    images: [
      "https://gnrl.in/wp-content/uploads/2022/05/consulting.jpg",
      "https://lh3.googleusercontent.com/proxy/6UatEt-I7LFKV5ajyuSqV3mgtTTLf2HSrlUbSPzUrYi58EOYwvTSIeVDnk0fNuJ9utLOSnmYcaREmLWfAaJHLNc4GLiCQJgtGyuaRsk2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MGNX6pApEShT0VehjP-KJ_5Ofk-PDsCbsg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSOIgBH-vxh2svRFY2YI5GoV6uKtqoz1SDg&s"
    ],
  },
];


const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="gallery-container">
        <h1 className="gallery-title">Project Gallery</h1>
        
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            className="gallery-section"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2 className="section-title">{section.title}</h2>
            <div className="gallery-grid">
              {section.images.map((src, idx) => (
                <motion.div 
                  key={idx} 
                  className="gallery-item"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={src} alt={`Image ${idx}`} className="gallery-image" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
