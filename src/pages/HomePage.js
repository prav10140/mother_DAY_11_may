import FeaturedPost from "../components/FeaturedPost"
import CategorySection from "../components/CategorySection"
import BlogPostCard from "../components/BlogPostCard"
import DestinationsList from "../components/DestinationsList"
import Pagination from "../components/Pagination"
import "./HomePage.css"
import { Link } from "react-router-dom"

const HomePage = () => {
  // Update the featured post and recent posts to be Mother's Day related
  const featuredPost = {
    title: "A Letter to My Mom: Thank You for Everything",
    slug: "letter-to-mom-thank-you",
    category: "Letters",
    excerpt:
      "Mom, words cannot express how grateful I am for all the sacrifices you've made and the love you've shown me throughout my life...",
    image: "https://img.freepik.com/premium-vector/hand-drawn-illustration-mother-child-mothers-day_278222-10960.jpg?semt=ais_hybrid&w=740",
  }

  const recentPosts = [
    {
      title: "The Lessons My Mother Taught Me That I'll Never Forget",
      slug: "lessons-from-mother",
      category: "Stories",
      excerpt:
        "My mother wasn't one for long lectures, but the quiet lessons she taught through her actions have shaped who I am today...",
      image: "/images/mother-lessons.jpg",
      readingTime: "8 minutes",
      author: "Sarah Johnson",
    },
    {
      title: "A Poem for the Woman Who Raised Me",
      slug: "poem-for-mom",
      category: "Poems",
      excerpt:
        "In the quiet moments of dawn, I think of you. Your hands, weathered by time but gentle in their touch, have guided me through life's storms...",
      image: "/images/mother-poem.jpg",
      readingTime: "5 minutes",
      author: "Michael Chen",
    },
    {
      title: "Celebrating My Grandmother: The Matriarch of Our Family",
      slug: "celebrating-grandmother",
      category: "Tributes",
      excerpt:
        "My grandmother raised eight children during times of hardship, yet she never lost her smile or her ability to make everyone feel special...",
      image: "/images/grandmother.jpg",
      readingTime: "10 minutes",
      author: "Elena Rodriguez",
    },
  ]

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
              <BlogPostCard key={index} post={post} />
            ))}
            <Pagination currentPage={1} totalPages={14} />
          </div>

          <aside className="sidebar">
            <div className="featured-writers">
              <h3 className="sidebar-title">Featured Writers</h3>
              <div className="writers-list">
                <div className="writer-item">
                  <img src="/images/writer-sarah.jpg" alt="Sarah Johnson" className="writer-image" />
                  <h4>Sarah Johnson</h4>
                  <p>Mother of two, sharing stories about her journey through motherhood.</p>
                </div>
                <div className="writer-item">
                  <img src="/images/writer-michael.jpg" alt="Michael Chen" className="writer-image" />
                  <h4>Michael Chen</h4>
                  <p>Poet and son honoring his mother's influence on his life.</p>
                </div>
                <div className="writer-item">
                  <img src="/images/writer-elena.jpg" alt="Elena Rodriguez" className="writer-image" />
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
