import React from "react";
import "./Navbar.css";
function Navbar({Light, setTheme}) {

  return (
    <div className={Light ? 'navbar' : 'navbarLight'}>
      <div className="nav-content">
        <h1 className="text">
          <a href="#main" id={Light ? 'main-heading' : 'main-headingLight'}>
            Port
            <span className="folio">folio</span>
          </a>
        </h1>

        <label class="switch">
    <input type="checkbox" checked = {!Light} onChange={setTheme}/>
    <span class="slider"></span>
</label>
  </div>
    </div>
  );
}

export default Navbar;
