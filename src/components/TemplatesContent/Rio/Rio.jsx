import React from 'react';

const Rio = ({file}) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div
      className="main"
      style={{
        textAlign: 'left',
        width: '70%',
        border: '0px solid black',  
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${require('../../TemplatesContent/ResumeImages/rio.png')}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        padding: '20px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          top: '250px',
          right: '28px',
          paddingBottom: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '70px',
            fontWeight: 'normal',
            color: 'rgb(106, 36, 36)',
            paddingTop: '20px',
          }}
        >
          Pat Mash
        </h1>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(242, 113, 113)',
          }}
        >
          RECEPTIONIST
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div
          style={{
            display: 'flex',
            gap: '90px',
            fontSize: '18px',
            fontWeight: '900',
            alignItems: 'center',
            position: 'relative',
            top: '120px',
            paddingBottom: '50px',
            left: '45px',
            width:"100%",
            marginTop: '100px',
          }}
        >
          <p style={{ width:"25%", color: 'rgb(106, 36, 36)' }}>
            +92 202 6586126
          </p>
          <p style={{ marginRight: '65px',textAlign:'center', color: 'rgb(106, 36, 36)' }}>
            3620 Ettlehorn Street, San Francisco, CA 94160, United States
          </p>
          <p style={{ marginRight: '60px', color: 'rgb(106, 36, 36)' }}>
            hw12@gmail.com
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', padding: '50px' }}>
        <div style={{ width: '20%' }}>
          <div>
            <h1
              style={{
                fontSize: '44px',
                fontWeight: '100',
                color: 'rgb(242, 113, 113)',
              }}
            >
              <span> SKILLS </span>
            </h1>
            <div
              className="skills"
              style={{
                margin: '0px',
                padding: '0px',
              }}
            >
              <h2
                style={{
                  color: 'black',
                  margin: '2px',
                  marginBottom: '10px',
                  marginTop: '20px',
                  fontSize: '20px',
                  width:'270px'
                }}
              >
                Excellent Communication Skills
              </h2>

              <div
                className="levels"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <hr
                  style={{
                    borderRadius: '6px',
                    padding: '4px',
                  }}
                  color="brown"
                  width="100%"
                />
              </div>
              <h2
                style={{
                  color: 'black',
                  margin: '2px',
                  marginBottom: '10px',
                  marginTop: '20px',
                  fontSize: '20px',
                  width:'270px'
                }}
              >
                Excellent Communication Skills
              </h2>
              
              <div
                className="levels"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <hr
                  style={{
                    borderRadius: '6px',
                    padding: '4px',
                  }}
                  color="brown"
                  width="100%"
                />
              </div>
              

            </div>
            {/* Add more skills here */}
          </div>
        </div>
  

        <div style={{ width: '80%', marginLeft: '100px' }}>
          <h1
            style={{
              fontSize: '44px',
              fontWeight: '100',
              color: 'rgb(242, 113, 113)',
            }}
          >
            <span> PROFILE </span>
          </h1>
          <p
            style={{
              fontSize: '16px',
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgb(106, 36, 36)',
            }}
          >
            Hardworking and experienced Receptionist with several years of
            experience serving as a supportive and integral employee in high
            volume client settings. Experienced in creating schedules, making
            appointments, selling products, and providing clients with optimal
            customer service. Bringing forth the ability to manage front desk
            settings with poise and grace, in addition to managing a variety of
            administrative duties. Eager to join a new team of people and assist
            them as a dedicated and passionate Receptionist.
          </p>

          <h1
            style={{
              fontSize: '44px',
              fontWeight: '100',
              color: 'rgb(242, 113, 113)',
            }}
          >
            <span> EMPLOYMENT HISTORY </span>
          </h1>
          <h2
            style={{
              fontSize: '16px',
            }}
          >
            Receptionist, Little Star Day Spa, Los Angeles
          </h2>
          <h3
            style={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            November 2014 - August 2019
          </h3>
          <ul
            style={{
              fontSize: '14px',
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgb(106, 36, 36)',
            }}
          >
            <li>Greeted clients and provided them with information and superior service. </li>
            <li>Handled calls, collected personal information, and managed schedules.</li>
            <li>Managed the office database, mail, payroll distribution, and the physical setting of the front office.</li>
          </ul>
          <h2
            style={{
              fontSize: '16px',
            }}
          >
            Receptionist, Massionate Hotel, Los Angeles
          </h2>
          <h3
            style={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            June 2003 - October 2014
          </h3>
          <ul
            style={{
              fontSize: '14px',
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgb(106, 36, 36)',
            }}
          >
            <li>Answered phone calls, greeted clients, and handled all front desk responsibilities.</li>
            <li>Decorated the front reception area, contributing to the welcoming and peaceful environment of the spa.</li>
            <li>Provided clients and prospective clients with information regarding services, spa technology, and products offered.</li>
          </ul>

          <h1
            style={{
              fontSize: '44px',
              fontWeight: '100',
              color: 'rgb(242, 113, 113)',
            }}
          >
            <span> EDUCATION </span>
          </h1>
        </div>
    </div>
    </div>
    </div>
)
export default Rio;
       