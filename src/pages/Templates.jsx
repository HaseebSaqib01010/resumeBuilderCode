import React, { useRef,useState } from "react";
import TemplateNavbar from "../components/Navbar/TemplateNavbar";
import "../assets/css/Template.css";
import TemplateMenu from "../components/TemplatesMenu/TemplateMenu";
import Amsterdam from "../components/TemplatesContent/Amsterdam/Amsterdam";
import Chicago from "../components/TemplatesContent/Barcelona/Chicago";
import Rome from "../components/TemplatesContent/Rome/Rome.jsx";
import Rio from "../components/TemplatesContent/Rio/Rio.jsx";
import { useContext } from 'react';
import ResumeDataContext from "../components/CvForm/ResumeContext";
import TemplatesList from "../components/TemplatesContent/templatesListing/TemplatesList";




function Templates({hideRenderTemp}) {
  const { info:perInfo} = useContext(ResumeDataContext);
  const { summary:summary} = useContext(ResumeDataContext);
  const { education} = useContext(ResumeDataContext);
  const { experience} = useContext(ResumeDataContext);
  const { capturedSkills} = useContext(ResumeDataContext);
  const { webLink} = useContext(ResumeDataContext);
  const { reference} = useContext(ResumeDataContext);
  const { expertise} = useContext(ResumeDataContext);
  const { courses} = useContext(ResumeDataContext);
  const { skill} = useContext(ResumeDataContext);
  const { activity} = useContext(ResumeDataContext);
  const { languages} = useContext(ResumeDataContext);
  console.log("master",languages)
 
 const { selectedImageURL } = useContext(ResumeDataContext);
 const { handleTemplateChange,selectedTemplates,componentRef, handlePrint} = useContext(ResumeDataContext);
  return (

    
    <div>
   
      <TemplateNavbar hideRenderTemp={hideRenderTemp} handlePrint={handlePrint}/>
      <div className="changeTemplate">
        <div className="templateWrapper" style={{width:"30%"}}>
          <TemplateMenu  handleTemplateChange={handleTemplateChange}/>
        </div>
        {/* <div className="templateContent">  */}
        <TemplatesList selectedTemplates={selectedTemplates} selectedImageURL={selectedImageURL} componentRef={componentRef}perInfo={perInfo} summary={summary} education={education} experience={experience}  webLink={webLink} reference={reference} expertise={expertise} courses={courses} perSkills={capturedSkills} languages={languages} activity={activity}/>
      {/* </div> */}
      </div>
     
    </div>
  );
}

export default Templates;
