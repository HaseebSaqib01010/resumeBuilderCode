import React from "react";
import "./CvForm.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ResumeDataContext from "./ResumeContext";
import { useMemo } from "react";
const ComputerSkills = ({
  activeSection
}) => {
  const [clickedSkills, setClickedSkills] = useState([]);
  const { handleDeleteSkill, skill, addSkills, preDefSkills, capturedSkills, handleChangeSkills } = useContext(ResumeDataContext);
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });




  const handleAddSkill = () => {
    const newSkill = {
      id: uuid(),
      skill: 'Marketing', // Replace with the desired skill name
      expertLevel: 'Intermediate', // Replace with the desired expertise level
      type: 'newSkill'
    };
  
    addSkills(newSkill);
  };

  return (
    <animated.div style={formAnimation}>

      <div className="field-top">
        <h3>{activeSection}</h3>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => handleAddSkill()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>

      </div>
      <p>Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system)</p>
      <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />
      <div className="skillsSet">
        {preDefSkills.map((skill) => {
          return <button className={`${capturedSkills.map(capSkill => capSkill.id === skill.id ? 'bg-primary text-light' : '')}`} key={skill?.id} onClick={() => addSkills(skill)}><span>{skill?.name}</span> <span><i className="fa-solid fa-plus"></i></span> </button>
        })
        }


      </div>



      <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />
      {capturedSkills?.map((singleSkill) => {
        return (

          <div
            key={singleSkill?.id}
            className="division"
            style={{
              border: "lightgrey 1px solid",
              padding: "20px",
              margin: "10px",
              clear: "both"
            }}

          >

            <div style={{ display: "flex", width: "100%" }}>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Skills
                </label>
                <input type="text" className="12" placeholder="e.g. Marketing" defaultValue={singleSkill?.skill} name="skill" onChange={(e) => handleChangeSkills(e, singleSkill?.id)} />
              </div>
              <div className="col-md-12 col-lg-6 px-2">
                <label htmlFor="" className="col-12">
                  Level of Expertise
                </label>

                <select
                  className="form-select"
                  defaultValue={singleSkill?.expertLevel}
                  name="expertLevel"
                  onChange={(e) => handleChangeSkills(e, singleSkill?.id)}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>

              </div>
              <button
                style={{
                  fontSize: "20px",
                  backgroundColor: "white",
                  border: "none",
                  position: "relative",
                  top: "-10px",
                  right: "5px",
                  height: "0px",
                }}
                onClick={() => handleDeleteSkill(singleSkill.id)}
              >
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
            </div>

          </div>
        );
      })}



      {/*
          <button onClick={() => addSkills("Effective Team Leader")}>
            Effective Team Leader <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={() => addSkills("Highly Organized and Efficient")}>
            Highly Organized and Efficient <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={() => addSkills("Critical Thinking")}>
          Critical Thinking <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={() => addSkills("Microsoft Office ")}>
          Microsoft Office  <i className="fa-solid fa-plus"></i>
          </button>
        
          <button onClick={() => addSkills("Strong Communication Skills")}>Strong Communication Skills <i className="fa-solid fa-plus"></i></button>
          <button onClick={() => addSkills("Time Management Skills ")}>Time Management Skills <i className="fa-solid fa-plus"></i></button>
          <button onClick={() => addSkills("Conflict Resolution ")}>Conflict Resolution <i className="fa-solid fa-plus"></i></button>
          <button onClick={() => addSkills("Public Speaking ")}>Public Speaking <i className="fa-solid fa-plus"></i></button>
          <button onClick={() => addSkills("Marketing")}>Marketing <i className="fa-solid fa-plus"></i></button>
          <button onClick={() => addSkills("Initiatives and Problem-Solving Skills")}>Initiatives and Problem-Solving Skills  <i className="fa-solid fa-plus"></i></button>
        */}
      {/* <li style={{ listStyle: "none", float: "right", marginRight: "0px", padding: "20px" }}>
        <button
          style={{
            fontSize: "20px",
            backgroundColor: "white",
            border: "none",


          }}
          onClick={() => addSkill()}
        >
          Add more Skills &nbsp;
          <i className="fa fa-plus-circle" style={{ color: "#502ACC" }}></i>

        </button>
      </li> */}
    </animated.div>




  );
};

export default ComputerSkills;
