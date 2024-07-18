import React from 'react'
import Amsterdam from '../Amsterdam/Amsterdam'
import Chicago from '../Barcelona/Chicago'
import Rome from '../Rome/Rome'
import Rio from '../Rio/Rio'
import { forwardRef } from 'react';

const TemplatesList = ({selectedTemplates,componentRef,perInfo,summary,education,selectedImageURL,
    experience,perSkills,webLink,reference,expertise,courses,languages,activity,hobby}) => {
  console.log("hun das",activity)
      return (
   <>
   <div className='templateContent' ref={componentRef}>
    {selectedTemplates === "Amsterdam" && (
          <Amsterdam
            // ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perHobbies={hobby}
            perEducation={education}
            perExperience={experience}
            perSkills={perSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
            perLanguage={languages}
            PerActivities={activity}
         
          />
        )}
        {selectedTemplates === "Chicago" && (
          <Chicago
            // ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={perSkills}
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
            // ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={perSkills}
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
            // ref={componentRef}
            perInfo={perInfo}
            perSummary={summary}
            perEducation={education}
            perExperience={experience}
            perSkills={perSkills}
            perLinks={webLink}
            perRefer={reference}
            perExpert={expertise}
            perCourse={courses}
            selectedImageURL={selectedImageURL}
            // fileInputRef={fileInputRef}
            // handleImageChange={handleImageChange}
          

          />
        )}

   </div>
   </>
  )
}

export default TemplatesList
