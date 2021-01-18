// import React from "react";

// const Pagination = () => {
//   const pageLinks = [];

//   for (let i = 1; i < props.pages + 1; i++) {
//     let active = props.currentPage == i ? "active" : "";

//     pageLinks.push(
//       <li
//         className={`waves-effect ${active}`}
//         key={i}
//         onClick={() => props.nextPage(i)}
//       >
//         [i]
//       </li>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="container-row">
//         <ul className="pagination">
//           {props.currentPage > 1 ? (
//             <li className={`waves-effect`} onClick={() => props.nextPage(i)}>
//               PREV
//             </li>
//           ) : (
//             ""
//           )}
//           {pageLinks}
//           {props.currentPage < props.pages + 1 ? (
//             <li className={`waves-effect`} onClick={() => props.nextPage(i)}>
//               NEXT
//             </li>
//           ) : (
//             ""
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Pagination;

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
    // <div className="pagination-container">
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
    // </div>
  );
};

export default Pagination;
