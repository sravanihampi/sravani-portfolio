import React from 'react';
import '../styles/About.css';

function About() {
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
    <center>
      <div className='about-container'>
      <div id='about' className='about-head slide-in'>
        <h1 className='first'>About Me</h1> <br /> <br /> <br /> <br /> <br />
        <h2 className='second'>Hi, I'm Sravani Pillutla</h2> <br />
        <h3 className='third'>Frontend Developer</h3> <br />
        <p className='fourth'>
          I am a passionate frontend developer dedicated to crafting seamless and engaging user
          experiences. I have the ability to transform lines of code into visually stunning
          interfaces. I am particularly enthusiastic about exploring the intersections of
          design and functionality, striving to strike a perfect balance between aesthetics
          and usability. I bring a passion for creating captivating user interfaces using
          the latest web technologies. Proficient in HTML5, CSS3, and JavaScript, I specialize
          in transforming design concepts into seamless and interactive web experiences. My toolkit
          includes popular frontend libraries and frameworks, with a strong emphasis on React.js
          for building dynamic and responsive applications.
        </p> <br /> <br /> <br />
        <button className='btn' onClick={handleDownload}>Download Resume</button>
      </div>
      </div>
      
    </center>
  );
}

export default About;