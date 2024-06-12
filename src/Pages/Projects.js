import React, { useState } from 'react';
import '../styles/Projects.css';
import Movie from '../Images/cinema.jpeg';
import Shoppy from '../Images/shoppyapp.jpeg';
import TourPlace from '../Images/travelling.jpeg';
import Food from '../Images/food.jpg';
import Hospital from '../Images/hospital.jpeg';
import Beauty from '../Images/beautyshape.jpg'

const projects = [
    {
        id: 1,
        title: 'MovieSearchApp',
        description: 'None',
        link: 'https://sravanitelugu-movie-app.netlify.app',
        src: Movie,
        
    },
    {
        id: 2,
        title: 'Shoppyzone',
        description: 'None',
        link: 'https://aishwarya-e-mart.netlify.app',
        src: Shoppy,
    },
    {
        id: 3,
        title: 'Tourism',
        description: 'None',
        link: 'https://sravanihampi-tourismproject.netlify.app',
        src: TourPlace,
    },
    {
        id: 4,
        title: 'FoodHub',
        description: 'None',
        link: 'https://github.com/Pujari-Raj/vanakkam-food.git',
        src: Food,
    },
    {
        id: 5,
        title: 'FoodHub',
        description: 'None',
        link: 'https://github.com/Pujari-Raj/vanakkam-food.git',
        src: Beauty,
    },
    {
        id: 6,
        title: 'FoodHub',
        description: 'None',
        link: 'https://github.com/Pujari-Raj/vanakkam-food.git',
        src: Hospital,
    },
];

const Projects = () => {
    
    
    return (
        <div className='projects-container pop-in'>
        <div className="projects">
            <h1 className='prohead'>My Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                     
                             <img src={project.src} alt={project.title} className="project-image" />
                             <div>
                             <button onClick={() => window.open(project.link, '_blank')} className='buttonpro'>Open</button>
                             </div>
                             </div>
                     ))}
            </div>
           
        </div>
        </div>
    );
};

export default Projects;
