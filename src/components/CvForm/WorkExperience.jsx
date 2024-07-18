
import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import { useContext } from 'react';
import ResumeDataContext from './ResumeContext';
const WorkExperience = ({ activeSection }) => {

  const { handleAddExperience, handleDeleteExperience, experience, handleChangeExperience } = useContext(ResumeDataContext);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };
  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 1, transform: 'translateX(100%)' },
    config: { duration: 1250 },
  });
  const addWorkExperience = () => {
    let experience = {
      id: uuid(),
      jobTitle: "",
      employer: "",
      role: "",
      city: "",
      desc: "",
      currentStatus: false,
    };
    handleAddExperience(experience);
  };

  return (
    <animated.div style={formAnimation}>
      <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div>  <p>Show your relevant experience (last 10 years). Use bullet points to note your achievements.if possible - use numbers/facts (Achieved X. measured by Y,by doing Z )</p>   </div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addWorkExperience()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>

      {experience?.map((singleExperience,index) => {
        return (
          <div key={index}>
            <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />

            <div key={singleExperience.id} style={{ border: "solid lightgrey 1px", padding: "20px", marginBottom: "25px", marginTop: "20px" }}>
              <div className="division">
                <div style={{ display: "flex", width: "100%" }}>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Job Title
                    </label>
                    <input type="text" className="12" placeholder="e.g. SQA" name="jobTitle" 
                      defaultValue={singleExperience?.jobTitle}
                      onChange={(e) => handleChangeExperience(e, singleExperience?.id)}/>
                  </div>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Employer
                    </label>
                    <input
                      type="text"
                      className="12"
                      placeholder="e.g WorkForceCommerce"
                      name='employer'
                      defaultValue={singleExperience?.employer}
                      onChange={(e) => handleChangeExperience(e, singleExperience?.id)}
                    />
                  </div>
                  <button style={{ fontSize: "20px", backgroundColor: "white", border: "none", position: "relative", top: "-10px", right: "5px", height: "0px" }} onClick={() => handleDeleteExperience(singleExperience.id)}>
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      style={{ color: "#502ACC" }}
                    ></i>
                  </button>
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    Role
                  </label>
                  <input type="text" className="12" placeholder="e.g. automation" name ='role' 
                     defaultValue={singleExperience?.role}
                      onChange={(e) => handleChangeExperience(e, singleExperience?.id)}
                  />
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    City
                  </label>
                  <input type="text" className="12" placeholder="e.g. Ohio" name='city'
                   defaultValue={singleExperience?.city}
                      onChange={(e) => handleChangeExperience(e, singleExperience?.id)} />
                </div>
              </div>
              <div style={{ display: "flex", marginLeft: "22px" }}>
                <div className="time-label">
                  <label htmlFor="">Start Date</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* <input type="checkbox" name="" id="" style={{ width: "20px", position:"relative", right:"-10px",top:"-10px"}} />
          <label
            htmlFor=""
            style={{ width: "170px", padding: "1px", fontSize: "16px" }}
          >
            Currently Study Here
          </label> */}
                  </div>
                </div>
                <div className="time-label">
                  <label htmlFor="">End Date</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <input type="checkbox" name="" id="" style={{ width: "20px", position: "relative", right: "-10px", top: "-10px" }} />
                    <label
                      htmlFor=""
                      style={{ width: "170px", padding: "5px", fontSize: "16px", width: "200px" }}
                    >
                      Currently Working Here
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="time-periods">
                  <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none" onChange={() => handleMonthSelect()}  >
                    <Dropdown.ItemText>Select Month</Dropdown.ItemText>
                    <Dropdown.Item as="button">January</Dropdown.Item>
                    <Dropdown.Item as="button">February </Dropdown.Item>
                    <Dropdown.Item as="button">March</Dropdown.Item>
                    <Dropdown.Item as="button">April</Dropdown.Item>
                    <Dropdown.Item as="button">May</Dropdown.Item>
                    <Dropdown.Item as="button">June</Dropdown.Item>
                    <Dropdown.Item as="button">July</Dropdown.Item>
                    <Dropdown.Item as="button">August</Dropdown.Item>
                    <Dropdown.Item as="button">September</Dropdown.Item>
                    <Dropdown.Item as="button">October</Dropdown.Item>
                    <Dropdown.Item as="button">November</Dropdown.Item>
                    <Dropdown.Item as="button">December</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton id="dropdown-item-button" title={selectedYear || "Year"} className="timeDropdown" variant="none" onChange={() => handleYearSelect("2010")}>
                    <Dropdown.ItemText>Select Year</Dropdown.ItemText>
                    <Dropdown.Item as="button">2010</Dropdown.Item>
                    <Dropdown.Item as="button">2011</Dropdown.Item>
                    <Dropdown.Item as="button">2012</Dropdown.Item>
                    <Dropdown.Item as="button">2013</Dropdown.Item>
                    <Dropdown.Item as="button">2014</Dropdown.Item>
                    <Dropdown.Item as="button">2015</Dropdown.Item>
                    <Dropdown.Item as="button">2016</Dropdown.Item>
                    <Dropdown.Item as="button">2017</Dropdown.Item>
                    <Dropdown.Item as="button">2018</Dropdown.Item>
                    <Dropdown.Item as="button">2019</Dropdown.Item>
                    <Dropdown.Item as="button">2020</Dropdown.Item>
                    <Dropdown.Item as="button">2021</Dropdown.Item>
                    <Dropdown.Item as="button">2022</Dropdown.Item>
                    <Dropdown.Item as="button">2023</Dropdown.Item>
                  </DropdownButton>


                </div>

                <div className="time-periods">
                  <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none" onChange={() => handleMonthSelect()}  >
                    <Dropdown.ItemText>Select Month</Dropdown.ItemText>
                    <Dropdown.Item as="button">January</Dropdown.Item>
                    <Dropdown.Item as="button">February </Dropdown.Item>
                    <Dropdown.Item as="button">March</Dropdown.Item>
                    <Dropdown.Item as="button">April</Dropdown.Item>
                    <Dropdown.Item as="button">May</Dropdown.Item>
                    <Dropdown.Item as="button">June</Dropdown.Item>
                    <Dropdown.Item as="button">July</Dropdown.Item>
                    <Dropdown.Item as="button">August</Dropdown.Item>
                    <Dropdown.Item as="button">September</Dropdown.Item>
                    <Dropdown.Item as="button">October</Dropdown.Item>
                    <Dropdown.Item as="button">November</Dropdown.Item>
                    <Dropdown.Item as="button">December</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton id="dropdown-item-button" title={selectedYear || "Year"} className="timeDropdown" variant="none" onChange={() => handleYearSelect("2010")}>
                    <Dropdown.ItemText>Select Year</Dropdown.ItemText>
                    <Dropdown.Item as="button">2010</Dropdown.Item>
                    <Dropdown.Item as="button">2011</Dropdown.Item>
                    <Dropdown.Item as="button">2012</Dropdown.Item>
                    <Dropdown.Item as="button">2013</Dropdown.Item>
                    <Dropdown.Item as="button">2014</Dropdown.Item>
                    <Dropdown.Item as="button">2015</Dropdown.Item>
                    <Dropdown.Item as="button">2016</Dropdown.Item>
                    <Dropdown.Item as="button">2017</Dropdown.Item>
                    <Dropdown.Item as="button">2018</Dropdown.Item>
                    <Dropdown.Item as="button">2019</Dropdown.Item>
                    <Dropdown.Item as="button">2020</Dropdown.Item>
                    <Dropdown.Item as="button">2021</Dropdown.Item>
                    <Dropdown.Item as="button">2022</Dropdown.Item>
                    <Dropdown.Item as="button">2023</Dropdown.Item>
                  </DropdownButton>


                </div>
              </div>
              <div>
                <h2 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "20px" }}>Description</h2>
                <div className="input-head">
                  <ul>
                    <li>
                      <button href="">
                        <i
                          className="fa-solid fa-bold"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </li>
                    <li>
                      <button href="">
                        <i className="fas fa-italic" style={{ color: "white" }}></i>
                      </button>
                    </li>
                    <li>
                      <button href="">
                        <i
                          className="fas fa-underline"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </li>
                    <li>
                      <button href="">
                        <i
                          className="fas fa-align-justify"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </li>

                  </ul>
                </div>
                <textarea style={{ padding: "20px", fontSize: "20px", width: "100%", border: "solid 1px lightGrey" }} name="desc" id="" cols="30" rows="10" placeholder='e.g. Created and Implemented lesson plans based on child-led interests and curiosities.'
                 defaultValue={singleExperience?.desc}
                onChange={(e) => handleChangeExperience(e, singleExperience?.id)} ></textarea>
              </div>

            </div>
          </div>
        )
      })}

    </animated.div>
  )

}

export default WorkExperience;
