import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from 'uuid'
import { useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext } from "react";
import ResumeDataContext from './ResumeContext';

const AreaOfExpertise = ({ activeSection }) => {
  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 1, transform: 'translateX(100%)' },
    config: { duration: 1250 },
  });
  const {handleAddExpertise, handleDeleteExpertise,expertise,handleChangeExpertise} =useContext(ResumeDataContext);
  const addExpertise = () => {
    let exp = {
      id: uuid(),
      jobTitle: "",
      employer: "",
      role:"",
      city:"",
      desc:""
    };
    handleAddExpertise(exp);
  };

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };
  return (

    <animated.div style={formAnimation}>
  <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div> <p>
        
Highlight relevant internships to showcase practical experience and skill development.
        </p></div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addExpertise()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>
      {expertise?.map((singleExpertise,index) => {
        
        return (
          <div key={index}>
           
          <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />
            <div key={singleExpertise.id} style={{ border: "solid lightgrey 1px", padding: "20px", margin: "10px" }}>
              <div className="division">
                <div style={{ display: "flex", width: "100%" }}>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Job Title
                    </label>
                    <input type="text" className="12" placeholder="e.g. SQA  " name='jobTitle'   defaultValue={singleExpertise?.jobTitle}
                      onChange={(e) => handleChangeExpertise(e, singleExpertise?.id)}/>
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
                      defaultValue={singleExpertise?.employer}
                      onChange={(e) => handleChangeExpertise(e, singleExpertise?.id)}/>

                    
                  </div>
                  <button style={{ fontSize: "20px", backgroundColor: "white", border: "none", position: "relative", top: "-10px", right: "5px", height: "0px" }} onClick={() => handleDeleteExpertise(singleExpertise.id)}>
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
                  <input type="text" className="12" placeholder="e.g. automation " name='role' defaultValue={singleExpertise?.role}
                      onChange={(e) => handleChangeExpertise(e, singleExpertise?.id)}/>
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    City
                  </label>
                  <input type="text" className="12" placeholder="e.g. Ohio" name='city'  defaultValue={singleExpertise?.city}
                      onChange={(e) => handleChangeExpertise(e, singleExpertise?.id)} />
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
                <textarea style={{ padding: "20px", fontSize: "20px", width: "100%", border: "solid 1px lightGrey" }}  id="" cols="30" rows="10" placeholder='e.g. Created and Implemented lesson plans based on child-led interests and curiosities.' name='desc'  defaultValue={singleExpertise?.desc}
                      onChange={(e) => handleChangeExpertise(e, singleExpertise?.id)}></textarea>
              </div>

            </div>
          </div>
        )
      }
      )}

    </animated.div>
  )
}

export default AreaOfExpertise
