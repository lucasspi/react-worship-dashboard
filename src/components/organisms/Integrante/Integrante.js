import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms";

export const Integrante = () => {
  return (
    <React.Fragment>
      {/* TITLE */}
      <div className="d-flex align-items-center justify-content-between">
        <p className="h2">Adicionar Integrante</p>
        <div className="d-flex align-items-end">
          <NavLink to={`/app/team/default`}>
            <Button title={"VOLTAR"} onClick={() => {}} type="unfilled" />
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};
