import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import ResumeDataContext from '../CvForm/ResumeContext'; 
const Languages = ({activeSection}) => {
  const {handleAddLanguages, handleDeleteLanguages,languages,handleChangeLanguages}=useContext(ResumeDataContext); 
  const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
      const addLanguages = () => {
        let language = {
          id:uuid(),
          Language:"",
          expertLevel:""
        };
        handleAddLanguages(language);
      };  
  return (
    <animated.div style={formAnimation}>
         <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div> <p>
          A varied education on your resume sums up the value that your
          learning and background belongs to your job
        </p></div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addLanguages()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>
       
       {languages?.map((singleLanguage,index)=>{
                   return ( 
                    <div key={index}>   
         
                    <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />

         <div className="division" key={singleLanguage.id} style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
         <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
          Language
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g. French"
            name='Language'
            defaultValue={singleLanguage?.Language}
            onChange={(e) => handleChangeLanguages(e, singleLanguage?.id)}
            
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Level 
          </label>
          <select
                  className="form-select"
                  defaultValue={singleLanguage?.expertLevel}
                  name="expertLevel"
                  onChange={(e) => handleChangeLanguages(e, singleLanguage?.id)}
                >
                  <option value="Native Speaker">Native Speaker</option>
                  <option value="Highly Proficient">Highly Proficient</option>
                  <option value="Expert">Very good command</option>
                </select>
        

        </div>
        
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => handleDeleteLanguages(singleLanguage.id)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
        </div>
       </div>
       </div>
                    )})}
      
    </animated.div>
  )
}

export default Languages
