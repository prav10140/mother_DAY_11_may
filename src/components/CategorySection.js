import { useState } from "react"
import { Link } from "react-router-dom"
import "./CategorySection.css"

const CategorySection = () => {
  const categories = [
    { name: "Mother's Day Gifts", image: "/images/category-gifts.jpg" },
    { name: "Motherhood Stories", image: "/images/category-stories.jpg" },
    { name: "DIY Crafts", image: "/images/category-crafts.jpg" },
    { name: "Mother's Day Recipes", image: "/images/category-recipes.jpg" },
    { name: "Activities & Games", image: "/images/category-activities.jpg" },
    { name: "Gift Ideas for Moms", image: "/images/category-gift-ideas.jpg" },
    { name: "Personal Tributes", image: "/images/category-tributes.jpg" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="category-section">
      <h2 className="section-title">Explore Mother's Day Blog Categories</h2>

      <div className="category-navigation">
        <div className="categories-container">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name.replace(/\s+/g, '-').toLowerCase()}`} className="category-item" key={index}>
              <div className="category-image">
                <img src={category.image || "/placeholder.svg"} alt={category.name} />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
        <div className="category-controls">
          <button className="category-nav prev" onClick={handlePrev}>&#10094;</button>
          <button className="category-nav next" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </section>
  )
}

export default CategorySection
