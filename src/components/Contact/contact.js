import React from 'react';
import './contact.css';
import link from '../../assets/linkedin.png';

import gmail from '../../assets/email.png';

const Contact = () => {
  return (
    <section id="contactPage">
      <div className="contact">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/pranjal-sharma-085521212

" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="LinkedIn" />
            <h4>LinkedIn</h4>
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:youremail@example.com">
            <img src={gmail} alt="Email" />
            <h4>Email</h4>
          </a>
          <p><a href="mailto:youremail@example.com">spranjal0515@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
