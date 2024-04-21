import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-content">
        <h1 className="text">
          <a href="#main" id="main-heading">
            Port
            <span className="folio">folio</span>
          </a>
        </h1>
        {/* <label class="switch">
    <input type="checkbox"/>
    <span class="slider"></span>
</label> */}
      </div>
    </div>
  );
}

export default Navbar;
