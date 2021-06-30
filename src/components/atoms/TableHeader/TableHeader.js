import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../";
import "./styles.scss";

export const TableHeader = ({ teamHeaders }) => {
  if (teamHeaders && teamHeaders.length) {
    return (
      <Row className="header-bg">
        {teamHeaders.map((item, index) => (
          <Colxx
            key={item.label + "_" + index}
            xs={item.sizeSM}
            lg={item.sizeMD}
            className={item.class}
          >
            <span>{item.label}</span>
          </Colxx>
        ))}
      </Row>
    );
  } else return null;
};
