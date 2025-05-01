import { Link } from "react-router-dom"
import "./BlogPostCard.css"

const BlogPostCard = ({ post }) => {
  return (
    <article className="blog-post-card">
      <div className="post-image">
        <Link to={`/blog/${post.slug}`}>
          <img src={post.image || "/placeholder.svg"} alt={post.title} />
        </Link>
      </div>
      <div className="post-content">
        <div className="post-meta">
          <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
            #{post.category}
          </Link>
          <span className="post-reading-time">{post.readingTime} reading</span>
        </div>
        <h3 className="post-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-footer">
          {post.author && <span className="post-author">By {post.author}</span>}
          <Link to={`/blog/${post.slug}`} className="read-more-btn">
            Read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard
