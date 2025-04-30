import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import "./AuthorBio.css"

const AuthorBio = () => {
  return (
    <div className="author-bio">
      <div className="author-image">
        <img src="/images/mothers-day-logo.jpg" alt="Mother's Day Tributes" />
      </div>
      <h3 className="author-name">Mother's Day Tributes</h3>
      <p className="author-description">
        This blog is dedicated to celebrating mothers and mother figures everywhere. We feature stories, poems, letters,
        and memories from writers around the world who want to honor the special women in their lives.
      </p>
      <div className="author-social">
        <h4>Follow us</h4>
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
    </div>
  )
}

export default AuthorBio
