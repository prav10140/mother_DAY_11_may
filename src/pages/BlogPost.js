"use client";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPinterest, FaLink } from "react-icons/fa";
import BlogPostCard from "../components/BlogPostCard";
import AuthorBio from "../components/AuthorBio";
import blogData from "../data/blogData"; // Import the blog posts data
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();

  // Find the post that matches the slug from the blogData
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="error-page">
        <h2>Oops! The post you are looking for doesn't exist.</h2>
        <p>It might have been moved or deleted. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  // Social share functionality
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank');
  };

  const shareToPinterest = () => {
    window.open(`https://pinterest.com/pin/create/button/?url=${window.location.href}`, '_blank');
  };

  const shareToLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <header className="post-header">
          <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
            {post.category}
          </Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-reading-time">{post.readingTime} reading</span>
          </div>
        </header>

        <div className="post-image">
          <img src={post.image || "/placeholder.svg"} alt={post.title} loading="lazy" />
        </div>

        <div className="post-share">
          <span>Share:</span>
          <div className="share-buttons">
            <button onClick={shareToFacebook}>
              <FaFacebook />
            </button>
            <button onClick={shareToTwitter}>
              <FaTwitter />
            </button>
            <button onClick={shareToPinterest}>
              <FaPinterest />
            </button>
            <button onClick={shareToLink}>
              <FaLink />
            </button>
          </div>
        </div>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="post-tags">
          <span>Tags:</span>
          {post.tags && post.tags.map((tag, index) => (
            <Link to={`/tag/${tag}`} key={index}>{tag}</Link>
          ))}
        </div>
      </article>

      <section className="related-posts">
        <h2 className="section-title">You might also like</h2>
        <div className="related-posts-grid">
          {post.relatedPosts.map((relatedPost, index) => (
            <BlogPostCard key={index} post={relatedPost} />
          ))}
        </div>
      </section>

      <aside className="post-sidebar">
        <AuthorBio />
      </aside>
    </div>
  );
};

export default BlogPost;
