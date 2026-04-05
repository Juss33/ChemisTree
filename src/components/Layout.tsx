import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import { Col, Row } from "react-bootstrap";
import SideBar from "./Sidebar";
import { useState } from "react";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app-container">
      <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Row className="g-0 flex-grow-1">
        {showSidebar && (
          <Col xs={3} xxl={2} className="text-bg-sidebar d-none d-md-block">
            <SideBar />
          </Col>
        )}
        <Col>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default Layout;