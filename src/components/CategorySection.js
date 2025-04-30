import { Link } from "react-router-dom"
import "./CategorySection.css"

const CategorySection = () => {
  const categories = [
    { name: "Travels", image: "/images/category-travels.jpg" },
    { name: "Foods", image: "/images/category-foods.jpg" },
    { name: "Guides", image: "/images/category-guides.jpg" },
    { name: "Stories", image: "/images/category-stories.jpg" },
    { name: "Cities", image: "/images/category-cities.jpg" },
    { name: "Countries", image: "/images/category-countries.jpg" },
    { name: "Vlogs", image: "/images/category-vlogs.jpg" },
  ]

  return (
    <section className="category-section">
      <h2 className="section-title">Explore by category</h2>

      <div className="category-navigation">
        <div className="categories-container">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name.toLowerCase()}`} className="category-item" key={index}>
              <div className="category-image">
                <img src={category.image || "/placeholder.svg"} alt={category.name} />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
        <div className="category-controls">
          <button className="category-nav prev">&#10094;</button>
          <button className="category-nav next">&#10095;</button>
        </div>
      </div>
    </section>
  )
}

export default CategorySection
