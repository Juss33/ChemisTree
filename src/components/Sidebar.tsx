import { useState } from 'react';
import { Collapse, Dropdown, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const SideBar = () => {
    const [openCollapse, setOpenCollapse] = useState(false);

    return <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">
        <Dropdown.Toggle as={NavLink} className='text-reset' onClick={() => setOpenCollapse(!openCollapse)}>Home</Dropdown.Toggle>
        <Collapse in={openCollapse}>
            <div className="ps-3">
                <Nav.Link className="text-reset" href="/">Overview</Nav.Link>
                <Nav.Link className="text-reset" href="/about-us">About us</Nav.Link>
                <Nav.Link className="text-reset" href="/features">Features</Nav.Link>
                <Nav.Link className="text-reset" href="/resources">Resources</Nav.Link>
                <Nav.Link className="text-reset" href="/updates">Updates</Nav.Link>
                <Nav.Link className="text-reset" href="/contact">Contact</Nav.Link>
            </div>
        </Collapse>
        <Nav.Link className='text-reset' href="/feed">Feed</Nav.Link>
        <Nav.Link className='text-reset' href="/projects">Stuff</Nav.Link>
        <Nav.Link className='text-reset' href="/journal">Kai's toes</Nav.Link>
    </Nav>; 
}

export default SideBar;