import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navbar.css";
import kapica from "../../../img/kapica.png";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={kapica}
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block align-text-center"
          />
          12 Days of MemeMas
        </a>
        <a
          href="https://x.com/JollyMemeMas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
