import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        Have questions or need assistance? Reach out to us anytime.
      </p>
      <div className="contact-info">
        <div className="contact-details">
          <h3>Customer Support</h3>
          <p>Email: <a href="mailto:contact@loanreminderapp.com">contact@loanreminderapp.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
        </div>
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
