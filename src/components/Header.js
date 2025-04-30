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
          <Link to="/">Mother's Day Tribute Blog</Link>
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
              <Link to="/category/mothers-day-tributes" onClick={() => setMenuOpen(false)}>
                Mother's Day Tributes
              </Link>
            </li>
            <li>
              <Link to="/category/lessons-from-moms" onClick={() => setMenuOpen(false)}>
                Lessons from Moms
              </Link>
            </li>
            <li>
              <Link to="/category/personal-stories" onClick={() => setMenuOpen(false)}>
                Personal Stories
              </Link>
            </li>
            <li>
              <Link to="/category/messages-of-love" onClick={() => setMenuOpen(false)}>
                Messages of Love
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {searchOpen && (
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search tributes..." />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Header
