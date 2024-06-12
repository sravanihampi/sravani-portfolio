import React from 'react';
import '../styles/Home.css';
import pic2 from '../Images/profile.png';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}https://drive.google.com/file/d/1-HtUAwUsaH5OcZUYlarnG39a0NgUTg1R/view?usp=sharing`;
    link.download = 'Sravani_Pillutla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open('https://drive.google.com/file/d/1-HtUAwUsaH5OcZUYlarnG39a0NgUTg1R/view?usp=sharing', '_blank');
  };

  return (
    
    <div className='herosection fade-in'>
      <div className='left'>
        <div className='para'>
          <p>REACT JS</p>
        </div>
        <div className='herosectionh1'>
          <h1>I'm <span>Sravani</span></h1>
        </div>
        <div className='stack'>
          <h1>Frontend Developer</h1>
        </div>
        <div className='para2'>
          <p>
            I am a React.js developer with 4+ years of experience in building websites and designing software. 
            I specialize in developing web applications using modern technologies such as React, Tailwind, JavaScript, TypeScript, and Next.js.
          </p>
        </div>
        <div>
          <button className='btn' onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
      <div className='right'>
        <img src={pic2} alt='Sravani Pillutla' className='homeimg' />
      </div>
    </div>
  );
};

export default Home;
