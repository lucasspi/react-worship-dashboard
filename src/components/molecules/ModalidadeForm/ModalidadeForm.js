import React, { useState } from "react";
import { Row } from "reactstrap";
import { Input, Colxx, CustomDropdown } from "../../atoms";

export const ModalidadeForm = () => {
  const [name, setName] = useState("");
  return (
    <Row className="my-4">
      <Colxx md="4">
        <Input
          title={"Nome da Modalidade"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Colxx>
      <Colxx md="4">
        <CustomDropdown title={"Quantidade da Modalidade por Escala"} />
      </Colxx>
    </Row>
  );
};
