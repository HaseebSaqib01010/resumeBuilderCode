import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import "./CvForm.css"
import { v4 as uuid } from "uuid";
import { useContext } from 'react';
import ResumeDataContext from './ResumeContext';

const References = ({ activeSection }) => {
  const { handleAddReferences, handleDeleteReferences, reference, handleChangeReference } = useContext(ResumeDataContext)


  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 1, transform: 'translateX(100%)' },
    config: { duration: 1250 },
  });
  const addReferences = () => {
    let Reference = {
      id: uuid(),
      Name: "",
      Company: "",
      Email: "",
      contact: ""
    };
    handleAddReferences(Reference);
  };
  return (
    <animated.div style={formAnimation}>
      <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div> <p>
        "Provide professional references who can vouch for your qualifications and work ethic."
        </p></div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addReferences()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>
      {reference?.map((singleReference,index) => {
        return (

          <div key={index}>
          <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />


            <div className="division" key={singleReference.id} style={{ border: "lightgrey 1px solid", padding: "20px", margin: "10px" }}>
              <div style={{ display: "flex", width: "100%" }}>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    Referent's Full Name
                  </label>
                  <input
                    type="text"
                    className="12"
                    placeholder="e.g. Mr Wick"
                    name='name'
                    defaultValue={singleReference?.name}
                    onChange={(e) => handleChangeReference(e, singleReference?.id)}/>

                  
                </div>
                <div className="col-md-12 col-lg-6 px-2">
                  <label htmlFor="" className="col-12">
                    Company
                  </label>
                  <input type="url" className="12" placeholder="WFC" name='company'  
                    defaultValue={singleReference?.company}
                    onChange={(e) => handleChangeReference(e, singleReference?.id)}
                  />
                </div>

                <button style={{ fontSize: "20px", backgroundColor: "white", border: "none", position: "relative", top: "-10px", right: "5px", height: "0px" }} onClick={() => handleDeleteReferences(singleReference.id)}>
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    style={{ color: "#502ACC" }}
                  ></i>
                </button>
              </div>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Email
                </label>
                <input
                  type="email"
                  className="12"
                  placeholder="e.g. wfc@gmail.com"
                  name='email'
                  defaultValue={singleReference?.email}
                    onChange={(e) => handleChangeReference(e, singleReference?.id)}
                />
              </div>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Contact
                </label>
                <input type="number" className="12" placeholder="111-11-1111"  name='contact'
                   defaultValue={singleReference?.contact}
                    onChange={(e) => handleChangeReference(e, singleReference?.id)}
                />
              </div>
            </div>
          </div>
        )
      })}

    </animated.div>
  )
}

export default References;
