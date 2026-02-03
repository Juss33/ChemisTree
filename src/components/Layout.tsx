import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import { Col, Row } from "react-bootstrap";
import SideBar from "./Sidebar";

const Layout = () => {
  return (
    <div className="app-container min-vh-100">
        <NavBar /> 
        <Row className="min-vh-100 g-0">
          <Col xs={3} lg={2} className="text-bg-sidebar d-none d-md-block min-vh-100">
            <SideBar />
          </Col>
          <Col className="pt-3">
            <Outlet />
          </Col>
        </Row>
    </div>
  );
}

export default Layout;