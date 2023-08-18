import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code to handle form submission
  };

  return (
    <div className="contact-container">
      <h2 className="hade">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label>Message:</label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          rows="4"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>

      <div className="get-in-touch">
        <h3>Get In Touch</h3>
        <p>If you have any questions, give us a call:</p>
        <a href="tel:+1234567890" className="phone-link">
          <FaPhone className="phone-icon" />
          +1 (234) 567-890
        </a>
      </div>

    </div>
  );
};

export default Contact;
