import { useParams } from "react-router-dom"
import FeaturedPost from "../components/FeaturedPost"
import CategorySection from "../components/CategorySection"
import BlogPostCard from "../components/BlogPostCard"
import AuthorBio from "../components/AuthorBio"
import DestinationsList from "../components/DestinationsList"
import Pagination from "../components/Pagination"
import "./HomePage.css"

const HomePage = () => {
  const { pageNumber } = useParams() // Get page number from URL
  const currentPage = pageNumber ? parseInt(pageNumber) : 1 // Default to page 1 if no pageNumber is found

  // Dummy data for posts
  const postsPerPage = 3
  const allPosts = [
    {
      title: "10 Lessons My Mother Taught Me",
      slug: "life-lessons-from-mom",
      category: "Life Advice",
      excerpt:
        "From resilience to kindness, here are the most important lessons I’ve learned from my mom over the years...",
      image: "/images/coventry.jpg",
      readingTime: "8 minutes",
    },
    {
      title: "Why Moms Are Everyday Superheroes",
      slug: "moms-are-superheroes",
      category: "Inspiration",
      excerpt:
        "They may not wear capes, but mothers have a power and presence that lift everyone around them...",
      image: "/images/mom-superhero.jpg",
      readingTime: "4 minutes",
    },
    {
      title: "Mother’s Day Gift Ideas with Meaning",
      slug: "mothers-day-gifts",
      category: "Lifestyle",
      excerpt:
        "This Mother’s Day, go beyond the ordinary—here are heartfelt gift ideas that show your mom just how much you care...",
      image: "/images/gift-ideas.jpg",
      readingTime: "6 minutes",
    },
    // Add more posts here...
  ]

  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Get the posts for the current page
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="home-page">
      <section className="hero-section">
        <FeaturedPost post={currentPosts[0]} />
      </section>

      <CategorySection />

      <section className="recent-articles">
        <h2 className="section-title">Recent articles</h2>
        <div className="articles-grid">
          <div className="main-content">
            {currentPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
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
