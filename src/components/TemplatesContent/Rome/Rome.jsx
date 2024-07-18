import React from 'react';
import "./Rome.css"

const Rome = ({ perInfo, perSummary, perEducation, perExperience, perSkills, perLinks, perRefer, perExpert, perCourse, selectedImageURL, fileInputRef, handleImageChange }) => {
  // console.log(perLinks)
  function getRandomWidth() {
    // You can customize the range of random values
    return Math.floor(Math.random() * (200 - 100) + 100) + 'px';
  }

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rome</title>

      </head>

      <body style={{ fontFamily: "myFirstFont" }}>
        <div className="main" style={{ display: "flex" }}>
          <div className="head">
            <div className='resumeContainer' style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 className='topHead'>
                {perInfo?.firstName} <br />{perInfo?.lastName}
              </h1>
              <div className="imageResume">
                {selectedImageURL ? (
                  <img src={selectedImageURL} alt="Selected" className='romeImg' />
                ) : (
                  <i className="fa-solid fa-user"></i>
                )}
              </div>
            </div>
            <div>
              <p className='titleWrapper'>{perInfo?.jobTitle}</p>

              <div className='infoWrapper'>
                <div className='addressWrapper'>
                  <p>
                    {perInfo?.city}
                  </p>
                  <p>
                    {perInfo?.country}
                  </p>
                </div>
                <div className='contactWrapper'>
                  <p>{perInfo?.number}</p>
                  <p>{perInfo?.email}</p>
                </div>

              </div>
            </div>
            <div className="profileSection">
              <div>
                <h1 className="profileTitle">&#9312; PROFILE</h1>
                <p className="profileText">
                  {perSummary}
                </p>
              </div>
            </div>
            <div className="skills-section">
              <div>
                <h1 className="skills-title">&#9313; SKILLS</h1>
                <div className="skills-list">
                  {/* <ul className="skills-list-item">
                    <li>
                      Knowledge of Warehouse Operations
                      <span className="skills-item-text">&#9675;&#9675;&#9675;&#9675;&#9675;</span>
                    </li>
                    <li>
                      Organizational Skills
                      <span className="skills-item-text">&#9675;&#9675;&#9675;&#9675;&#9675;</span>
                    </li>
                    <li>
                      Safety and Compliance Standards
                      <span className="skills-item-text">&#9675;&#9675;&#9675;&#9675;&#9675;</span>
                    </li>
                    <li>
                      Manufacturing Equipment Expertise
                      <span className="skills-item-text">&#9675;&#9675;&#9675;&#9675;&#9675;</span>
                    </li>
                    <li>
                      Motivated Attitude
                      <span className="skills-item-text">&#9675;&#9675;&#9675;&#9675;&#9675;</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="languages-section">
                <h1 className="languages-title">&#9314; LANGUAGES</h1>
                {/* <ul className="languages-list">
                  <li className="languages-list-item">
                    <span className="language-name">Spanish</span>
                    <span className="language-rating">&#9675;&#9675;</span>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className='employment'>
              <h1>&#9315; EMPLOYMENT HISTORY</h1>
              {perExperience.map(experience => {
                return (
                  <div key={experience?.id}>
                    <p className='empTitle'>
                      {experience?.jobTitle},{experience?.employer}
                    </p>
                    <p style={{ fontSize: '14px' }}>{experience?.role}</p>
                    <p style={{ fontSize: '14px' }}>Oct 2010-Sep 2019</p>
                    <ul style={{ textAlign: 'left', lineHeight: '1.5' }}>
                      <p>{experience?.desc}</p>
                    </ul>
                  </div>
                )
              })}


            </div>
            <div style={{ width: '100%' }}>
              <h1 style={{ fontSize: '44px', fontWeight: '100' }}>&#9315; EMPLOYMENT HISTORY</h1>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};
export default Rome;
