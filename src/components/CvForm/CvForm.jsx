import { useState } from "react";
import React from "react";
import "./CvForm.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSpring, animated } from "react-spring";
import PersonalInformation from "./PersonalInformation";
import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Courses from "./Courses";
import ComputerSkills from "./ComputerSkills";
import Languages from "./Languages";
import AreaOfExpertise from "./AreaOfExpertise";
import WebLinks from "./webLinks";
import Activities from "./Activities";
import Hobbies from "./Hobbies";
import References from "./References";
import ResumeDataContext from "./ResumeContext";
import { useContext } from "react";

function Form({ toggleSidebar, activeSection, handleSectionChange,perInfo }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [renderedComponents, setRenderedComponents] = useState([]);
  const {} = useContext(ResumeDataContext);


  const handleNextSection = () => {
    const sections = [
      "Personal Details",
      "Professional Summary",
      "Education",
      "Employment History",
      "Skills",
      "Web Link",
      "Internship",
      "Courses",
      "Languages",
      "References",
      "Activities",
      "Hobbies",
    ];

    const currentIndex = sections.indexOf(activeSection);

    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      handleSectionChange(nextSection);
    }
  };
  const handlePreview = () => {
    const sections = [
      "Personal Details",
      "Professional Summary",
      "Education",
      "Employment History",
      "Skills",
      "Web Link",
      "Internship",
      "Courses",
      "Languages",
      "References",
      "Activities",
      "Hobbies",
    ];

    const currentIndex = sections.indexOf(activeSection);

    if (currentIndex > 0) {
      const previousSection = sections[currentIndex - 1];
      handleSectionChange(previousSection);
    }
  };

  // console.log("perInfo",perInfo);
 
  // const [courses, setCourses] = useState([
  //   {
  //     courseCode: "courseCode",
  //     courseName: "courseName",
  //     grades: "grades",
  //     courseDuration: "courseDuration",
  //   },
  // ]);

 
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });
  const addComponent = (component) => {
    setRenderedComponents((prevComponents) => [...prevComponents, component]);
  };

  const removeComponent = (component) => {
    setRenderedComponents((prevComponents) =>
      prevComponents.filter((comp) => comp !== component)
    );
  };
  return (
    <animated.div style={formAnimation} className="field">
      <div className="topper">
        <h2>{activeSection} Section</h2>
        <span onClick={toggleSidebar}>
          <SettingsIcon
            className="settingIcon"
            style={{ color: "black", padding: "0px" }}
          />
        </span>
      </div>

      <animated.form style={formAnimation} onSubmit={handleSubmit}>
        {activeSection === "Personal Details" && (
          <PersonalInformation activeSection={activeSection} />
        )}
        {activeSection === "Professional Summary" && (
          <Summary activeSection={activeSection} 
           />
        )}
        {activeSection === "Employment History" && (
          <WorkExperience
            activeSection={activeSection}
           
          />
        )}
        {activeSection === "Education" && (
          <Education
            activeSection={activeSection}
          
          />
        )}
        {activeSection === "Courses" && (
          <Courses
            activeSection={activeSection}
          
          />
        )}
        {activeSection === "Skills" && (
          <ComputerSkills
            activeSection={activeSection}
       
          />
        )}
        {activeSection === "Languages" && (
          <Languages
            activeSection={activeSection}
           
          />
        )}
        {activeSection === "Internship" && (
          <AreaOfExpertise
            activeSection={activeSection}
            
          />
        )}
        {activeSection === "Web Link" && (
          <WebLinks
            activeSection={activeSection}
         
          />
        )}
        {activeSection === "References" && (
          <References
            activeSection={activeSection}
       
          />
        )}
        {activeSection === "Activities" && (
          <Activities
            activeSection={activeSection}
          
          />
        )}
        {activeSection === "Hobbies" && (
          <Hobbies activeSection={activeSection} />
        )}

   
        <div className="form-btn-sec">
          <button id="white-btn" onClick={handlePreview}>
            Previous Section
          </button>
          {activeSection !== "Web Link" && (
            <button id="btn" onClick={handleNextSection}>
              Next Section
            </button>
          )}
        </div>
      </animated.form>
      
  
    </animated.div>
  );
}

export default Form;

