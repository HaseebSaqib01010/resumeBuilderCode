import React from 'react'
import "./Amsterdam.css"
import { useEffect } from 'react';

const Amsterdam = (({ perInfo, perSummary, perEducation, perExperience, perSkills, perLinks, perRefer, perExpert, perCourse,perLanguage, PerActivities,perHobbies}) => {
console.log("hobbies >>",perHobbies)
  
  return (
    <div className="containerStyle amsterdam-container">
      <div className="outlineStyle">
        <div className="mainContentStyle">
          <div className="leftContentStyle">

            <h2 className="titleStyle" style={{ fontWeight: "500" }}>DETAILS</h2>
            <hr className="hrStyle" style={{
              padding: "1px",
              backgroundColor: "brown",
              width: "100%"
            }} />
            <h3 className="titleStyle" style={{ fontWeight: "100", fontSize: "20px" }}>Address</h3>
            <p className="paragraphStyle" style={{ fontSize: "18px" }}>{perInfo?.city}, {perInfo?.country}</p>
            {/* Add the rest of the content here */}
            <h3 className="titleStyle" >Phone</h3>
            <p className="paragraphStyle" style={{ fontSize: "18px" }}>{perInfo?.number}</p>
            <h3 className="titleStyle">Email</h3>
            <p className="paragraphStyle" style={{ fontSize: "18px" }}>{perInfo?.email}</p>

            {/* weblink section */}

            <h2 className="titleStyle" style={{ fontWeight: "500" }}>Portfolio Link</h2>

            <hr className="hrStyle" style={{
              padding: "1px",
              backgroundColor: "brown",
              width: "100%"
            }}
            />
            {perLinks && (
              <div style={{ margin: '0px', padding: '0px' }}>
                {/* <h3 className="titleStyle" style={{fontWeight:"100" , fontSize:"20px"}}>LABEL</h3> */}
                {perLinks?.map((links, index) => (
                  <div key={index}>

                    <h4 className="paragraphStyle" style={{ fontSize: "18px" }}>{links?.label} :</h4>
                    <p style={{ color: "blue" }}>{links?.link}</p>

                  </div>
                ))}
              </div>
            )}

            <h2 className="titleStyle" style={{ fontWeight: "500" }}>SKILLS</h2>
            <hr className="hrStyle" style={{
              padding: "1px",
              backgroundColor: "brown",
              width: "100%"
            }} />
         {perSkills && (
  <div style={{ margin: '0px', padding: '0px' }}>
    {perSkills?.map((skill, index) => (
      <div key={index} style={{ display: 'flex' , flexDirection:"column"}}>
        <p
          style={{
            color: 'black',
            margin: '2px',
            marginBottom: '0px',
            marginTop: '0px',
            paddingTop: '0px',
            fontSize: '14px',
            width: '100%',
          }}
        >
          {skill?.name}
        </p>
       <div style={{display:"flex",backgroundColor:"white",marginBottom:"10px",  borderRadius: '10px'}}>
        <span
          style={{
            borderRadius: '40px',
            backgroundColor: 'brown',
            padding: '10px',
            height: '10%',
            width:
              skill?.expertLevel === 'Beginner'
                ? '30%'
                : skill?.expertLevel === 'Intermediate'
                ? '60%'
                : skill?.expertLevel === 'Expert'
                ? '85%'
                : 'auto', // default width when expertLevel is not one of the specified values
          }}
        />
        </div>
      </div>
    ))}
    
  </div>
)}
{/* language section */}
<h2 className="titleStyle" style={{ fontWeight: "500" }}>LANGUAGES</h2>
            <hr className="hrStyle" style={{
              padding: "1px",
              backgroundColor: "brown",
              width: "100%"
            }} />
         {perLanguage && (
  <div style={{ margin: '0px', padding: '0px' }}>
    {perLanguage?.map((language, index) => (
      <div key={index} style={{ display: 'flex' , flexDirection:"column"}}>
        <p
          style={{
            color: 'black',
            margin: '2px',
            marginBottom: '0px',
            marginTop: '0px',
            paddingTop: '0px',
            fontSize: '14px',
            width: '100%',
          }}
        >
          {language?.Language}
        </p>
        
       <div style={{display:"flex",backgroundColor:"white",marginBottom:"10px",  borderRadius: '10px'}}>
        
        <span
          style={{
            borderRadius: '40px',
            backgroundColor: 'brown',
            padding: '10px',
            height: '10%',
            width:
              language?.expertLevel === 'Native Speaker'
                ? '30%'
                : language?.expertLevel === 'Highly Proficient'
                ? '60%'
                : language?.expertLevel === 'Very good command'
                ? '85%'
                : 'auto', // default width when expertLevel is not one of the specified values
          }}
        />
        </div>
      </div>
    ))}
    
  </div>
)}
            {/* reference section */}
            <h2 className="titleStyle" style={{ fontWeight: "500" }}>REFERENCE</h2>
            <hr className="hrStyle" style={{
              padding: "1px",
              backgroundColor: "brown",
              width: "100%"
            }} />
            {perRefer && (
              <div style={{ margin: '0px', padding: '0px' }}>
                {perRefer?.map((reference, index) => (
                  <div key={index}>
                    <h3 className="titleStyle" style={{ fontWeight: "100", fontSize: "20px" }}>NAME</h3>
                    <p className="paragraphStyle" style={{ fontSize: "18px" }}>{reference?.name}</p>
                    <h3 className="titleStyle" style={{ fontWeight: "100", fontSize: "20px" }}>COMPANY</h3>
                    <p className="paragraphStyle" style={{ fontSize: "18px" }}>{reference?.company} </p>
                    <h3 className="titleStyle" >Phone</h3>
                    <p className="paragraphStyle" style={{ fontSize: "18px" }}>{reference?.contact}</p>
                    <h3 className="titleStyle">Email</h3>
                    <p className="paragraphStyle" style={{ fontSize: "18px" }}>{reference?.email}</p>
                  </div>
                ))}
              </div>
            )}


          </div>
          <div className="rightContentStyle">
            <div className="profileContainerStyle">
              <h1 className="profileTitleStyle">{perInfo?.firstName} {perInfo?.lastName
              }</h1>
              <h3 className="profileSubtitleStyle">{perInfo?.jobTitle}</h3>
            </div>




            <div className='central-content'>


              <h3 style={{ paddingTop: '60px', margin: '0px', marginLeft: '0px' }}>PROFILE</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              <p className='paragraphStyle' style={{ fontSize: "18px" }}>
                {perSummary}
              </p>





              <h3>EMPLOYMENT HISTORY</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              {perExperience?.map(experience => {
                return (
                  <div key={experience?.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h6>{experience?.jobTitle},{experience?.employer}</h6>
                      <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold', marginTop: "-12px" }}>{experience?.city}</p>
                    </div>
                    <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>
                      {experience?.role}
                    </h3>
                    <ul style={{ fontSize: '18px', textAlign: 'justify', lineHeight: '1.5', position: 'relative', top: '-20px', paddingLeft: "0rem" }}>
                      {/* <li>Greeted clients and provided them with information and superior service.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li> */}
                      <p>{experience?.desc}</p>  <p>{experience?.desc}</p>
                    </ul>
                  </div>
                )
              })}

              <h3>EDUCATION</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              {perEducation?.map(education => {
                return (
                  <div key={education?.id} >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h6>{education?.degree} {education?.major}, {education?.school}</h6>
                      <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold', marginTop: "-12px" }}>{education?.city}</p>
                    </div>
                    <div>
                      <p>{education?.desc}</p>
                    </div>

                  </div>


                )
              })}
              <h3>INTERNSHIP</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              {perExpert?.map(expertise => {
                return (
                  <div key={expertise?.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h6>{expertise?.jobTitle},{expertise?.employer}</h6>
                      <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold', marginTop: "-12px" }}>{expertise?.city}</p>
                    </div>
                    <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>
                      {expertise?.role}
                    </h3>
                    <ul style={{ fontSize: '18px', textAlign: 'justify', lineHeight: '1.5', position: 'relative', top: '-20px', paddingLeft: "0rem" }}>
                      {/* <li>Greeted clients and provided them with information and superior service.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li> */}
                      <p>{expertise?.desc}</p>
                    </ul>
                  </div>
                )
              })}
              <h3>ACTIVITIES</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              {PerActivities?.map(activity => {
                return (
                  <div key={activity?.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h6>{activity?.title},{activity?.employer}</h6>
                      <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold', marginTop: "-12px" }}>{activity?.city}</p>
                    </div>
                    <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>
                      {activity?.role}
                    </h3>
                    <ul style={{ fontSize: '18px', textAlign: 'justify', lineHeight: '1.5', position: 'relative', top: '-20px', paddingLeft: "0rem" }}>
                      {/* <li>Greeted clients and provided them with information and superior service.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
                <li>Handled calls, collected personal information, and managed schedules.</li>
                <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li> */}
                      <p>{activity?.desc}</p>
                    </ul>
                  </div>
                )
              })}
              <h3 style={{ paddingTop: '60px', margin: '0px', marginLeft: '0px' }}>HOBBIES</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              <p className='paragraphStyle' style={{ fontSize: "18px" }}>
                {perHobbies}
              </p>

              <h3>COURSES</h3>
              <hr style={{ padding: '1px', backgroundColor: 'black' }} />
              {perCourse?.map(course => {
                return (
                  <div key={course?.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h6>{course?.code},{course?.name}</h6>
                      <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold', marginTop: "-12px" }}>{course?.grades}</p>
                    </div>
                    <h3 style={{ fontSize: '18px', color: 'gray', position: 'relative', top: '-20px' }}>
                      {course?.duration}
                    </h3>

                  </div>
                )
              })}


            </div>

          </div>

        </div>
      </div>
    </div>


  );
});
export default Amsterdam;
