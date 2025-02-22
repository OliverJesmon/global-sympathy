import React from "react";
import "./getinvolved.css"; // Import external CSS file

const GetInvolved = () => {
  return (
    <div className="get-involved-container">
      <div className="get-involved-box">
        <h2 className="get-involved-title">GET INVOLVED</h2>
        <div className="get-involved-main" >
        <p className="get-involved-text">
          Join us in our mission to create a better world. Here's how you can help:
          </p>
        <div className="get-involved-list">
          <p>-Donate: Your contributions can make a difference in the lives of the underprivileged.</p>
          <p>-Volunteer: Share your time and skills to support our initiatives.</p>
          <p>-Partner: Collaborate with us to amplify our impact.</p>
        </div>
        <p className="get-involved-text">
          Donations are tax-exempt under Section 80G of the Income Tax Act.
        </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;