import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Link
        to={currentPage > 1 ? `/page/${currentPage - 1}` : "#"}
        className={`page-nav prev ${currentPage === 1 ? "disabled" : ""}`}
        aria-disabled={currentPage === 1 ? "true" : "false"}
        tabIndex={currentPage === 1 ? "-1" : "0"}
      >
        &#10094;
      </Link>

      {pageNumbers.map((number) => (
        <Link
          key={number}
          to={`/page/${number}`}
          className={`page-number ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </Link>
      ))}

      <Link
        to={currentPage < totalPages ? `/page/${currentPage + 1}` : "#"}
        className={`page-nav next ${currentPage === totalPages ? "disabled" : ""}`}
        aria-disabled={currentPage === totalPages ? "true" : "false"}
        tabIndex={currentPage === totalPages ? "-1" : "0"}
      >
        &#10095;
      </Link>
    </div>
  );
};

export default Pagination;
