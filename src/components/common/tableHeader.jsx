import React from "react";

// columns: array
// sortColumn: object
// onSort: function

function TableHeader(props) {
  const raiseSort = path => {
    const sortColumn = { ...props.sortColumn };
    // If we clicked on an already sorted column, just change asc to desc or vice versa
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    // If we selected a new column, change the sortColumn and set the order to asc by default
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    // We have to send the new sortColumn to movies class to render the page
    props.onSort(sortColumn);
  };

  // Used to change the arrow icon
  const renderSortIcon = column => {
    const { sortColumn } = props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

    // Loop over the columns of the header and display them
    return (
      <thead>
        <tr>
          {props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
}

export default TableHeader;
