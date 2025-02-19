import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUserTie, FaGraduationCap, FaCertificate } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

// Customer Logos
const customers = [
  { id: 1, name: "G.M. Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaAvEMoDkNVU9kw5GxmqgwQMGRzwdMz20iA&s" },
  { id: 2, name: "Anvisha Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s" },
  { id: 3, name: "Deccan Sugars", logo: "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png" },
  { id: 4, name: "Rupmata Jaggery", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIMz4eaUQLPv43QzcuOfC_Ai8z7OA44WaHe3WmVcfYJjA9ZM0qmT434Ks9K5ZxqIM3-4&usqp=CAU" },
  { id: 5, name: "X-India Pvt. Ltd.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1Q3VOJFdLdtyUW-eowuvFSfjMOVctDZbVQ&s" },
];

// Team Members
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & ",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    intro: "An innovative leader with a passion for technol.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Head of ",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    intro: "Expert in electrical and mechanical systems,.",
  },
  {
    id: 3,
    name: "Robert Brown",
    position: "Project Manager",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    intro: "Skilled in project execution, ensuring timely and quality deliverables.",
  },
  {
    id: 4,
    name: "Emily White",
    position: "Marketing Lead",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    intro: "Creative strategist focused on brand development and outreach.",
  },
  {
    id: 5,
    name: "Michael Green",
    position: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    intro: "Coding wizard passionate about software architecture and innovation.",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [machinery, setMachinery] = useState(0);
  const [electrical, setElectrical] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        setter((prev) => {
          if (prev >= target) {
            clearInterval(interval);
            return target;
          }
          return prev + 1;
        });
      }, 30);
    };

    animateCounter(setProjects, 150);
    animateCounter(setClients, 200);
    animateCounter(setMachinery, 120);
    animateCounter(setElectrical, 180);
  }, []);

  return (
    <>
      <section className="projects-section">
        <h2 data-aos="fade-up" className="projects-title">Projects Handled</h2>
        <div className="projects-container">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <FaProjectDiagram className="project-icon project-yellow" />
            <h3>{projects.toLocaleString()}+</h3>
            <p>Completed Projects</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <FaUserTie className="project-icon project-blue" />
            <h3>{clients.toLocaleString()}+</h3>
            <p>Clients Served</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <FaGraduationCap className="project-icon project-purple" />
            <h3>{machinery.toLocaleString()}+</h3>
            <p>Custom Machinery</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <FaCertificate className="project-icon project-gray" />
            <h3>{electrical.toLocaleString()}+</h3>
            <p>Electrical & Instrumentation</p>
          </motion.div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="satisfied-customers">
        <h2>Our Satisfied Customers</h2>
        <motion.div
          className="customer-slider"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {customers.map((customer) => (
            <div key={customer.id} className="customer-logo">
              <img src={customer.logo} alt={customer.name} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Meet Our People Section */}
      <section className="meet-our-people">
        <h2 data-aos="fade-up">Meet Our People</h2>
        <div className="team-container">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="team-card"
              whileHover={{ scale: 1.05 }}
              data-aos="zoom-in"
            >
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-intro">{member.intro}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
