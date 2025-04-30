import { useParams, useEffect, useState } from "react";
import FeaturedPost from "../components/FeaturedPost";
import CategorySection from "../components/CategorySection";
import BlogPostCard from "../components/BlogPostCard";
import AuthorBio from "../components/AuthorBio";
import DestinationsList from "../components/DestinationsList";
import Pagination from "../components/Pagination";
import "./HomePage.css";

const HomePage = () => {
  const { pageNumber } = useParams();
  const currentPage = pageNumber ? parseInt(pageNumber) : 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 3;

  useEffect(() => {
    // Fetch the posts from your API or database
    fetch(`/api/posts?page=${currentPage}&limit=${postsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);  // Assuming your API returns a list of posts
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const totalPosts = posts.length > 0 ? posts.length : 0; // Get total number of posts
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="home-page">
      <section className="hero-section">
        {currentPosts.length > 0 && <FeaturedPost post={currentPosts[0]} />}
      </section>

      <CategorySection />

      <section className="recent-articles">
        <h2 className="section-title">Recent articles</h2>
        <div className="articles-grid">
          <div className="main-content">
            {loading ? (
              <p>Loading posts...</p>
            ) : (
              currentPosts.map((post, index) => (
                <BlogPostCard key={index} post={post} />
              ))
            )}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>

          <aside className="sidebar">
            <AuthorBio />
            <DestinationsList />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
