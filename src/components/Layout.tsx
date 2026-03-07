import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import { Col, Row } from "react-bootstrap";
import SideBar from "./Sidebar";
import { useState } from "react";

function Layout({ children }: any) {
  const [open, setOpen] = useState(true);
  return (
    <div className="app-container">
        <NavBar /> 
        <Row className="g-0 flex-grow-1">
          <Col xs={3} lg={2} className="text-bg-sidebar d-none d-md-block">
            <div>
              <button onClick={() => setOpen(!open)}>Toggle</button>

              <SideBar open={open} />

              <main>{children}</main>
            </div>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
    </div>
  );
}

export default Layout;