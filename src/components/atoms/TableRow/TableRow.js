import React from "react";
import { Row } from "reactstrap";
import { Colxx, Star, Button } from "../";
import "./styles.scss";

export const TableRow = ({ data }) => {
  if (data && data.length)
    return (
      <>
        {data.map((item, index) => (
          <Row className="row-bg" key={index}>
            <Colxx md="2">
              <span>{item.name}</span>
            </Colxx>
            <Colxx md="3">
              {item.modalidade.map((mod, i) => (
                <span>
                  {mod}
                  {i + 1 === item.modalidade.length ? "" : ", "}
                </span>
              ))}
            </Colxx>
            <Colxx md="2">
              {Array.from({ length: 5 }, (v, i) => (
                <Star
                  starId={i + 1}
                  key={`star_${i + 1}`}
                  marked={item.rate >= i}
                />
              ))}
            </Colxx>
            <Colxx md="3">
              {item.link.map((mod, i) => (
                <span key={i}>
                  {mod}
                  {i + 1 === item.link.length ? "" : ", "}
                </span>
              ))}
            </Colxx>
            <Colxx md="2">
              <Button title={"Editar"} type="unfilled" />
              <Button title={"Excluir"} type="unfilled-error" />
            </Colxx>
          </Row>
        ))}
      </>
    );
  else return null;
};
