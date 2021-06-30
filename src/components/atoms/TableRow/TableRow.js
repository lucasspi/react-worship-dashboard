import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../";
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
              <span>{item.rate}</span>
            </Colxx>
            <Colxx md="3">
              {item.link.map((mod, i) => (
                <span>
                  {mod}
                  {i + 1 === item.modalidade.length ? "" : ", "}
                </span>
              ))}
            </Colxx>
            <Colxx md="2">
              {/* <span>{item.name}</span> */}
            </Colxx>
          </Row>
        ))}
      </>
    );
  else return null;
};
