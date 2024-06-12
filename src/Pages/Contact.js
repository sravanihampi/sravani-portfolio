import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import Github from '../Images/github.png';
import Linkedin from '../Images/linkedin.png';
import Instagram from '../Images/instagram.jpeg';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    emailjs
      .sendForm('service_bhm80hq', 'template_opdiecf', form.current, 'u6g3vmI2TP08eV4D7')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1 className="contacthead">Contact</h1>
      <p className="para12">
        I am thrilled that you are interested in getting in touch. Whether you have a project in mind,
        a question to ask, or simply want to say hello, I would love to hear from you. Feel free to
        reach out through any of the following methods.
      </p>
      <div className="contactmain">
        <div className="contactdiv1">
          <h1 className="conheading">I'M ALSO ON SOCIAL NETWORKS</h1>
          <div className="logos">
            <div className="homediv">
              <FaHome /> <span className="info">Adress: Hyderabad, India</span>
            </div>
            <div className="phonediv">
              <FaPhone /> <span className="info">Let's Talk: +918688923282</span>
            </div>
            <div className="emaildiv">
              <FaEnvelope /><span className="info">E-Mail: sravanirao3282@gmail.com</span>
            </div>
            <div className="sociallinks">
              <a href="https://github.com/">
                <img src={Github} alt="" width="30px" height="30px" />
              </a>
              <a href="https://www.linkedin.com/jobs/view/3938771146/">
                <img src={Linkedin} alt="" width="50px" height="50px" />
              </a>
              <a href="https://www.instagram.com">
                <img src={Instagram} alt="" width="30px" height="30px" />
              </a>
            </div>
          </div>
        </div>
        <div className="contactdiv2">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="input1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Valid Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="input1">
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;