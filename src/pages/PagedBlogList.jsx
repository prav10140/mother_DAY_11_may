"use client"

import { useParams } from "react-router-dom"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import blogData from "../data/blogData"
import "./CategoryPage.css" // Reuse the same styling

const PagedBlogList = () => {
  const { page } = useParams()
  const currentPage = Number.parseInt(page) || 1
  const postsPerPage = 3

  // Get posts for the current page
  const posts = blogData.getPostsByPage(currentPage, postsPerPage)
  const totalPages = blogData.getTotalPages(postsPerPage)

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
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>

        <aside className="sidebar">
          <div className="featured-categories">
            <h3 className="sidebar-title">Categories</h3>
            <ul className="category-list">
              <li>
                <a href="/category/stories">Stories</a>
              </li>
              <li>
                <a href="/category/poems">Poems</a>
              </li>
              <li>
                <a href="/category/letters">Letters</a>
              </li>
              <li>
                <a href="/category/memories">Memories</a>
              </li>
              <li>
                <a href="/category/recipes">Recipes</a>
              </li>
              <li>
                <a href="/category/tributes">Tributes</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PagedBlogList
