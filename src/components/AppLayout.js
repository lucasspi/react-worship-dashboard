import React from "react";
import { Sidebar } from "./molecules/Sidebar/Sidebar";
import { TopNav } from "./molecules/TopNav/TopNav";

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
