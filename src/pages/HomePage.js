import FeaturedPost from "../components/FeaturedPost"
import CategorySection from "../components/CategorySection"
import BlogPostCard from "../components/BlogPostCard"
import DestinationsList from "../components/DestinationsList"
import Pagination from "../components/Pagination"
import "./HomePage.css"
import { Link } from "react-router-dom"
import blogData from "../data/blogData"

const HomePage = () => {
  // Use the featured post from the data file
  const featuredPost = blogData.featuredPost

  // Get the first page of posts (3 posts per page)
  const recentPosts = blogData.getPostsByPage(1, 3)
  const totalPages = blogData.getTotalPages(3)

  // Add a writers section to the homepage
  return (
    <div className="home-page">
      <section className="hero-section">
        <FeaturedPost post={featuredPost} />
      </section>

      <CategorySection />

      <section className="recent-articles">
        <h2 className="section-title">Recent tributes</h2>
        <div className="articles-grid">
          <div className="main-content">
            {recentPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
            <Pagination currentPage={1} totalPages={totalPages} />
          </div>

          <aside className="sidebar">
            <div className="featured-writers">
              <h3 className="sidebar-title">Featured Writers</h3>
              <div className="writers-list">
                <div className="writer-item">
                  <img src="/placeholder.svg?height=80&width=80" alt="Sarah Johnson" className="writer-image" />
                  <h4>Sarah Johnson</h4>
                  <p>Mother of two, sharing stories about her journey through motherhood.</p>
                </div>
                <div className="writer-item">
                  <img src="/placeholder.svg?height=80&width=80" alt="Michael Chen" className="writer-image" />
                  <h4>Michael Chen</h4>
                  <p>Poet and son honoring his mother's influence on his life.</p>
                </div>
                <div className="writer-item">
                  <img src="/placeholder.svg?height=80&width=80" alt="Elena Rodriguez" className="writer-image" />
                  <h4>Elena Rodriguez</h4>
                  <p>Celebrating three generations of strong women in her family.</p>
                </div>
              </div>
              <Link to="/writers" className="read-more-btn">
                View All Writers
              </Link>
            </div>
            <DestinationsList />
          </aside>
        </div>
      </section>

      <section className="contribute-section">
        <div className="contribute-container">
          <h2>Share Your Mother's Day Tribute</h2>
          <p>Honor your mother or a maternal figure in your life by sharing your story, poem, or letter.</p>
          <Link to="/contribute" className="read-more-btn">
            Contribute Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
