"use client";
import { useParams } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";
import Pagination from "../components/Pagination";
import AuthorBio from "../components/AuthorBio";
import DestinationsList from "../components/DestinationsList";
import blogPosts from "../data/blogPosts"; // ✅ import here
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  // ✅ Filter posts based on the category from the URL
  const categoryPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );

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
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))
          ) : (
            <p>No posts available for this category.</p>
          )}
          <Pagination currentPage={1} totalPages={1} />
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
