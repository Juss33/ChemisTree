// import { useState } from 'react';
// import { Collapse, Dropdown, NavLink } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';

// const SideBar = () => {
//     const [openCollapse, setOpenCollapse] = useState(false);

//     return <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">
//         <div className='d-flex flex-row'>
//             <Nav.Link className='text-reset' href="/">Home</Nav.Link>
//             <Dropdown.Toggle as={NavLink} className='text-reset ms-3' onClick={() => setOpenCollapse(!openCollapse)}></Dropdown.Toggle>
//         </div>
//         <Collapse in={openCollapse}>
//             <div className="ps-3">
//                 <Nav.Link className="text-reset" href="/about-us">About us</Nav.Link>
//                 <Nav.Link className="text-reset" href="/features">Features</Nav.Link>
//                 <Nav.Link className="text-reset" href="/resources">Resources</Nav.Link>
//                 <Nav.Link className="text-reset" href="/updates">Updates</Nav.Link>
//                 <Nav.Link className="text-reset" href="/contact">Contact</Nav.Link>
//             </div>
//         </Collapse>
//         <Nav.Link className='text-reset' href="/feed">Feed</Nav.Link>
//         <Nav.Link className='text-reset' href="/projects">Stuff</Nav.Link>
//         <Nav.Link className='text-reset' href="/journal">Kai's toes</Nav.Link>
//     </Nav>; 
// }

// export default SideBar;

//I lowkey had to ask Chatgpt on how to use bootstrap, but i didnt know how to use it to link the pages,
//So i did the way i normally would
//saved the code untouched ontop if you still need

import { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/SideBar.css"

const SideBar = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <div className="sidebar">
    <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">

      <div className="d-flex flex-row align-items-center">
        <Nav.Link as={NavLink} to="/" className="text-reset">
          Home
        </Nav.Link>

        <button
            type="button"
            className="btn btn-link text-reset ms-3 p-0"
            onClick={() => setOpenCollapse(!openCollapse)}
            >
            ▾
            </button>
      </div>

      <Collapse in={openCollapse}>
        <div className="ps-3">
          <Nav.Link as={NavLink} to="/about-us" className="text-reset">
            About us
          </Nav.Link>

          <Nav.Link as={NavLink} to="/resources" className="text-reset">
            Resources
          </Nav.Link>

          <Nav.Link as={NavLink} to="/updates" className="text-reset">
            Updates
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact" className="text-reset">
            Contact
          </Nav.Link>
        </div>
      </Collapse>

      <Nav.Link as={NavLink} to="/feed" className="text-reset">
        Feed
      </Nav.Link>

      <Nav.Link as={NavLink} to="/projects" className="text-reset">
        Stuff
      </Nav.Link>

      <Nav.Link as={NavLink} to="/journal" className="text-reset">
        Kai's toes
      </Nav.Link>

    </Nav>
    </div>
  );
};

export default SideBar;
