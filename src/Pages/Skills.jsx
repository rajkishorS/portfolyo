import React from 'react';
import './Skills.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaPython, FaJava
} from 'react-icons/fa';
import { MdPsychology } from 'react-icons/md'; 

import { SiMongodb, SiExpress, SiMysql,SiVuedotjs,SiOpenai, SiTensorflow } from 'react-icons/si';

const skills = [
    { name: 'Java', level: 'Advanced', icon: <FaJava />, cert: 'https://drive.google.com/file/d/1BMyuswWE4s2Uc-5mPJPDj-bxPkuxMQhw/view?usp=sharing' },
    { name: 'HTML', level: 'Advanced', icon: <FaHtml5 />,cert: ''  },
    { name: 'CSS', level: 'Advanced', icon: <FaCss3Alt />,cert: '' },
    { name: 'JavaScript', level: 'Advanced', icon: <FaJs />,cert: ''  },
    { name: 'React.js', level: 'Advanced', icon: <FaReact />,cert: 'https://drive.google.com/file/d/183lEOhHA1AnLiztjBLBuIrzy6XFXF2lI/view?usp=sharing'  },
    {name:'vue.js', level:'Intermediate', icon:<SiVuedotjs/>, cert:''},
    { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs />,cert: ''  },
    { name: 'Express.js', level: 'Intermediate', icon: <SiExpress />, cert: '' },
    { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb />, cert: '' },
    { name: 'SQL', level: 'Intermediate', icon: <SiMysql />, cert: '' },
    { name: 'Python', level: 'Basic', icon: <FaPython />, cert: '' },
    {name:'Ai&Ml', level:'Basic', icon:< MdPsychology/>, cert:'https://drive.google.com/file/d/13jkayirmmH6S9opGU8S6prkLTYMWnRQ8/view?usp=sharing'},
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
