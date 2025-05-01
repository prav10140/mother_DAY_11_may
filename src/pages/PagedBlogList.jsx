// src/pages/PagedBlogList.jsx
"use client";

import { useParams, Link } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";
import Pagination from "../components/Pagination";
import blogData from "../data/blogData";
import "./CategoryPage.css"; // reuses your existing styles

const PagedBlogList = () => {
  const { page } = useParams();
  const currentPage = Number.parseInt(page, 10) || 1;
  const postsPerPage = 3;

  // total pages
  const totalPosts = blogData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // slice out the posts for this page
  const startIndex = (currentPage - 1) * postsPerPage;
  const posts = blogData.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">Blog Posts</h1>
        <p className="category-description">
          Page {currentPage} of {totalPages}
        </p>
      </header>

      <div className="category-content">
        <div className="main-content">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          ) : (
            <p>No posts found.</p>
          )}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>

        <aside className="sidebar">
          <div className="featured-categories">
            <h3 className="sidebar-title">Categories</h3>
            <ul className="category-list">
              <li><Link to="/category/stories">Stories</Link></li>
              <li><Link to="/category/poems">Poems</Link></li>
              <li><Link to="/category/letters">Letters</Link></li>
              <li><Link to="/category/memories">Memories</Link></li>
              <li><Link to="/category/recipes">Recipes</Link></li>
              <li><Link to="/category/tributes">Tributes</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PagedBlogList;
