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
          <img src="/images/author-large.jpg" alt="Portrait of the author" />
        </div>

        <div className="author-info">
          <h2 className="author-name">[Your Name]</h2>
          <p className="author-tagline">Mother's Day Blogger & Advocate</p>

          <div className="author-bio">
            <p>
              As a child, I always looked up to my mother as a source of wisdom and love. Growing up, I realized the
              power of a mother's influence and the extraordinary love that shapes our lives. This blog is a tribute to
              all mothers, celebrating their unwavering strength, wisdom, and unconditional love.
            </p>

            <p>
              My journey as a writer began with the desire to honor and acknowledge the immense contributions of mothers
              in shaping our communities. Through this platform, I share stories, tributes, and lessons I've learned from
              the women who raised me and the many mothers around the world.
            </p>

            <p>
              When I’m not writing or spending time with my family, you’ll find me advocating for women's rights and
              working towards a world where every mother is supported, celebrated, and appreciated.
            </p>

            <p>Thank you for visiting, and I hope this blog brings joy, inspiration, and love to you.</p>
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
            <h3>Mother's Day Tributes</h3>
            <p>
              Heartfelt tributes to mothers, celebrating their influence and the lessons they teach us. These stories
              highlight the unique relationship between mothers and their children.
            </p>
          </div>

          <div className="feature-item">
            <h3>Life Lessons from Moms</h3>
            <p>
              Sharing the valuable life lessons imparted by mothers, exploring how these lessons shape our values, choices,
              and relationships.
            </p>
          </div>

          <div className="feature-item">
            <h3>Messages of Love</h3>
            <p>
              Inspiring messages of love, encouragement, and gratitude, dedicated to mothers everywhere for the
              immeasurable love they give.
            </p>
          </div>

          <div className="feature-item">
            <h3>Personal Stories</h3>
            <p>Stories from my own life and the mothers who have made an impact on me and those around me.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

