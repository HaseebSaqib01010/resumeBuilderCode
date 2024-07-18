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

function NavScrollExample() {
  const navbarAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 400 }
  });

  return (
    <animated.div style={navbarAnimation}>
    <Navbar expand="lg" className="navbar">
      <Container fluid className="navbarContainer">
        <Navbar.Brand href="#">
          <img src={logoImage} alt="" srcSet="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbarItems">
          <Nav
            className="navbar-items"
            style={{ maxHeight: "100px", color: "white" }}
            navbarScroll
          >
            <Link
              to = "/dashboard"
              style={{ color: "white", fontSize: "25px",marginRight:"30px", textDecoration:"none" }}
            >
              Dashboard
            </Link>
            <Nav.Link
              href="#action2"
              style={{ color: "white", fontSize: "25px" ,marginRight:"30px"}}
            >
              Upgrade
            </Nav.Link>
            <NavDropdown
              className="language"
              title="English"
              id="navbarScrollingDropdown"
              style={{ color: "white", fontSize: "25px" ,marginRight:"30px"}}
            >
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

            {/* <NavDropdown
              title=""
              id="navbarScrollingDropdown"
              className="logout"
            >
              <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
            </NavDropdown> */}
            <div className="user">
            <Nav.Link href="#">
              <img className="profileImg" src={profileImage} alt="" srcSet="" />
            </Nav.Link>
            {/* <div className="logout">
              {["start"].map((direction) => (
                <DropdownButton
                  key={direction}
                  drop={direction}
                  variant="none"
                  style={{ color: "white", fontSize: "25px"}}
                  title="Admin"
                >
                  <Dropdown.Item eventKey="1" style={{ color: "black", fontSize: "25px", textAlign:"center"}}>Logout</Dropdown.Item>
                </DropdownButton>
              ))}
            </div> */}
        
            </div>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </animated.div>
  );
}

export default NavScrollExample;
