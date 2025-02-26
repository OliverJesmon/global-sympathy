
import './Contact.css';

const Contact = () => {
  

  const Token=import.meta.env.VITE_FORMSPREE_TOKEN;

  const Submit=() =>
  {
    alert("We'll get back to you soon");
    window.location.reload();
  }

  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="address-section">
            <h3 className="address-title">Address:</h3>
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

          <form  className="contact-form" action={`https://formspree.io/f/${Token}`} method='POST'>
            <div className="form-field">
            
              <label>Name *</label>
              <input
                type="text"
                name="Name: "
                
                placeholder="Name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="Phone: "
                  
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="form-field">
                <label>Email *</label>
                <input
                  type="email"
                  name="Email: "
                  
                  placeholder="Email" 
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="Message: "
                
                placeholder="Message"
                rows="4"
              />
            </div>

            <button type="submit" className="submit-button" onClick={Submit}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;