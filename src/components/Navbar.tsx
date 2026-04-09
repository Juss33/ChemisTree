import { FaBars, FaPlus,FaUser} from "react-icons/fa";
import {SignInButton,UserButton,useUser} from "@clerk/clerk-react";
import {Authenticated,Unauthenticated} from "convex/react"
import {Link, useNavigate} from "react-router-dom";
import CreateDropdown from "./CreateDropDown";
import {useState} from "react"
import SearchBar from "./SearchBar";
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import SideBar from "./Sidebar";

interface NavBarProps {
  showSidebar: boolean, 
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}; 

const NavBar = ({showSidebar, setShowSidebar}: NavBarProps) => {
  const [showDropdown,setShowDropdown] = useState(false);
  const {user} = useUser();
  const navigate = useNavigate();

  return <Navbar className="bg-body-tertiary py-0" key="md" expand="md">
    <div className="navbar-container">
      <Button variant="light" onClick={() => setShowSidebar(!showSidebar)} className="d-block" title="Open sidebar"><FaBars /></Button>
      <Offcanvas 
        id={`offcanvasNavbar-expand-md`}
        className="d-md-none"
        responsive="md"
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="start"
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">ChemisTree</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideBar />
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar.Brand as={Link} to="/">
        <img src="/LOGOCHEMSITREE.png" alt="logo" width="40" height="40"></img>
        <span className="d-none d-md-inline">ChemisTree</span>
      </Navbar.Brand>
      <SearchBar/>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button variant="orange" title="Sign in">Sign In</Button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <div className="dropdown-container position-relative me-2">
          <Button variant="light" onClick={() => setShowDropdown(true)} title="Create">
            <FaPlus />
          </Button>
          {showDropdown && (<CreateDropdown isOpen={showDropdown} onClose={()=> setShowDropdown(false)} />)}
        </div>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="View profile" labelIcon={<FaUser />} onClick={() => user?.username && navigate(`/u/${user.username}`)} />
          </UserButton.MenuItems>
        </UserButton>
      </Authenticated>
    </div>
  </Navbar>; 
}

export default NavBar;