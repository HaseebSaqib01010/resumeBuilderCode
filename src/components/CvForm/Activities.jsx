
import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import ResumeDataContext from '../CvForm/ResumeContext';
const Activities = ({ activeSection }) => {

  const { handleAddActivities, handleDeleteActivities, activity,handleChangeActivities } = useContext(ResumeDataContext);
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
  const addActivities = () => {
    let activity = {
      id: uuid(),
      title: "",
      employer:"",
      role: "",
      city: "",
      timePeriod: "",
      desc:""
    };
    handleAddActivities(activity);
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
            onClick={() => addActivities()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>

      {activity?.map((singleActivity,index) => {

        return (
          <div key={index}>
            <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />

            <div key={singleActivity.id} style={{ border: "solid lightgrey 1px", padding: "20px", margin: "10px" }}>

              <div className="division">
                <div style={{ display: "flex", width: "100%" }}>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Function Title
                    </label>
                    <input type="text" className="12" placeholder="e.g. Organizer  " name='title' defaultValue={singleActivity?.title} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)} />
                  </div>
                  <div className="col-md-12 col-lg-6 px-2">
                    <label htmlFor="" className="col-12">
                      Employer
                    </label>
                    <input
                      type="text"
                      className="12"
                      placeholder="e.g xyz"
                      name='employer' defaultValue={singleActivity?.employer} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)} 
                    />
                  </div>
                  <button style={{ fontSize: "20px", backgroundColor: "white", border: "none", position: "relative", top: "-10px", right: "5px", height: "0px" }} onClick={() => handleDeleteActivities(singleActivity.id)}>
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
                  <input type="text" className="12" placeholder="e.g.Team Lead"   name='role' defaultValue={singleActivity?.role} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  />
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    City
                  </label>
                  <input type="text" className="12" placeholder="e.g. Ohio"   name='city' defaultValue={singleActivity?.city} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  />
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

                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="time-periods">
                  <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none"    name='timePeriod' defaultValue={singleActivity?.timePeriod} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  >
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
                  <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none"    name='timePeriod' defaultValue={singleActivity?.timePeriod} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  >
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
                <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none"    name='timePeriod' defaultValue={singleActivity?.timePeriod} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  >
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
                  <DropdownButton id="dropdown-item-button text-light" title={selectedMonth || "Month"} className="timeDropdown " variant="none"    name='timePeriod' defaultValue={singleActivity?.timePeriod} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)}  >
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
                <textarea style={{ padding: "20px", fontSize: "20px", width: "100%", border: "solid 1px lightGrey" }} name="desc" id="" cols="30" rows="10" placeholder=''  defaultValue = {singleActivity?.desc} onChange={(e)=>handleChangeActivities(e,singleActivity?.id)} ></textarea>
              </div>

            </div>
          </div>
        )
      })}

    </animated.div>
  )

}

export default Activities;
