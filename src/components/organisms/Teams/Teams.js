import { Button } from "../../atoms";
import { Table } from "../../molecules";
import React from "react";

export const Teams = () => {
  return (
    <React.Fragment>
      {/* TITLE */}
      <div className="d-flex align-items-center justify-content-between">
        <p className="h2">Equipe</p>
        <div className="d-flex align-items-center">
          <Button title={"ADICIONAR MODALIDADE"} onClick={() => {}} outlined />
          <Button title={"ADICIONAR INTEGRANTE"} onClick={() => {}} outlined />
        </div>
      </div>
      {/* TABLE */}
      <Table />
    </React.Fragment>
  );
};
