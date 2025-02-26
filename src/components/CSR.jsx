import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSR.css";

function CSR({ title }) {
  const navigate = useNavigate();
  return (
    <div className="corporate-support-container">
        <div className="corporate-support-wrapper">
            <button
              className="corporate-donation-btn corporate-donation-btn-lg"
              onClick={() => navigate("/support")}
            >
              {title}
            </button>
          <div className="corporate-info-container">
            <p className="corporate-info-heading">FOR CSR SUPPORT</p>
            <p className="corporate-info-subheading">Write To</p>
            <p className="corporate-info-contact">
              Rons Bantwal A gsfindia25@gmail.com
            </p>
          </div>
        </div>
    </div>
  );
}

export default CSR;
