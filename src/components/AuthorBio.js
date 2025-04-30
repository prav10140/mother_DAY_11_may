import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./AuthorBio.css";

const AuthorBio = () => {
  return (
    <div className="author-bio">
      <div className="author-image">
        <img src="/images/author.jpg" alt="Praveen" />
      </div>
      <h3 className="author-name">Praveen</h3>
      <p className="author-description">
        A heartfelt tribute to the unsung heroes – mothers. I'm passionate about sharing stories and messages of love
        and gratitude to honor mothers everywhere. This blog is my small way of celebrating the incredible strength,
        sacrifice, and unconditional love that mothers provide. Through these words, I aim to express the emotions that
        words often fail to capture.
      </p>
      <div className="author-social">
        <h4>Follow me</h4>
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
  );
};

export default AuthorBio;
