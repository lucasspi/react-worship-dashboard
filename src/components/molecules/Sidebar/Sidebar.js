import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";
import "./styles.scss";

export const Sidebar = () => {
  const [pathname, setpathname] = useState("/app/team");

  useEffect(() => {
    setpathname(window.location.pathname);
  }, []);
  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="#fff" backgroundColor="#3B76EF">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/app/team"
              onClick={() => setpathname("/app/team")}
            >
              <CDBSidebarMenuItem
                icon="user-friends"
                className={`nav-active-item ${
                  pathname === "/app/team" ? "active" : ""
                }`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  Equipes
                  <i className="simple-icon-arrow-right fs-14" />
                </div>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/app/services">
              <CDBSidebarMenuItem
                icon="home"
                className={`nav-active-item ${
                  pathname === "/app/services" ? "active" : ""
                }`}
                onClick={() => setpathname("/app/services")}
              >
                <div className="d-flex justify-content-between align-items-center">
                  Cultos
                  <i className="simple-icon-arrow-right fs-14" />
                </div>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
