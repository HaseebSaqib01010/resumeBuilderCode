import React from 'react'
import "./CvForm.css"
import { useSpring, animated } from "react-spring";
import { v4 as uuid } from "uuid";
import { useContext } from 'react';
import ResumeDataContext from './ResumeContext';
const WebLinks = ({activeSection}) => {
    const formAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0%)', 
        from: { opacity: 1, transform: 'translateX(100%)' },
        config: { duration: 1250 }, 
      });
      const {handleAddWebLink,handleDeleteWebLink,webLink,handleChangeWebLinks}=useContext(ResumeDataContext)
      const addWebLinks = () => {
        let webLink = {
          id:uuid(),
          Label:"label",
          Link:"link"
        };
        handleAddWebLink(webLink);
      };  
  return (
    <animated.div style={formAnimation}>
      
        
      <div className="top" style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
        <div><p>You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio, Linkedin profile, or personal website</p>
       
        </div>
        <li style={{ listStyle: "none" }}>
          <button
            style={{
              fontSize: "24px",
              backgroundColor: "white",
              border: "none",
              height: "0px",

            }}
            onClick={() => addWebLinks()}
          >
            <i
              className="fa fa-plus-circle"
              style={{ color: "#502ACC" }}
            ></i>
          </button>
        </li>
      </div>
       {webLink?.map((singleLink,index)=>{
                   return ( 

        <div key={index}>

        <hr style={{ width: "98.7%", backgroundColor: "violet", textAlign: "center", padding: "1px", marginLeft: '10px' }} />

      
         <div className="division" key={singleLink.id} style={{border:"lightgrey 1px solid", padding:"20px",margin:"10px"}}>
         <div style={{display:"flex",width:"100%"}}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Label
          </label>
          <input
            type="text"
            className="12"
            placeholder="e.g. MY Portfolio"
            name='label'
            defaultValue={singleLink?.label}
            onChange={(e)=>handleChangeWebLinks(e,singleLink?.id)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Links
          </label>
          <input type="url" className="12" placeholder="URL" name = "link"  defaultValue={singleLink?.link}
            onChange={(e)=>handleChangeWebLinks(e,singleLink?.id)} />
        </div>
        
        <button style={{ fontSize: "20px",backgroundColor:"white",border:"none",position:"relative",top: "-10px",right: "5px", height: "0px" }} onClick={() => handleDeleteWebLink(singleLink.id)}>
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

export default WebLinks;
