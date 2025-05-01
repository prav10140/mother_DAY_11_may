// src/pages/CategoryPage.jsx
"use client";

import { useParams } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";
import Pagination from "../components/Pagination";
import AuthorBio from "../components/AuthorBio";
import DestinationsList from "../components/DestinationsList";
import blogData from "../data/blogData"; // Your array of posts
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  // Filter posts by matching slug-friendly category
  const categoryPosts = blogData.filter(
    (post) =>
      post.category.toLowerCase().replace(/\s+/g, "-") ===
      category.toLowerCase()
  );

  // Capitalize first letter for display
  const displayCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">{displayCategory}</h1>
        <p className="category-description">
          Explore our collection of articles about{" "}
          {displayCategory.toLowerCase()}.
        </p>
      </header>

      <div className="category-content">
        <div className="main-content">
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))
          ) : (
            <p className="no-posts-message">No posts found in this category.</p>
          )}

          {categoryPosts.length > 0 && (
            <Pagination
              currentPage={1}
              totalPages={Math.ceil(categoryPosts.length / 3)}
            />
          )}
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

