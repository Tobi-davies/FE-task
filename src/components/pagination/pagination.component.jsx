import React from "react";
import "./pagination.styles.css";

const Pagination = ({ pageLimit, newLength, paginate, currentPage }) => {
  const pageNumbers = [];
  const averagePost = Math.ceil(newLength / pageLimit);
  for (let i = 1; i < averagePost + 1; i++) {
    pageNumbers.push(i);
  }

  console.log(averagePost);

  return (
    <nav className="paginated">
      {currentPage > 1 ? (
        <li className="prev" onClick={() => paginate(currentPage - 1)}>
          PREV
        </li>
      ) : (
        ""
      )}
      {pageNumbers.map((num) => (
        <li key={num} className="page-link" onClick={() => paginate(num)}>
          {num}
        </li>
      ))}

      {currentPage < averagePost ? (
        <li className="prev" onClick={() => paginate(currentPage + 1)}>
          NEXT
        </li>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Pagination;
