import React from "react";
import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  // const nextPage = () => {
  //   if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  // };
  // const prevPage = () => {
  //   if (currentPage !== 1) setCurrentPage(currentPage - 1);
  // };
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              style={{ cursor: "pointer" }}
              // onClick={() => onPageChange(page)}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
