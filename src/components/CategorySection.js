import { Link } from "react-router-dom"
import "./CategorySection.css"

const CategorySection = () => {
  // Update the categories to be Mother's Day related
  const categories = [
    { name: "Stories", image: "/images/category-stories.jpg" },
    { name: "Poems", image: "/images/category-poems.jpg" },
    { name: "Letters", image: "/images/category-letters.jpg" },
    { name: "Memories", image: "/images/category-memories.jpg" },
    { name: "Recipes", image: "/images/category-recipes.jpg" },
    { name: "Traditions", image: "/images/category-traditions.jpg" },
    { name: "Tributes", image: "/images/category-tributes.jpg" },
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
