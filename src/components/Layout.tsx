import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import { Col, Row } from "react-bootstrap";
import SideBar from "./Sidebar";
import { useState } from "react";

function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="app-container">
      <NavBar />
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setOpen(!open)}
      >☰</button>
      <Row className="g-0 flex-grow-1">
        {open && (
          <Col xs={3} lg={2} className="text-bg-sidebar d-none d-md-block">
            <SideBar open={open} />
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