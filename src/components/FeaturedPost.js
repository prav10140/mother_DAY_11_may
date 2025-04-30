import { Link } from "react-router-dom"
import "./FeaturedPost.css"

const FeaturedPost = ({ post }) => {
  return (
    <div className="featured-post">
      <div className="featured-image">
        <img src={post.image || "/placeholder.svg"} alt={post.title} />
        <div className="featured-navigation">
          <button className="nav-button prev">&#10094;</button>
          <button className="nav-button next">&#10095;</button>
        </div>
      </div>
      <div className="featured-content">
        <Link to={`/category/${post.category.toLowerCase()}`} className="category-link">
          {post.category}
        </Link>
        <h2 className="featured-title">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="featured-excerpt">{post.excerpt}</p>
        <Link to={`/post/${post.slug}`} className="read-more-btn">
          Read more
        </Link>
      </div>
    </div>
  )
}

export default FeaturedPost
