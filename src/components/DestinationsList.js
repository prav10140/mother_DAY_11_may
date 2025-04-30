import { Link } from "react-router-dom"
import "./DestinationsList.css"

const DestinationsList = () => {
  const destinations = [
    { name: "Tokyo", slug: "tokyo" },
    { name: "Rome", slug: "rome" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "San Jose", slug: "san-jose" },
  ]

  return (
    <div className="destinations-list">
      <h3 className="destinations-title">Destinations</h3>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>
            <Link to={`/category/${destination.slug}`}>{destination.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/destinations" className="read-more-btn">
        Read more
      </Link>
    </div>
  )
}

export default DestinationsList
