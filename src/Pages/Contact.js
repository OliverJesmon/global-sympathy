import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="address-section">
            <h3>Address:</h3>
            <p>
              Global Sympathy Foundation ®<br />
              Love View, 103-Pauline Zabeth House,<br />
              Velankani Road, Opp. Cigarette Factory,<br />
              Chakala, Andheri East, Mumbai,<br />
              Maharashtra, India - 400099.
            </p>
          </div>

          <div className="contact-details">
            <h3>Contact Us:</h3>
            <p>E-mail: gsfindia25@gmail.com</p>
            <p>Phone: +91-8828238818</p>
          </div>
        </div>

        <div className="helpdesk-section">
          <h2 className="helpdesk-title">HELPDESK</h2>
          <p className="helpdesk-subtitle">
            For any grievance, suggestions and queries kindly write to us
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;