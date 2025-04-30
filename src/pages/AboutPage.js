import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">About Me</h1>
      </header>

      <div className="about-content">
        <div className="author-image">
          <img src="/images/author-large.jpg" alt="Jaspreet Bhamrai" />
        </div>

        <div className="author-info">
          <h2 className="author-name">Jaspreet Bhamrai</h2>
          <p className="author-tagline">Travel Writer & Photographer</p>

          <div className="author-bio">
            <p>
              For as long as I can remember I've been obsessed with the idea of travel. I was always that person who was
              forever daydreaming of faraway destinations and planning my next adventure.
            </p>

            <p>
              After graduating from university with a degree in Journalism, I decided to take a gap year to explore
              Asia. That one year turned into three, and I found myself completely captivated by the diverse cultures,
              landscapes, and cuisines I encountered.
            </p>

            <p>
              I started this blog in 2018 to share my travel experiences and provide practical advice to fellow
              travelers. My goal is to inspire others to step out of their comfort zones and explore the world, while
              also promoting responsible and sustainable tourism.
            </p>

            <p>
              When I'm not traveling or writing, you can find me hiking in the mountains, experimenting with recipes
              I've learned abroad, or planning my next adventure.
            </p>

            <p>Thank you for joining me on this journey!</p>
          </div>

          <div className="author-social">
            <h3>Connect with me</h3>
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
      </div>

      <section className="about-features">
        <h2 className="section-title">What I Write About</h2>

        <div className="features-grid">
          <div className="feature-item">
            <h3>Travel Guides</h3>
            <p>
              Detailed guides to help you plan your trips, including where to stay, what to eat, and what to see in
              destinations around the world.
            </p>
          </div>

          <div className="feature-item">
            <h3>Cultural Experiences</h3>
            <p>Stories about local traditions, festivals, and cultural practices I've encountered during my travels.</p>
          </div>

          <div className="feature-item">
            <h3>Food Adventures</h3>
            <p>
              Explorations of local cuisines, street food, cooking classes, and food markets from different countries.
            </p>
          </div>

          <div className="feature-item">
            <h3>Photography Tips</h3>
            <p>Advice on capturing the best travel photos, equipment recommendations, and editing techniques.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
