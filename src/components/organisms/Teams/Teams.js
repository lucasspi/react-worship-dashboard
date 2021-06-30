import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms";
import { Table } from "../../molecules";

export const Teams = () => {
  return (
    <React.Fragment>
      {/* TITLE */}
      <div className="d-flex align-items-center justify-content-between">
        <p className="h2">Equipe</p>
        <div className="d-flex align-items-center">
          <NavLink to={`/app/team/modalidade`}>
            <Button
              title={"ADICIONAR MODALIDADE"}
              onClick={() => {}}
              type="outlined"
            />
          </NavLink>
          <NavLink to={`/app/team/integrante`}>
            <Button
              title={"ADICIONAR INTEGRANTE"}
              onClick={() => {}}
              type="outlined"
            />
          </NavLink>
        </div>
      </div>
      {/* TABLE */}
      <Table />
    </React.Fragment>
  );
};
