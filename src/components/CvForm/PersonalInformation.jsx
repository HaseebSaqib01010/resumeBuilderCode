import React, { useRef, useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated } from "react-spring";
import "./CvForm.css"
import { useContext } from "react";
import ResumeDataContext from '../CvForm/ResumeContext';


const PersonalInformation = ({ activeSection }) => {
  const { handleChangeInfo, info } = useContext(ResumeDataContext);
  const [formData, setFormData] = useState(info);
  const [selectedImage, setSelectedImage] = useState(null);
  // const fileInputRef = useRef();
  const { selectedImageURL,setSelectedImageURL} = useContext(ResumeDataContext);
  const { handleImageChange, fileInputRef} = useContext(ResumeDataContext);

  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 1, transform: 'translateX(100%)' },
    config: { duration: 1250 },
  });

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageURL = URL.createObjectURL(file);
  //     setSelectedImageURL(imageURL);
  //   }
  // };
  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };


  const handleSubmit = () => {
    handleChangeInfo(formData);
  };
  return (
    <animated.div style={formAnimation}>


      <div className="field-top">
        <h3>{activeSection}</h3>

      </div>
      <div className="division" style={{ border: "lightgrey 1px solid", padding: "20px", margin: "10px", lineHeight: "2.5" }}>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Wanted job title <i style={{ color: "#502ACC" }} className="fa fa-question-circle" aria-hidden="true" ></i>
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="e.g Teacher"
            defaultValue={info?.jobTitle}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <div style={{ display: "flex" }}>
            <div className="uploadSec" >
              {selectedImageURL ? (
                <img src={selectedImageURL} alt="Selected" style={{ width: "140px", height: "140px", borderRadius:"100%" }}  />
              ) : (
                <i className="fa-solid fa-user" style={{ color: "#8ba9d0", fontSize: "60px", marginTop: "20px" }}></i>
              )}
            </div>
            <button
              style={{ marginLeft: "10px", padding: "5px", backgroundColor: "#502ACC", border: "none", color: "white" , height:"50px", borderRadius:"10px",marginTop:"90px"}}
              onClick={handleUploadClick}
            >
              Upload Photo
            </button>
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>




        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="12"
            placeholder="John"
            defaultValue={info?.firstName}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="12"
            placeholder="John"
            defaultValue={info?.lastName}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Email
          </label>
          <input type="email"
            className="12"
            name='email'
            placeholder="xyz@gmail.com"
            defaultValue={info?.email}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Contact number
          </label>
          <input type="text"
            name='number'
            className="12"
            placeholder="111-111-111"
            defaultValue={info?.number}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            Country
          </label>
          <input type="country"
            className="12"
            name='country'
            placeholder="Canada"
            defaultValue={info?.country}
            onChange={(e) => handleChangeInfo(e)}
          />
        </div>
        <div className="col-md-12 col-lg-6 px-2">
          <label htmlFor="" className="col-12">
            City
          </label>
          <input type="text"
            className="12"
            placeholder="Toronto"
            name='city'
            defaultValue={info?.city}
            onChange={(e) => handleChangeInfo(e)} />
        </div>
      </div>

    </animated.div>
  )
}

export default PersonalInformation
