import React from 'react';
import './Skills.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaPython, FaJava
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiFigma } from 'react-icons/si';

const skills = [
    { name: 'HTML', level: 'Advanced', icon: <FaHtml5 />, cert: 'https://drive.google.com/file/d/13jkayirmmH6S9opGU8S6prkLTYMWnRQ8/view?usp=sharing' },
    { name: 'CSS', level: 'Advanced', icon: <FaCss3Alt />, cert: 'https://example.com/css-cert' },
    { name: 'JavaScript', level: 'Advanced', icon: <FaJs />, cert: 'https://example.com/js-cert' },
    { name: 'React.js', level: 'Advanced', icon: <FaReact />, cert: 'https://example.com/react-cert' },
    { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs />, cert: 'https://example.com/node-cert' },
    { name: 'Express.js', level: 'Intermediate', icon: <SiExpress />, cert: '' },
    { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb />, cert: '' },
    { name: 'SQL', level: 'Intermediate', icon: <SiMysql />, cert: '' },
    { name: 'Java', level: 'Advanced', icon: <FaJava />, cert: '' },
    { name: 'Python', level: 'Basic', icon: <FaPython />, cert: '' },
    { name: 'Git & GitHub', level: 'Advanced', icon: <FaGitAlt />, cert: '' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h4>{skill.name}</h4>
                        <p>{skill.level}</p>
                        {skill.cert && (
                            <a
                                href={skill.cert}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                View Certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
