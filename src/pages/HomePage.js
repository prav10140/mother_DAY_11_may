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
    title: "When Is The Best Time of Year To Visit Japan?",
    slug: "best-time-to-visit-japan",
    category: "Travel",
    excerpt: "The most news for travelers is that there is no single best time of year to travel to Japan...",
    image: "/images/japan-featured.jpg",
  }

  const recentPosts = [
    {
      title: "Coventry City Guide Including Coventry Hotels",
      slug: "coventry-city-guide",
      category: "Guides",
      excerpt:
        "The diseases most commonly seen in travelers are diarrhea, malaria (if you travel to a malaria-endemic area), accident-related injuries, and respiratory infections...",
      image: "/images/coventry.jpg",
      readingTime: "8 minutes",
    },
    {
      title: "Planning a Trip to Japan in the Time of Covid",
      slug: "japan-trip-covid",
      category: "Guides",
      excerpt:
        "Whether you're just daydreaming for the moment, or planning a trip, compiled essential information about visiting Japan in the time of COVID-19...",
      image: "/images/japan-covid.jpg",
      readingTime: "6 minutes",
    },
    {
      title: "How to Choose an African Safari (That's Right for You)",
      slug: "choose-african-safari",
      category: "Guides",
      excerpt:
        "In my time exploring the heart of Africa, I have come to realize that there's a different type of safari for every kind of traveler. To fashion your own dream African adventure, it's all about prioritizing...",
      image: "/images/african-safari.jpg",
      readingTime: "10 minutes",
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
