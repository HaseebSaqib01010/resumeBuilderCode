import React from 'react';
import { forwardRef } from 'react';
import { useEffect } from 'react';


const Chicago = (({ perInfo, perSummary, perEducation, perExperience, perSkills, perLinks, perRefer, perExpert, perCourse, selectedImageURL, fileInputRef, handleImageChange }) => {
  
  return (
    <div >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px' }} >
          <div className="main" style={{ backgroundColor: 'black', color: 'lightgray', border: '2px solid white', width: '70%', padding: '20px' }}>
            <div style={{ border: '1px solid white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', fontSize: '18px' }}>
                <p style={{ paddingLeft: '60px', fontSize: '22px' }}>Driver</p>
                <div style={{ textAlign: 'right' }}>
                  <p>4200 W Latham Street, Phoenix, AZ 85009, United States</p>
                  <p>martabano.jeff@gmail.com</p>
                  <h3>(602) 319-1212</h3>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'left', marginLeft: '60px' }}>

              <div className="uploadSec" style={{border:'none'}}>
                {selectedImageURL ? (
                  <img src={selectedImageURL} alt="Selected" style={{ width: "150px", height: "150px", borderRadius:"100%" }} />
                ) : (
                  <i className="fa-solid fa-user" style={{ color: "#8ba9d0", fontSize: "60px", marginTop: "20px" }}></i>
                )}
              </div>
        
                <h1 style={{ fontSize: '68px' ,marginLeft:"20px"}}>JEFF <br /> MARTABANO</h1>
              </div>
              <hr width="100%" />
              <div className="profile" style={{ display: 'flex', padding: '20px', justifyContent: 'space-between' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '100', paddingLeft: '60px' }}>PROFILE</h2>
                <div style={{ width: '65%', marginRight: '20px' }}>
                  <h1 style={{ fontSize: '38px', width: '85%', fontWeight: '100' }}>
                    Experienced and reliable Driver with vast experience working in the transportation of goods and passengers.
                  </h1>
                  <p style={{ fontSize: '18px', lineHeight: '1.5', width: '85%' }}>
                    Adept in safe driving practices and traffic laws. Bringing forth a clean driving record as well as a career history full of satisfied customers and clients. Experienced in performing maintenance and minor repairs on vehicles. Committed to the safety and successful transportation of goods, passengers, and vehicles.
                  </p>
                  <h1 style={{ fontSize: '30px' }}>Skills</h1>
                  <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px', gap: '0px' }}>
                    <div style={{ width: '50%' }}>&#9900 Hand-Eye Coordination</div>
                    <div style={{ width: '50%' }}>&#9900 Ability to read maps</div>
                    <div style={{ width: '50%' }}>&#9900 Safe Driving Skills</div>
                    <div style={{ width: '50%' }}>&#9900 Manual Dexterity</div>
                    <div style={{ width: '50%' }}>&#9900 Customer Service</div>
                  </div>
                </div>
              </div>
              <hr width="100%" color="white" />
              <div className="employment" style={{ display: 'flex', padding: '20px' }}>
                <h2 style={{ fontWeight: '100', paddingLeft: '60px' }}>EMPLOYMENT<br /> HISTORY</h2>
                <div style={{ marginLeft: '80px' }}>
                  <h1 style={{ fontSize: '26px', width: '100%', fontWeight: '100', marginTop: '20px' }}>
                    Driver at Albert's Trucking Company, Phoenix
                  </h1>
                  <p style={{ position: 'relative', top: '-15px' }}>April 2013 - August 2019</p>
                  <ul style={{ fontSize: '20px', lineHeight: '1.5' }}>
                    <li>Performed vehicle inspections and maintenance prior to trips.</li>
                    <li>Read maps and identified the fastest routes.</li>
                    <li>Loaded and unloaded vehicles carefully.</li>
                    <li>Provided excellent customer service to clients resulting in repeat clients.</li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: 'right', padding: '20px' }}>1</p>
            </div>
          </div>
        </div>

    </div>
      )
    });
 
  export default Chicago;
