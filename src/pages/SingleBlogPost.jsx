// src/pages/SingleBlogPost.jsx
"use client";

import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPinterest, FaLink } from "react-icons/fa";
import BlogPostCard from "../components/BlogPostCard";
import AuthorBio from "../components/AuthorBio";
import blogData from "../data/blogData";
import "./BlogPost.css";

const SingleBlogPost = () => {
  const { slug } = useParams();

  // 1) Find our main post
  const post = blogData.find((p) => p.slug === slug);

  // If not found, show a friendly message
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <p>Sorry, the blog post you’re looking for doesn’t exist.</p>
          <Link to="/" className="read-more-btn">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // 2) For each relatedPosts entry, look up the full post object by slug
  const relatedPosts = (post.relatedPosts || [])
    .map((r) => blogData.find((p) => p.slug === r.slug))
    .filter(Boolean);

  // Social share handlers
  const shareToFacebook = () =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  const shareToTwitter = () =>
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  const shareToPinterest = () =>
    window.open(
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  const shareToLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <header className="post-header">
          <Link
            to={`/category/${post.category.toLowerCase()}`}
            className="post-category"
          >
            {post.category}
          </Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-reading-time">{post.readingTime} reading</span>
          </div>
        </header>

        <div className="post-image">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            loading="lazy"
          />
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

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && (
          <div className="post-tags">
            <span>Tags:</span>
            {post.tags.map((tag, i) => (
              <Link
                to={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                key={i}
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2 className="section-title">You might also like</h2>
          <div className="related-posts-grid">
            {relatedPosts.map((rp) => (
              <BlogPostCard key={rp.slug} post={rp} />
            ))}
          </div>
        </section>
      )}

      <aside className="post-sidebar">
        <AuthorBio />
      </aside>
    </div>
  );
};

export default SingleBlogPost;
