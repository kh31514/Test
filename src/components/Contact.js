import React from 'react';
import "../styles/Contact.css"

const Contact = ({ president, presEmail }) => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For any further questions please reach out to president, {president}, at {presEmail}</p>
    </div>
  );
};

export default Contact;