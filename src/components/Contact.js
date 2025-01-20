import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Contact US</h1>
        <p>Have questions? we'd love to hear from you!</p>
        <div className="contact-info">
          <div className="contact-details">
            <h2>Customer Support</h2>
            <p>Email: support@clothingkart.com</p>
            <p>Phone: +1 5700 5700</p>
            <p>Address: 425 Street, Bangalore </p>
          </div>
          <div className="contact-form">
            <h2> Send us Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input type="message" id="message" name="message" required />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
