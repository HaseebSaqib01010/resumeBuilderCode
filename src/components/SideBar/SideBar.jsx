import React, { useState } from 'react';
import './SideBar.css'; 
import sampleImage from "../../assets/images/sample.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import Amsterdam from '../TemplatesContent/Amsterdam/Amsterdam';
import { useEffect } from 'react';
import { useContext } from 'react';
import ResumeDataContext from '../CvForm/ResumeContext';
import Chicago from '../TemplatesContent/Barcelona/Chicago';
import Rome from '../TemplatesContent/Rome/Rome';
import Rio from '../TemplatesContent/Rio/Rio';
import TemplatesList from '../TemplatesContent/templatesListing/TemplatesList';
const SideBar = ({ sidebarOpen, logo_nameRef, toggleSidebar,ChildInfo,personalInfo,showRenderTemp,hideRenderTemp}) => {
  // console.log("child-info",ChildInfo);
  const { info:perInfo} = useContext(ResumeDataContext);
  const { summary} = useContext(ResumeDataContext);
  const {education} = useContext(ResumeDataContext);
  const {experience} = useContext(ResumeDataContext);
  const {capturedSkills} = useContext(ResumeDataContext);
  const {webLink} = useContext(ResumeDataContext);
  const {reference} = useContext(ResumeDataContext);
  const {expertise} = useContext(ResumeDataContext);
  const {languages} = useContext(ResumeDataContext);
  const {activity} = useContext(ResumeDataContext);
  const {hobby} = useContext(ResumeDataContext);
  const {courses} = useContext(ResumeDataContext);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  
  const toggleContent = (content) => {
    if (content === 'templates') {
      setShowTemplates(!showTemplates);
    } else if (content === 'moreOptions') {
      setShowMoreOptions(!showMoreOptions);
    }
  };

  const { handleTemplateChange,selectedTemplates,componentRef, handlePrint} = useContext(ResumeDataContext);
  // console.log("selectedTemplates",selectedTemplates)
  // console.log("webLink",webLink)
  console.log("capturedSkills",capturedSkills)
  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'close'}`}>
      <div className="logo-details">
        <div className="logo_name" ref={logo_nameRef}>
          <p>Resume Settings</p>
        </div>
        <span
          className={`bx ${sidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`}
          id="close-resume"
          style={{ color: "#ffffff" }}
          onClick={()=>{
            toggleSidebar();
            hideRenderTemp();
            }
          }
        >
          {sidebarOpen && <CancelIcon className='cancelIcon' onClick={hideRenderTemp} />}
        </span>
      </div>

      <div className="ResumeSetting">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 style={{ paddingTop: "15px" }}>Templates</h5>
          <i
            className={`fa-solid ${showTemplates ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleContent('templates')}
          ></i>
        </div>
        {showTemplates && (
          <div className="template">
            <img src={sampleImage} alt="Classic Template" />
            <p>Classic</p>
            {/* <Link onClick={showRenderTemp}> */}
              <button onClick={showRenderTemp} className="btn">Change Template</button>
            {/* </Link> */}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 style={{ paddingTop: "15px" }}>More Options</h5>
          <i
            className={`fa-solid ${showMoreOptions ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleContent('moreOptions')}
          ></i>
        </div>

        {showMoreOptions && (
          <div className="options">
            <div className="inner-fill grid">
              <i className="fa-solid fa-eye"></i>
              <a href="">Preview Resume</a>
            </div>
            <div className="inner-fill grid">
              <i className="fa-solid fa-download"></i>
              <a href="">Download PDF</a>
            </div>
          </div>
        )}
      </div>
      <div className='templateSettings'>
      <>
      <TemplatesList
         perInfo={perInfo}
            summary={summary}
            education={education}
            experience={experience}
            perSkills={capturedSkills}
            webLink={webLink}
            reference={reference}
            expertise={expertise}
            languages={languages}
            courses={courses}
            activity={activity}
            hobby={hobby}
            componentRef={componentRef}
            selectedTemplates={selectedTemplates}
            // perSkills={skill}
            
      />
    {/* {selectedTemplates === "Amsterdam" && (
          <Amsterdam
            // ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={capturedSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
         
          />
        )}
        {selectedTemplates === "Chicago" && (
          <Chicago
            ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={capturedSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
            selectedImageURL={selectedImageURL}
            // fileInputRef={fileInputRef}
            // handleImageChange={handleImageChange}
/>
        )}
        {selectedTemplates === "Rome" && (
          <Rome
            ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={capturedSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
            // file={fileInputRef}
            selectedImageURL={selectedImageURL}
            // fileInputRef={fileInputRef}
            // handleImageChange={handleImageChange}
            
          />
        )}
        {selectedTemplates === "Rio" && (
          <Rio
            ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={capturedSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
            selectedImageURL={selectedImageURL}
            // fileInputRef={fileInputRef}
            // handleImageChange={handleImageChange}
          

          />
        )} */}
   </>

      </div>
    </div>
  );
};

export default SideBar;
