import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import { Col, Row } from "react-bootstrap";
import SideBar from "./Sidebar";

const Layout = () => {
  return (
    <div className="app-container">
        <NavBar /> 
        <Row>
          <Col xs={3} lg={2} className="text-bg-sidebar d-none d-md-block">
            <SideBar />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
    </div>
  );
}

export default Layout;