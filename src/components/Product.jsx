import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Product.css'; // Import the CSS file for styling
import Footer from './Footer';
import Header from './Header';

const Product = () => {
      const products = [
            {
                  name: "Machinery Manufacturer",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s",
                  link: "/manufacturing"
            },
            {
                  name: "Relay Card",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtSZzcR4It0FBfOAf8XYmN2ZHF8I0wwsfw&s",
                  link: "/relay-card"
            },
            {
                  name: "Industrial Panel (PCC, MCC, VFD, PLC)",
                  image: "https://5.imimg.com/data5/KF/SE/DJ/SELLER-79625611/mcc-pcc-vfd-plc-panels-500x500.JPG",
                  link: "/industrial-panel-manufacturer"
            }
      ];

      return (
            <div>
                  <Header />
                  <section id="products" className="product-section">
                        <h2>Our Products</h2>
                        <div className="product-list">
                              {products.map((product, index) => (
                                    <div key={index} className="product-card">
                                          <img src={product.image} alt={product.name} className="product-image" />
                                          <h3>{product.name}</h3>
                                          <Link to={product.link} className="product-link">Learn More</Link>
                                    </div>
                              ))}
                        </div>
                  </section>
                  <Footer />
            </div>
      );
};

export default Product;
