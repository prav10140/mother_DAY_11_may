import { useParams } from "react-router-dom";
import { useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import Pagination from "../components/Pagination";
import AuthorBio from "../components/AuthorBio";
import DestinationsList from "../components/DestinationsList";
import blogPosts from "../data/blogPosts";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts by category
  const categoryPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );

  // Calculate pagination values
  const postsPerPage = 3;
  const totalPages = Math.ceil(categoryPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = categoryPosts.slice(startIndex, startIndex + postsPerPage);

  // Capitalize the first letter of category
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">{displayCategory}</h1>
        <p className="category-description">
          Explore our collection of articles about {displayCategory.toLowerCase()}.
        </p>
      </header>

      <div className="category-content">
        <div className="main-content">
          {currentPosts.length === 0 ? (
            <p>No posts available in this category.</p>
          ) : (
            currentPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <aside className="sidebar">
          <AuthorBio />
          <DestinationsList />
        </aside>
      </div>
    </div>
  );
};

export default CategoryPage;
