import { FaPlus,FaUser} from "react-icons/fa";
import {SignInButton,UserButton,useUser} from "@clerk/clerk-react";
import {Authenticated,Unauthenticated} from "convex/react"
import {useNavigate} from "react-router-dom";
import CreateDropdown from "./CreateDropDown";
import {useState} from "react"
import SearchBar from "./SearchBar";
import { Button, Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  const [showDropdown,setShowDropdown] = useState(false);
  const {user} = useUser();
  const navigate = useNavigate();

  return <Navbar className="bg-body-tertiary py-0">
    <Container>
      <Navbar.Brand href="/">
        <img src="/LOGOCHEMSITREE.png" alt="logo" width="40" height="40"></img>
        <span className="d-none d-md-inline">ChemisTree</span>
      </Navbar.Brand>
      <SearchBar/>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button variant="signin">Sign In</Button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <div className="dropdown-container position-relative">
          <Button variant="light" onClick={() => setShowDropdown(true)}>
            <FaPlus />
          </Button>
          {showDropdown && (<CreateDropdown isOpen={showDropdown} onClose={()=> setShowDropdown(false)} />)}
        </div>
        <Button variant="light" onClick={() => user?.username && navigate(`/u/${user.username}`)} title="View Profile" className="me-2">
          <FaUser />
        </Button>
        <UserButton />
      </Authenticated>
    </Container>
  </Navbar>; 

  // sign in button colours: 
  // #FF4500
  // hover: #ff5722
}

export default NavBar;