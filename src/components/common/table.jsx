import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";


// Columns: contains columns names and their path in the movies object and the like and delete columns
// sortColumn: the selected column required for sorting and it is used to view the arrow icon
// onSort: to handle sort on header selection
// data: contains the movies list

const Table = ({ columns, sortColumn, onSort, data }) => {
  // TableHeader contains columns names and sort handles
  // TableBody contains the data
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
