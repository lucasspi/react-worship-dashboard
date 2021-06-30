import React from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "./TopNav";

function AppLayout(props) {
  return (
    <div>
      <TopNav />
      <div className="d-flex">
        <Sidebar />
        <main className="w-100">
          <div>{props.children}</div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
