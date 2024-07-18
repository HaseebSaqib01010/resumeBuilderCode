import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ResumeDataContext from '../CvForm/ResumeContext'; 
const Hobbies = ({ activeSection }) => {
  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 1, transform: 'translateX(100%)' },
    config: { duration: 1250 },
  });
  const { handleChangeHobby,hobby } = useContext(ResumeDataContext);
  
  return (
    <animated.div className="textInput" style={formAnimation}>


      <div className="field-top" style={{ display: "block" }}>
        <h3>{activeSection}</h3>
        <p>What do you like? </p>


      </div>
      <div style={{ margin: "20px" }}>
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
        <textarea style={{ padding: "15px", fontSize: "24px" }}  id="" cols="30" rows="10" placeholder='e.g. Cycling, Sky Diving, Panting ...'     name="desc"
          value={hobby}
          onChange={(e)=> handleChangeHobby(e)}></textarea>
      </div>
    </animated.div>
  )
}

export default Hobbies;
