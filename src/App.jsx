//app.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
// import Vision from './components/Vision';
// import Mission from './components/Mission';
 import Product from './components/Product';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop

import ContactPage from './components/ContactPage';
import HeroSection from './components/HeroSection';
import ServicesPage from './components/ServicesPage';
import WhatWeOffer from './components/WhatWeOffer';
import Manufacturing from './components/Manufacturing';
import Gallery from './components/Gallery';
import RelayCard from './components/RelayCard';
import IndustrialPanelManufacturer from './components/IndustrialPanelManufacturer';
import Services from './components/Services';
import GetQuote from './components/GetQuote';
import ConsultancyServices from './components/ConsultancyServices';
import MechanicalEngineering from './components/MechanicalEngineering';
import OM from './components/OM';
import Electrical from './components/Electrical';
import Instrumentation from './components/Instrumentation';
import SupplyOfMachinery from './components/SupplyOfMachinary';
import Laisoning from  './components/Laisoning';
import LTInstallation  from './components/LTInstallation';
import Solar from  './components/Solar';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductList />
      <ServicesPage />
      <WhatWeOffer />
     
      {/* <Gallery /> */}
      {/* <ConsultancyServices /> */}
      {/* <MechanicalEngineering /> */}
      {/* <OM /> */}
      {/* <Electrical /> */}
      {/* <Project /> */}
      {/* <ContactPage/> */}
      {/* <IndustrialPanelManufacturer/> */}
      {/* <Manufacturing/> */}
      {/* <RelayCard/> */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router> {/* Add basename */}
    <ScrollToTop /> {/* This ensures every page scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/Herosection" element={<HeroSection />} />
        /* <Route path="/product" element={<Product />} /> */
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/vision" element={<Vision />} /> */}
        {/* <Route path="/mission" element={<Mission />} /> */}
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/footer" element={<Footer />} />
     
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/mechanicalengineering" element={<MechanicalEngineering />} />
        <Route path="/relay-card" element={<RelayCard />} />
        <Route path="/industrial-panel-manufacturer" element={<IndustrialPanelManufacturer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/om" element={<OM />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/Instrumentation" element={<Instrumentation />} />
        <Route path="/ConsultancyServices" element={<ConsultancyServices />} />
        <Route path="/supplyofmachinery" element={<SupplyOfMachinery />} />
        <Route path="/Laisoning" element={<Laisoning />} />
        <Route path="/LTInstallation" element={<LTInstallation />} />
        <Route path="/solar" element={<Solar />} />
      
      </Routes>
    </Router>
  );
};

export default App;
