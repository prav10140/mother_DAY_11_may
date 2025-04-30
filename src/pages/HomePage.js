import { Link } from "react-router-dom"
import FeaturedPost from "../components/FeaturedPost"
import CategorySection from "../components/CategorySection"
import BlogPostCard from "../components/BlogPostCard"
import AuthorBio from "../components/AuthorBio"
import DestinationsList from "../components/DestinationsList"
import Pagination from "../components/Pagination"
import "./HomePage.css"

const HomePage = () => {
  // This would typically come from an API or CMS
  const featuredPost = {
    title: "A Heartfelt Tribute to My Mother",
    slug: "mothers-day-tribute",
    category: "Life & Reflections",
    excerpt: "On this Mother’s Day, I pause to honor the woman whose love, strength, and sacrifices have shaped my world...",
    image: "/images/mothers-day-featured.jpg",
  }

  const recentPosts = [
    {
      title: "10 Lessons My Mother Taught Me",
      slug: "life-lessons-from-mom",
      category: "Life Advice",
      excerpt: "From resilience to kindness, here are the most important lessons I’ve learned from my mom over the years...",
      image: "/images/coventry.jpg",
      readingTime: "8 minutes",
    },
    {
      title: "Why Moms Are Everyday Superheroes",
      slug: "moms-are-superheroes",
      category: "Inspiration",
      excerpt: "They may not wear capes, but mothers have a power and presence that lift everyone around them...",
      image: "/images/mom-superhero.jpg",
      readingTime: "4 minutes",
    },
    {
      title: "Mother’s Day Gift Ideas with Meaning",
      slug: "mothers-day-gifts",
      category: "Lifestyle",
      excerpt: "This Mother’s Day, go beyond the ordinary—here are heartfelt gift ideas that show your mom just how much you care...",
      image: "/images/gift-ideas.jpg",
      readingTime: "6 minutes",
    },
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <FeaturedPost post={featuredPost} />
      </section>

      <CategorySection />

      <section className="recent-articles">
        <h2 className="section-title">Recent articles</h2>
        <div className="articles-grid">
          <div className="main-content">
            {recentPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
            <Pagination currentPage={1} totalPages={14} />
          </div>

          <aside className="sidebar">
            <AuthorBio />
            <DestinationsList />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default HomePage
