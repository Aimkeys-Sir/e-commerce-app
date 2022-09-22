import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm  navbar-expand-lg light">
      <div className="container-fluid">
        
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "orange" }}
              >
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/productpage"
                style={{ color: "orange" }}
              >
             Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/contactpage"
                style={{ color: "orange" }}
              >
             Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
