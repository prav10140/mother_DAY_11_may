import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";

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
                <Link to="/category/mothers-day-tributes">Mother's Day Tributes</Link>
              </li>
              <li>
                <Link to="/category/lessons-from-moms">Lessons from Moms</Link>
              </li>
              <li>
                <Link to="/category/personal-stories">Personal Stories</Link>
              </li>
              <li>
                <Link to="/category/messages-of-love">Messages of Love</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Tributes</h4>
            <ul>
              <li>
                <Link to="/category/gratitude">Gratitude for Mom</Link>
              </li>
              <li>
                <Link to="/category/love-and-care">Love and Care</Link>
              </li>
              <li>
                <Link to="/category/life-lessons">Life Lessons from Moms</Link>
              </li>
              <li>
                <Link to="/category/inspiring-stories">Inspiring Mom Stories</Link>
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
          <p>&copy; {new Date().getFullYear()} Mother's Day Tribute Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
