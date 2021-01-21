import React from "react";
import _ from "lodash";

function TableBody(props) {

  // This is to view the content of each cell of the table
  const renderCell = (item, column) => {
    // This condition is used to view the like and delete columns because these two columns only have
    // the content property
    if (column.content) return column.content(item);

    // If the item does not have the content property, then it is just a normal property in the movie
    // object
    // The lodash get function is used so we get the <column.path> property from the <item> object
    return _.get(item, column.path);
  };

  // used to create a key for each individual property of the movie in the map function to avoid errors
  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

    const { data, columns } = props;

    // loop through the data(movies) and display each field in them (2 loops)
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={createKey(item, column)}>
                {renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

export default TableBody;
