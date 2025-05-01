import { Link } from "react-router-dom"
import "./Pagination.css"
import blogData from "../data/blogData"

const Pagination = ({ currentPage, totalPages }) => {
  // Calculate total pages from blog data if not provided
  const calculatedTotalPages = totalPages || blogData.getTotalPages()

  // Create an array of page numbers to display
  const pageNumbers = []
  for (let i = 1; i <= calculatedTotalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <Link
        to={currentPage > 1 ? `/page/${currentPage - 1}` : "#"}
        className={`page-nav prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        &#10094;
      </Link>

      {pageNumbers.map((number) => (
        <Link key={number} to={`/page/${number}`} className={`page-number ${currentPage === number ? "active" : ""}`}>
          {number}
        </Link>
      ))}

      <Link
        to={currentPage < calculatedTotalPages ? `/page/${currentPage + 1}` : "#"}
        className={`page-nav next ${currentPage === calculatedTotalPages ? "disabled" : ""}`}
      >
        &#10095;
      </Link>
    </div>
  )
}

export default Pagination
