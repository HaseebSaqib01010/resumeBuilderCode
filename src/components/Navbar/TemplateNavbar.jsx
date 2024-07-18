import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImage from '../../assets/images/logo.jpg'; 
import profileImage from "../../assets/images/newyork.jpeg"; // This is the relative path to the image
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSpring, animated ,config } from 'react-spring';
import SplitButton from "react-bootstrap/SplitButton";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavScrollExample({hideRenderTemp,handlePrint}) {
  const navbarAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 400 }
  });

  return (
    <animated.div style={navbarAnimation}>
    <Navbar expand="lg" className="customNav" style={{paddingTop:"20px"}}>
      <Container fluid className="navbarContainer">
         
          <button onClick={hideRenderTemp} className="back"> <i className="fa-solid fa-angles-left"></i>  Back to Editor</button>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbarItems">
          <Nav
            className="navbar-items"
            style={{ maxHeight: "100px", color: "white",display:"flex",marginTop:"12px" }}
            navbarScroll
          >
            {/* <Link
              to = "/dashboard"
              style={{ color: "white", fontSize: "25px",marginRight:"30px", textDecoration:"none" }}
            >
              Dashboard
            </Link> */}
        
            <div className="NavCenter">
            <div className="lineSpacing">
                <button><i className="fa-solid fa-minus"></i></button>
                <span>Aa</span>
                <button><i className="fa-solid fa-plus"></i></button>  
            </div>
            <hr/>

            <div className="colors">
            <button className="red">      
            </button>
            <button className="green">      
            </button>
            <button className="purple">      
            </button>
            <button className="yellow">      
            </button>
            <button className="black">      
            </button>
            </div>
            </div>
            
            <button
              href="#action2"
              style={{ color: "white", fontSize: "24px"}}
              className="download"
              onClick={handlePrint}
            >
              Download PDF
            </button>
            <div>
                {/* <button className="NavSetting">
                <i className="fa-solid fa-ellipsis"></i>
                <NavDropdown
              className="NavSettings"
              title=""
            
              style={{ color: "white", fontSize: "55px" ,marginRight:"0px"}}
            >
            <i className="fa-solid fa-ellipsis"></i>
              <NavDropdown.Item
          
                href="#action3"
                style={{
                  color: "black",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                style={{
                  color: "black",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                French
              </NavDropdown.Item>
            </NavDropdown>

                </button> */}
            </div>
          
         
          
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </animated.div>
  );
}

export default NavScrollExample;
