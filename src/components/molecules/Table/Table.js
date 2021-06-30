import React from "react";
import { connect } from "react-redux";
import { TableHeader, TableRow } from "../../atoms";

const TableComponent = (props) => {
  const { teamHeaders = [], team = [] } = props;
  console.log(props);
  return (
    <div className="my-5">
      {/* HEADER */}
      <TableHeader teamHeaders={teamHeaders} />
      <TableRow data={team} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  teamHeaders: state.teamReducer.teamHeaders,
  team: state.teamReducer.team,
});
export const Table = connect(mapStateToProps, {})(TableComponent);
