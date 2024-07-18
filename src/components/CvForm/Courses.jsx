import React from "react";
import "./CvForm.css";
import { v4 as uuid } from "uuid";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ResumeDataContext from "./ResumeContext";
const Courses = ({ activeSection}) => {
  const{handleAddCourses,handleDeleteCourses,courses, handleChangeCourse} = useContext(ResumeDataContext);
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 1, transform: "translateX(100%)" },
    config: { duration: 1250 },
  });
  const addCourses = () => {
    let courses = {
      id: uuid(),
      code: "",
      name: "",
      grades: "",
      duration: "",
    };
    handleAddCourses(courses);
  };
  return (
    <animated.div style={formAnimation}>
 <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div> <p>
        "List relevant courses that showcase your expertise and knowledge in your field."
        </p></div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addCourses()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>
      {courses?.map((singleCourse,index)=>{
      return (
      <div key={index}>     
      <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />
      <div className="division"  style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
      <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Code
          </label>
          <input type="text" className="12" placeholder="CSC 210" name="code" defaultValue={singleCourse?.code} onChange={(e)=>handleChangeCourse(e,singleCourse?.id)}/>
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Name
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g Design and Analysis of Algorithm"
            name="name" defaultValue={singleCourse?.name} onChange={(e)=>handleChangeCourse(e,singleCourse?.id)}
          />
        </div>
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => handleDeleteCourses(singleCourse.id)}>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: "#502ACC" }}
                ></i>
              </button>
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Grades
          </label>
          <input type="text" className="12" placeholder="e.g A+" name="grades" defaultValue={singleCourse?.grades} onChange={(e)=>handleChangeCourse(e,singleCourse?.id)} />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Course Duration
          </label>
          <input type="text" className="12" placeholder="e.g 3-months" name="duration" defaultValue={singleCourse?.duration} onChange={(e)=>handleChangeCourse(e,singleCourse?.id)} />
        </div>
      </div>
      </div>
      )
              })
                
              }
    </animated.div>
  );
};


export default Courses;
