import React, { useState } from 'react';
import './Project.css';
import StayHavenixImage from '../assets/stayhavnex.jpg';
import Songify from '../assets/image.png'
import portfolio from '../assets/portfolio.png'
import TraficControl from '../assets/TraficControl.jpg'
import solar from '../assets/solar.jpg'
const projects = [

  {
    id: 1,
    title: 'StayHavenix - Accommodation Booking Platform',
    shortDesc: 'Full-stack web app to book accommodations, built with MERN stack.',
    description: `StayHavenix is a full-stack accommodation booking platform designed and developed with MongoDB, Express.js, React.js, and Node.js. It allows users to search, book, and review stays.`,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    imageUrl: StayHavenixImage,
    projectLink: 'https://github.com/rajkishor/stayhavenix'
  },
  {
    id: 2,
    title: 'Songify - Music Player',
    shortDesc: 'A full-stack music streaming web app built with the MERN stack.',
    description: `Songify is a full-stack music streaming platform developed using MongoDB, Express.js, React.js, and Node.js. It allows users to browse, search, and stream music tracks, create personalized playlists, and enjoy a responsive, sleek interface designed for music lovers.`,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    imageUrl: Songify, 
    projectLink: 'https://github.com/rajkishorS/songify-'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    shortDesc: 'Personal portfolio to showcase my skills and projects.',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['React', 'CSS', 'Material UI'],
    imageUrl: portfolio,
    projectLink: 'https://www.linkedin.com/in/raj-kishor-595a082a1/'
  },
  {
    id: 4,
    title: 'Density-Based Traffic Control System ',
    shortDesc: 'A Density-Based Traffic Control System adjusts traffic signals dynamically.',
    description: `Traditional traffic lights run on fixed timers regardless of traffic flow. This leads to congestion, unnecessary waiting, or underutilization. Density-based systems aim to reduce congestion and waiting time by adapting signal timings according to real-time traffic conditions.`,
    techStack: ['Embedded', 'programming c', 'microcontrol', 'ArdinoUno program'],
    imageUrl: TraficControl,
    projectLink: ''
  },
  {
    id: 5,
    title: 'Dual axis solar tracking system',
    shortDesc: 'this project increse the solare effencicy and take the 40% effenciency',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['Embedded', 'programming c', 'microcontrol'],
    imageUrl:solar,
    projectLink: ''
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-cards">
        {projects.map(({ id, title, shortDesc, imageUrl }) => (
          <div
            key={id}
            className="project-card"
            tabIndex={0}
            role="button"
            onClick={() => setSelectedProject(projects.find(p => p.id === id))}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(projects.find(p => p.id === id))}
          >
            <img src={imageUrl} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.description}</p>

            <h4>Tech Stack:</h4>
            <ul>
              {selectedProject.techStack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            {selectedProject.projectLink && (
              <a href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
