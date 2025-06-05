import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <p>
          I'm  full-stack developer with a passion for turning ideas into impactful digital solutions. Rooted in a strong technical education and hands-on experience, I thrive at the intersection of design, development, and user experience. I enjoy crafting web applications that are not only functional but intuitive and engaging. My curiosity drives me to explore emerging technologies, embrace new challenges, and continuously refine my skills. Whether I'm building solo projects, collaborating in teams, or integrating advanced tools like AI APIs, I approach every line of code with purpose, precision, and creativity.
        </p>

        
      </div>

      <div className="about-extra">
        {/* Education Section */}
        <div className="about-card">
          <h3>🎓 Education</h3>

          <div className="education-item">
            <h4>Bachelor of Engineering (B.E.) in Electronic and Communication Engineering</h4>
            <p>
              <strong>Institution:</strong>{' '}
              <a href="https://www.gecg28.ac.in/" target="_blank" rel="noopener noreferrer">
                Government Engineering College, Gandhinagar
              </a>
            </p>
            <p><strong>Year:</strong> 2022 - 2025</p>
            <p><strong>Grade:</strong> 7.96 CGPA</p>
          </div>

          <div className="education-item">
            <h4>Diploma in Electronic and Communication Engineering</h4>
            <p>
              <strong>Institution:</strong>{' '}
              <a href="https://www.gpsitamarhi.org.in/" target="_blank" rel="noopener noreferrer">
                Government Polytechnic, Sitamarhi
              </a>
            </p>
            <p><strong>Year:</strong> 2018 - 2021</p>
            <p><strong>Grade:</strong> 8.53 CGPA</p>
          </div>

          <div className="education-item">
            <h4>Secondary School Certificate (10th Standard)</h4>
            <p><strong>Institution:</strong> +2 High School Nahas Khangritha</p> {/* Replace ABC High School with actual name */}
            <p><strong>Year:</strong> 2018</p>
            <p><strong>Grade:</strong> 72%</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-card">
          <h3>💼 Experience & Internships</h3>

          <div className="experience-item">
            <h4>React.js Intern</h4>
            <p><strong>Company:</strong> Infolabz Pvt. Ltd.</p>
            <p><strong>Role:</strong> Frontend Intern using React JS</p>
            <p><strong>Duration:</strong> 1 Months</p>
          </div>
          <div className="experience-item">
            <h4>Full Stack Software Developer Intern</h4>
            <p><strong>Industry:</strong> Devengels Software Pvt Ltd</p>
            <p><strong>Experience:</strong> 6 months</p>
          </div>
          <div className="experience-item">
            <h4>Backend Developer</h4>
            <p><strong>Industry:</strong> Yottol fintech</p>
            <p><strong>Experience:</strong>Currently working</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;