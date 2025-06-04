import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <p>
          Hello! I'm <strong>Raj Kishor</strong>, a passionate full-stack developer from Gandhinagar,
          currently pursuing my Bachelor's degree at Government Engineering College under Gujarat Technological University.
          I specialize in building dynamic, responsive web applications using modern technologies like React, Node.js, and MongoDB.
        </p>

        
      </div>

      <div className="about-extra">
        {/* Education Section */}
        <div className="about-card">
          <h3>🎓 Education</h3>

          <div className="education-item">
            <h4>Bachelor of Engineering (B.E.) in Computer Engineering</h4>
            <p>
              <strong>Institution:</strong>{' '}
              <a href="https://www.gecg28.ac.in/" target="_blank" rel="noopener noreferrer">
                Government Engineering College, Gandhinagar
              </a>
            </p>
            <p><strong>Year:</strong> 2021 - Present</p>
            <p><strong>Grade:</strong> 8.5 CGPA</p>
          </div>

          <div className="education-item">
            <h4>Diploma in Computer Engineering</h4>
            <p>
              <strong>Institution:</strong>{' '}
              <a href="https://www.gpsitamarhi.org.in/" target="_blank" rel="noopener noreferrer">
                Government Polytechnic, XYZ City
              </a>
            </p>
            <p><strong>Year:</strong> 2018 - 2021</p>
            <p><strong>Grade:</strong> 75%</p>
          </div>

          <div className="education-item">
            <h4>Secondary School Certificate (10th Standard)</h4>
            <p><strong>Institution:</strong> ABC High School</p> {/* Replace ABC High School with actual name */}
            <p><strong>Year:</strong> 2016</p>
            <p><strong>Grade:</strong> 82%</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-card">
          <h3>💼 Experience & Internships</h3>

          <div className="experience-item">
            <h4>React.js Intern</h4>
            <p><strong>Company:</strong> Infolabz Pvt. Ltd.</p>
            <p><strong>Role:</strong> Frontend Intern using React JS</p>
            <p><strong>Duration:</strong> 3 Months</p>
          </div>

          <div className="experience-item">
            <h4>Battery Manufacturing Engineer</h4>
            <p><strong>Industry:</strong> Lithium-ion Battery Manufacturing</p>
            <p><strong>Experience:</strong> 1 Year</p>
            <p><strong>Responsibilities:</strong> Assembly, testing, and quality control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
