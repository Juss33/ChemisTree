import { FaBars, FaPlus,FaUser} from "react-icons/fa";
import {SignInButton,UserButton,useUser} from "@clerk/clerk-react";
import {Authenticated,Unauthenticated} from "convex/react"
import {useNavigate} from "react-router-dom";
import CreateDropdown from "./CreateDropDown";
import {useState} from "react"
import SearchBar from "./SearchBar";
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import SideBar from "./Sidebar";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown,setShowDropdown] = useState(false);
  const {user} = useUser();
  const navigate = useNavigate();

  return <Navbar className="bg-body-tertiary py-0" key="md" expand="md">
    <div className="navbar-container">
      <Button variant="light" onClick={() => setShowSidebar(true)} className="d-block d-md-none" title="Open sidebar"><FaBars /></Button>
      <Offcanvas
        id={`offcanvasNavbar-expand-md`}
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

      <Navbar.Brand href="/">
        <img src="/LOGOCHEMSITREE.png" alt="logo" width="40" height="40"></img>
        <span className="d-none d-md-inline">ChemisTree</span>
      </Navbar.Brand>
      <SearchBar/>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button variant="signin" title="Sign in">Sign In</Button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <div className="dropdown-container position-relative">
          <Button variant="light" onClick={() => setShowDropdown(true)} title="Create">
            <FaPlus />
          </Button>
          {showDropdown && (<CreateDropdown isOpen={showDropdown} onClose={()=> setShowDropdown(false)} />)}
        </div>
        <Button variant="light" onClick={() => user?.username && navigate(`/u/${user.username}`)} title="View Profile" className="me-2">
          <FaUser />
        </Button>
        <UserButton />
      </Authenticated>
    </div>
  </Navbar>; 
}

export default NavBar;