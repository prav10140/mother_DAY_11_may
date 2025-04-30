"use client";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPinterest, FaLink } from "react-icons/fa";
import BlogPostCard from "../components/BlogPostCard";
import AuthorBio from "../components/AuthorBio";
import blogPosts from "../data/blogPosts"; // Import the blog posts data
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();

  // Find the post that matches the slug from the blogPosts data
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>; // Handle case when post is not found
  }

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
          <img src={post.image || "/placeholder.svg"} alt={post.title} />
        </div>

        <div className="post-share">
          <span>Share:</span>
          <div className="share-buttons">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaPinterest />
            </button>
            <button>
              <FaLink />
            </button>
          </div>
        </div>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="post-tags">
          <span>Tags:</span>
          <Link to="/tag/japan">Japan</Link>
          <Link to="/tag/travel-tips">Travel Tips</Link>
          <Link to="/tag/seasons">Seasons</Link>
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
