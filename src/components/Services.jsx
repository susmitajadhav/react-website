import React from "react";
import "./Product.css";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  { name: "Project 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },
  { name: "Project 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s" },

];

const Services = () => {
  return (
   <div>
    <Header/>
    <div className="projects-page">
      <h1>Our Projects</h1>
      <p>Explore our range of projects</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-box">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="overlay">
                <p>{project.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
