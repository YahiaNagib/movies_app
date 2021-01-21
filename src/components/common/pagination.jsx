import React from "react";
// import PropTypes from "prop-types";
import _ from "lodash";

// itemsCount: total number of movies
// pageSize: number of movies displayed in each page, 4 by default
// currentPage: the selected page which is the first page by default
// onPageChange: handles page change
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

  // number of pages
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // If we have only one page, then no need to paginate
  if (pagesCount === 1) return null;

  // To create the ranges of numbers to display the buttons
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired
// };

export default Pagination;
