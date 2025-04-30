import { Link } from "react-router-dom"
import "./DestinationsList.css"

const DestinationsList = () => {
  const categories = [
    { name: "First-Time Moms", slug: "first-time-moms" },
    { name: "Grandmothers", slug: "grandmothers" },
    { name: "Single Moms", slug: "single-moms" },
    { name: "Mother Figures", slug: "mother-figures" },
  ]

  return (
    <div className="destinations-list">
      <h3 className="destinations-title">Popular Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories" className="read-more-btn">
        View All
      </Link>
    </div>
  )
}

export default DestinationsList
