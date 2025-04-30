import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import "./AuthorBio.css"

const AuthorBio = () => {
  return (
    <div className="author-bio">
      <div className="author-image">
        <img src="/images/author.jpg" alt="Jaspreet Bhamrai" />
      </div>
      <h3 className="author-name">Jaspreet Bhamrai</h3>
      <p className="author-description">
        For as long as I can remember I've been obsessed with the idea of travel. I was always that person who was
        forever daydreaming of faraway destinations and planning my next adventure. I started this blog to share my
        travel experiences that would challenge my perceptions and help me gain a deeper understanding of the world.
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
  )
}

export default AuthorBio
