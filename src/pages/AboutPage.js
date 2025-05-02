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
          <img src="AUTHOR.jpg" alt="Portrait of the author" />
        </div>

        <div className="author-info">
          <h2 className="author-name">P R A V E E N'</h2>
          <p className="author-tagline">Student & Mother's Day Blogger</p>

          <div className="author-bio">
            <p>
              I'm a student passionate about technology, writing, and learning new things. Growing up, I've always been inspired by the strength, love, and wisdom that mothers bring to the world. This blog is a small way to honor that influence, especially during Mother's Day.
            </p>

            <p>
              Through my posts, I share personal stories, lessons from the women who raised me, and tributes to mothers everywhere. Writing is my way of celebrating the incredible role mothers play in shaping lives and communities.
            </p>

            <p>
              Outside of blogging, I'm focused on my studies in Electronics and Communication Engineering, and I love coding and working on projects. I also advocate for causes that support women and empower mothers.
            </p>

            <p>Thank you for visiting, and I hope my blog brings a bit of joy, inspiration, and appreciation for mothers into your life!</p>
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
              Heartfelt tributes to mothers, celebrating their influence and the lessons they teach us.
            </p>
          </div>

          <div className="feature-item">
            <h3>Life Lessons from Moms</h3>
            <p>
              Sharing the valuable life lessons imparted by mothers, and how these lessons shape our choices and values.
            </p>
          </div>

          <div className="feature-item">
            <h3>Messages of Love</h3>
            <p>
              Inspiring messages of love, encouragement, and gratitude for mothers everywhere.
            </p>
          </div>

          <div className="feature-item">
            <h3>Personal Stories</h3>
            <p>Sharing my own experiences and stories of the mothers who have shaped my life.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
