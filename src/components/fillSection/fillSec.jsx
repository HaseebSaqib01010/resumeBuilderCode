import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import "./fillSec.css";
function FillSection({activeSection,handleSectionChange}) {
  const fillSectionAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)', // Use transform for a different effect
    from: { opacity: 1, transform: 'translateX(-100%)' }, // Start from the left and fade in
    // config: config.molasses, // Customize animation speed
    config: { duration: 700 },
   
  });
  const [showMoreSections, setShowMoreSections] = useState(false);

  const toggleMoreSections = () => {
    setShowMoreSections(!showMoreSections);
  };

  const moreSectionsAnimation = useSpring({
    opacity: showMoreSections ? 1 : 0,
    maxHeight: showMoreSections ? '100%' : '0px',
    overflow: 'hidden',
    config: { duration: 200 },
  });
  return (
    <animated.div style={fillSectionAnimation} className="fill-sec">
      <h2>Fill Section</h2>
      <p style={{ color: 'gray' }}>Write Some Dummy Data to section with Example</p>
      <ul className="row nav nav-pills">
      <li className={`col-6 col-sm-3 grid ${activeSection === "Personal Details" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Personal Details")}>
            <i className="fas fa-user-tie"></i>Personal Details
          </button>
      </li>
      <li className={`col-6 col-sm-3 grid ${activeSection === "Professional Summary" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Professional Summary")}>
            <i className="fa-regular fa-newspaper"></i>Summary
          </button>
      </li>
      <li className={`col-6 col-sm-3 grid ${activeSection === "Education" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Education")}>
            <i className="fa-solid fa-book-open"></i>Education
          </button>
      </li>
      <li className={`col-6 col-sm-3 grid ${activeSection === "Employment History" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Employment History")}>
            <i className="fa-solid fa-briefcase"></i>Employment History
          </button>
      </li>
     
      
      <li className={`col-6 col-sm-3 grid ${activeSection === "Skills" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Skills")}>
            <i className="fa-solid fa-laptop"></i>Skills
          </button>
      </li>
      <li className={`col-6 col-sm-3 grid ${activeSection === "Web Link" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Web Link")}>
            <i className="fa-solid fa-globe"></i>Website Link
          </button>
      </li>
     
      </ul>
      <button className="section-btn" onClick={toggleMoreSections}>Add more Section</button>
      {showMoreSections && (
        <animated.div style={moreSectionsAnimation}>
      <div className='moreSections' >
      <ul className="row nav nav-pills">
      <li className={`grid ${activeSection === "Internship" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Internship")}>
            <i className="fa-solid fa-medal"></i>Internship
          </button>
      </li>
      <li className={`grid ${activeSection === "Courses" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Courses")}>
            <i className="fa-solid fa-graduation-cap"></i>Courses
          </button>
      </li>
      <li className={`grid ${activeSection === "Languages" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Languages")}>
          <i className="fa-solid fa-language"></i>Languages
          </button>
      </li>
      <li className={`grid ${activeSection === "References" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("References")}>
          <i className="fa-solid fa-bullhorn"></i>References
          </button>
      </li>
      <li className={`grid ${activeSection === "Activities" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Activities")}>
          <i className="fa-solid fa-person-walking-arrow-right"></i>Activities 
          </button>
      </li>
      <li className={`grid ${activeSection === "Hobbies" ? "active" : ""}`}>
          <button href="" data-toggle="tab" onClick={() => handleSectionChange("Hobbies")}>
          <i className="fa-regular fa-chess-rook"></i>Hobbies
          </button>
      </li>
    </ul>
    
    
    </div>
      </animated.div>
      )}
      </animated.div>
  );
}

export default FillSection;
