import NavScrollExample from "../components/Navbar/Navbar";
import FillSection from "../components/fillSection/fillSec";
import Form from "../components/CvForm/CvForm";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ForgotPassword from "./ForgotPassword";
import "../assets/css/Dashboard.css";
import React from "react";
import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Templates from "./Templates";
import { createContext } from "react";
import { ResumeProvider } from "../components/CvForm/ResumeContext";


const UserContext = createContext();

function Dashboard() {



  const [perInfo, setPerInfo] = useState({
    jobTitle: "",
    photo: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
  });

  const [rendertemp,setRenderTemp] = useState(false);

  const showRenderTemp= ()=>{setRenderTemp(true);console.log("show")};
  const hideRenderTemp = ()=>{setRenderTemp(false);console.log("hide")};

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Personal Details");
  const logo_nameRef = useRef(null);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!sidebarOpen) {
      logo_nameRef.current?.classList.remove("nothing");
    } else {
      logo_nameRef.current?.classList.add("nothing");
    }
  };
  // Function to handle section changes
  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };
  return (
    
    <>
     <ResumeProvider>
        {rendertemp? 
          <Templates hideRenderTemp={hideRenderTemp}/>  
          :
          <>
            <NavScrollExample />
            <div className="main-content">
              <div className="col-12">
                <div className="inner-content">
                  <div className="col-sm-12 col-lg-3">
                    <FillSection
                      activeSection={activeSection}
                      handleSectionChange={handleSectionChange}
                    />
                  </div>
                  <div className="col-sm-12 col-lg-9">
                    <div className="middle-content">
                      <Form
                        toggleSidebar={toggleSidebar}
                        activeSection={activeSection}
                        perInfo={perInfo}
                        handleSectionChange={handleSectionChange}/>

                      <SideBar
                        sidebarOpen={sidebarOpen}
                        logo_nameRef={logo_nameRef}
                        toggleSidebar={toggleSidebar}
                        // perInfo={perInfo}
                        showRenderTemp={showRenderTemp}
                        hideRenderTemp={hideRenderTemp}
                      />
                    </div>
                  </div>

                  <div className="resume-mini"></div>
                  <Footer />
                </div>
              </div>
            </div>
          </>

        }
      </ResumeProvider>

    </>
    
  );
}

export default Dashboard;
