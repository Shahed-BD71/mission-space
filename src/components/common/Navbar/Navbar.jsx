import React from "react";
import { NavLink } from "react-router-dom";
import NavItem, { links } from "./NavItem";

export default function Navbar() {
  return (
    <>
      <nav
        style={{ backgroundColor: "rgb(36, 154, 156)" }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-3" to="#">
            Mission Space
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul
              style={{ marginRight: "10px", marginLeft: "10px" }}
              className="navbar-nav ms-auto text-info hover-nav fw-bold"
            >
              {links.map((link) => (
                <NavItem key={link.title} title={link.title} to={link.to} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
