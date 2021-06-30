import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms";
import { ModalidadeForm } from "../../molecules";

export const Modalidade = () => {
  return (
    <React.Fragment>
      {/* TITLE */}
      <div className="d-flex align-items-center justify-content-between">
        <p className="h2">Adicionar Modalidade</p>
        <div className="d-flex align-items-end">
          <NavLink to={`/app/team/default`}>
            <Button title={"VOLTAR"} onClick={() => {}} type="unfilled" />
          </NavLink>
        </div>
      </div>
      <ModalidadeForm />
      <div className=" d-flex justify-content-end align-items-center w-100">
        <NavLink to={`/app/team/default`}>
          <Button title={"CANCELAR"} onClick={() => {}} type="unfilled" />
        </NavLink>
        <Button title={"CRIAR MODALIDADE"} onClick={() => {}} />
      </div>
    </React.Fragment>
  );
};
