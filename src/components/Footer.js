import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Follow me on Instagram</h3>
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
                <Link to="/category/travels">Travels</Link>
              </li>
              <li>
                <Link to="/category/foods">Foods</Link>
              </li>
              <li>
                <Link to="/category/guides">Guides</Link>
              </li>
              <li>
                <Link to="/category/stories">Stories</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Destinations</h4>
            <ul>
              <li>
                <Link to="/category/tokyo">Tokyo</Link>
              </li>
              <li>
                <Link to="/category/rome">Rome</Link>
              </li>
              <li>
                <Link to="/category/san-francisco">San Francisco</Link>
              </li>
              <li>
                <Link to="/category/san-jose">San Jose</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Personal Travel Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
