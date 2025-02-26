import React from "react";
import PropTypes from "prop-types";

const Workinfo = ({ title,para1,para2,para3,para4,para5 }) => {
  return ( 
    <div className='workinfo-container'>
      {/* Why Cultural Preservation */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-center">WHY {title}</h2>
        <p className="mt-2 text-lg text-center">{para1}</p>
        <p className="mt-2 text-sm text-center">{para2}</p>
        
      </section>
      
      {/* What We Do */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-center">WHAT WE DO</h2>
        <p className="mt-2 text-lg text-center">{para3}</p>
        <p className="mt-2 text-lg text-center">{para4}</p>
        <p className="mt-2 text-lg text-center">{para5}</p>
      </section>

    </div>
  );
};

Workinfo.propTypes = {
  title: PropTypes.string.isRequired,
  para1:PropTypes.string.isRequired,
  para2:PropTypes.string,
  para3:PropTypes.string.isRequired,
  para4:PropTypes.string,
  para5:PropTypes.string
};

export default Workinfo;