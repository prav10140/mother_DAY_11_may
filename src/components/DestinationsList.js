import { Link } from "react-router-dom";
import "./DestinationsList.css";

const DestinationsList = () => {
  const categories = [
    { name: "Mother's Day Tributes", slug: "mothers-day-tributes" },
    { name: "Lessons from Moms", slug: "lessons-from-moms" },
    { name: "Personal Stories", slug: "personal-stories" },
    { name: "Messages of Love", slug: "messages-of-love" },
  ];

  return (
    <div className="destinations-list">
      <h3 className="destinations-title">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories" className="read-more-btn">
        Read more
      </Link>
    </div>
  );
};

export default DestinationsList;
