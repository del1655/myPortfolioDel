/* Project.jsx
Delannie Joseline Teodoro Bocanegra
StudentNumber : 301486294
Date : 29/01/2025 */
import React, { useState } from 'react';
import './Projects.css';
import projectImage1 from '../../assets/images/promansys.png'; 
import projectImage2 from '../../assets/images/lodgelog.png';
import projectImage3 from '../../assets/images/ecommerce.png';
import projectImage4 from '../../assets/images/medconnect.png';


export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'An online shopping platform with user authentication, product listings, and secure payments.',
      image: projectImage3,
    },
    {
      id: 2,
      title: 'Managment Inventory',
      description: 'Optimize your inventory with our powerful management platform. Easily track stock levels, manage orders, and streamline processes to reduce waste and improve efficiency, all while ensuring accurate and real-time inventory data.',
      image: projectImage2,
    },
    {
      id: 3,
      title: 'Projects Management',
      description: 'Streamline your workflow and enhance collaboration with our intuitive project and team management platform. Designed to improve productivity, track progress, and ensure seamless communication, it empowers teams to achieve their goals efficiently and effectively.',
      image: projectImage1,
    },
    {
      id: 4,
      title: 'Med Connect',
      description: 'A mobile application that helps users connect with and find specialized doctors in their desired field. The app allows users to search for doctors by specialty, location, and availability, book appointments, and access virtual consultations. It also provides patient reviews, doctor profiles, and secure communication features for a seamless healthcare experience',
      image: projectImage4,
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleOpenModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-name">{project.title}</h2>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
