"use client"
import { useParams } from "react-router-dom"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import AuthorBio from "../components/AuthorBio"
import DestinationsList from "../components/DestinationsList"
import "./CategoryPage.css"

const CategoryPage = () => {
  const { category } = useParams()

  // This would typically come from an API or CMS based on the category
  const categoryPosts = [
  {
    title: "10 Lessons My Mother Taught Me",
    slug: "life-lessons-from-mom",
    category: "Reflections",
    excerpt:
      "From resilience to unconditional love, these life lessons from my mom have helped shape the person I am today...",
    image: "/images/mom-lessons.jpg",
    readingTime: "5 minutes",
  },
  {
    title: "Heartwarming Stories of Mothers Around the World",
    slug: "mothers-around-world",
    category: "Tributes",
    excerpt:
      "This Mother's Day, explore inspiring stories of maternal strength and sacrifice from different cultures...",
    image: "/images/global-moms.jpg",
    readingTime: "7 minutes",
  },
  {
    title: "Why Every Day Should Be Mother’s Day",
    slug: "everyday-mothers-day",
    category: "Thoughts",
    excerpt:
      "A look at how we can carry the spirit of Mother's Day beyond one calendar date and show gratitude daily...",
    image: "/images/mothers-day-everyday.jpg",
    readingTime: "4 minutes",
  },
  {
    title: "Creative Ways to Celebrate Mother’s Day at Home",
    slug: "celebrate-at-home",
    category: "Lifestyle",
    excerpt:
      "From handwritten letters to DIY brunch, discover thoughtful and simple ideas to make mom feel special...",
    image: "/images/mothers-day-home.jpg",
    readingTime: "6 minutes",
  },
  {
    title: "Mother’s Day Through the Eyes of a Child",
    slug: "childs-perspective",
    category: "Stories",
    excerpt:
      "Remembering Mother's Day as a child—from messy breakfasts to heartfelt hugs. A nostalgic tribute to innocence and love...",
    image: "/images/child-mothers-day.jpg",
    readingTime: "5 minutes",
  },
]


  // Capitalize first letter of category for display
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">{displayCategory}</h1>
        <p className="category-description">
          Explore our collection of articles about {displayCategory.toLowerCase()}.
        </p>
      </header>

      <div className="category-content">
        <div className="main-content">
          {categoryPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
          <Pagination currentPage={1} totalPages={3} />
        </div>

        <aside className="sidebar">
          <AuthorBio />
          <DestinationsList />
        </aside>
      </div>
    </div>
  )
}

export default CategoryPage
