// import { useState } from 'react';
// import { Collapse, Dropdown, NavLink } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';

// const SideBar = () => {
//     const [openCollapse, setOpenCollapse] = useState(false);

//     return <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">
//         <div className='d-flex flex-row'>
//             <Nav.Link className='sidebar-link' href="/">Home</Nav.Link>
//             <Dropdown.Toggle as={NavLink} className='sidebar-link ms-3' onClick={() => setOpenCollapse(!openCollapse)}></Dropdown.Toggle>
//         </div>
//         <Collapse in={openCollapse}>
//             <div className="ps-3">
//                 <Nav.Link className="sidebar-link" href="/about-us">About us</Nav.Link>
//                 <Nav.Link className="sidebar-link" href="/features">Features</Nav.Link>
//                 <Nav.Link className="sidebar-link" href="/resources">Resources</Nav.Link>
//                 <Nav.Link className="sidebar-link" href="/updates">Updates</Nav.Link>
//                 <Nav.Link className="sidebar-link" href="/contact">Contact</Nav.Link>
//             </div>
//         </Collapse>
//         <Nav.Link className='sidebar-link' href="/feed">Feed</Nav.Link>
//         <Nav.Link className='sidebar-link' href="/projects">Stuff</Nav.Link>
//         <Nav.Link className='sidebar-link' href="/journal">Kai's toes</Nav.Link>
//     </Nav>; 
// }

// export default SideBar;

//I lowkey had to ask Chatgpt on how to use bootstrap, but i didnt know how to use it to link the pages,
//So i did the way i normally would
//saved the code untouched ontop if you still need


import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/" className="sidebar-link">Home</NavLink>
      <NavLink to="/about-us" className="sidebar-link">About Us</NavLink>
      <NavLink to="/resources" className="sidebar-link">Stuff</NavLink>
      <NavLink to="/updates" className="sidebar-link">Kai's toes</NavLink>
      <NavLink to="/contact" className="sidebar-link">Kai's toes</NavLink>
    </nav>
  );
};

export default SideBar;
