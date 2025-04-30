import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Share Your Mother's Day Tribute</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li>
                <Link to="/category/stories">Stories</Link>
              </li>
              <li>
                <Link to="/category/poems">Poems</Link>
              </li>
              <li>
                <Link to="/category/letters">Letters</Link>
              </li>
              <li>
                <Link to="/category/memories">Memories</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Tributes</h4>
            <ul>
              <li>
                <Link to="/category/first-time-moms">First-Time Moms</Link>
              </li>
              <li>
                <Link to="/category/grandmothers">Grandmothers</Link>
              </li>
              <li>
                <Link to="/category/single-moms">Single Moms</Link>
              </li>
              <li>
                <Link to="/category/mother-figures">Mother Figures</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contribute">Contribute</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mother's Day Tributes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
