import React from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, MobileMenuIcon } from "./svg/index";

function TopNav() {
  return (
    <nav className="navbar nav-top fixed-top">
      <div className="d-flex align-items-center navbar-left nav-top">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) => null}
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => null}
        >
          <MobileMenuIcon />
        </NavLink>
      </div>
      <a className="navbar-logo" href="/">
        <img
          alt="logo"
          className="logo-single-img d-none d-xs-block"
          src="/assets/logo-black.png"
        />
        <img
          alt="logo"
          className="logo-single-img-mobile d-block d-xs-none"
          src="/assets/logo-mobile.png"
        />
      </a>
    </nav>
  );
}

export default TopNav;
