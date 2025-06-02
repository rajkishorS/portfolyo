import React, { useState } from 'react';
import './Project.css';

const projects = [
  {
    id: 1,
    title: 'StayHavenix - Accommodation Booking Platform',
    shortDesc: 'Full-stack web app to book accommodations, built with MERN stack.',
    description: `StayHavenix is a full-stack accommodation booking platform designed and developed with MongoDB, Express.js, React.js, and Node.js. It allows users to search, book, and review stays.`,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    imageUrl: '/path/to/stayhavenix.png',
    projectLink: 'https://github.com/rajkishor/stayhavenix'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    shortDesc: 'Personal portfolio to showcase my skills and projects.',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['React', 'CSS', 'Material UI'],
    imageUrl: '/path/to/portfolio.png',
    projectLink: 'https://www.linkedin.com/in/raj-kishor-595a082a1/'
  },
  {
    id: 3,
    title: 'Dual axis solar tracking system',
    shortDesc: 'this project increse the solare effencicy and take the 40% effenciency',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['Embedded', 'programming c', 'microcontrol'],
    imageUrl: '/path/to/portfolio.png',
    projectLink: 'https://www.raju.com'
  },
  {
    id: 4,
    title: 'Dual axis solar tracking system',
    shortDesc: 'this project increse the solare effencicy and take the 40% effenciency',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['Embedded, programming c, microcontrol'],
    imageUrl: '/path/to/portfolio.png',
    projectLink: 'https://www.raju.com'
  },
  {
    id: 5,
    title: 'Dual axis solar tracking system',
    shortDesc: 'this project increse the solare effencicy and take the 40% effenciency',
    description: `A responsive portfolio website built with React to showcase my projects, skills, and experience. Includes smooth scrolling and contact form.`,
    techStack: ['Embedded, programming c, microcontrol'],
    imageUrl: '/path/to/portfolio.png',
    projectLink: 'https://www.raju.com'
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
