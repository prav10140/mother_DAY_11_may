"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaBars } from "react-icons/fa"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (searchOpen) setSearchOpen(false)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <button className="menu-button" onClick={toggleMenu}>
          <FaBars />
        </button>

        <div className="logo">
          <Link to="/">Mother's Day Tributes</Link>
        </div>

        <button className="search-button" onClick={toggleSearch}>
          <FaSearch />
        </button>
      </div>

      {menuOpen && (
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/category/stories" onClick={() => setMenuOpen(false)}>
                Stories
              </Link>
            </li>
            <li>
              <Link to="/category/poems" onClick={() => setMenuOpen(false)}>
                Poems
              </Link>
            </li>
            <li>
              <Link to="/category/letters" onClick={() => setMenuOpen(false)}>
                Letters
              </Link>
            </li>
            <li>
              <Link to="/category/memories" onClick={() => setMenuOpen(false)}>
                Memories
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contribute" onClick={() => setMenuOpen(false)}>
                Contribute
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {searchOpen && (
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Header
