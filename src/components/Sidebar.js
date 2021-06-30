import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [pathname, setpathname] = useState("/app/team");

  useEffect(() => {
    console.log("window", window.location.pathname);
    setpathname(window.location.pathname);
  }, []);
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#3B76EF">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large"></i>}
        ></CDBSidebarHeader>

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

export default Sidebar;
