"use client"
import { useParams, Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaPinterest, FaLink } from "react-icons/fa"
import BlogPostCard from "../components/BlogPostCard"
import AuthorBio from "../components/AuthorBio"
import "./BlogPost.css"

const BlogPost = () => {
  const { slug } = useParams()

  // In a real app, you would fetch the post data based on the slug
  // This is mock data for demonstration
  const post = {
    title: "When Is The Best Time of Year To Visit Japan?",
    slug: "best-time-to-visit-japan",
    category: "Travel",
    date: "May 15, 2023",
    author: "Jaspreet Bhamrai",
    readingTime: "8 minutes",
    image: "/images/japan-featured.jpg",
    content: `
      <p>The most news for travelers is that there is no single best time of year to travel to Japan. Each of Japan's four distinct seasons has its own special charm and attractions.</p>
      
      <h2>Spring (March to May)</h2>
      <p>Spring is one of the most popular times to visit Japan, largely due to the cherry blossoms that bloom across the country. The cherry blossom season typically begins in late March in Tokyo and can last until early May in northern regions like Hokkaido.</p>
      <p>Pros:</p>
      <ul>
        <li>Cherry blossoms in full bloom</li>
        <li>Mild, comfortable temperatures</li>
        <li>Many festivals and events</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Very crowded, especially during cherry blossom season</li>
        <li>Higher prices for accommodations and flights</li>
        <li>Need to book well in advance</li>
      </ul>
      
      <h2>Summer (June to August)</h2>
      <p>Summer in Japan can be hot and humid, but it's also festival season with many exciting events happening throughout the country.</p>
      <p>Pros:</p>
      <ul>
        <li>Vibrant festivals and firework displays</li>
        <li>Good time for hiking in mountainous regions</li>
        <li>Less crowded than spring and fall</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Hot and humid weather, especially in cities</li>
        <li>Rainy season (typically June to mid-July)</li>
        <li>Typhoon season begins in August</li>
      </ul>
      
      <h2>Fall (September to November)</h2>
      <p>Fall is another popular time to visit Japan, as the autumn foliage creates stunning landscapes across the country.</p>
      <p>Pros:</p>
      <ul>
        <li>Beautiful autumn colors</li>
        <li>Comfortable temperatures</li>
        <li>Harvest season means delicious food</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Popular destinations can be crowded</li>
        <li>Prices increase during peak foliage times</li>
        <li>Typhoon season continues through September</li>
      </ul>
      
      <h2>Winter (December to February)</h2>
      <p>Winter in Japan offers a different experience, with snow festivals, hot springs, and excellent skiing opportunities.</p>
      <p>Pros:</p>
      <ul>
        <li>World-class skiing and snowboarding</li>
        <li>Fewer tourists (except during New Year)</li>
        <li>Beautiful snow scenes, especially in rural areas</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Cold temperatures, especially in northern Japan</li>
        <li>Some attractions may have limited hours or be closed</li>
        <li>New Year holiday (late December to early January) is very busy</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The best time to visit Japan depends on what you want to experience. If seeing cherry blossoms is a priority, plan for spring. For autumn foliage, aim for fall. If you enjoy winter sports, winter is ideal. And if you want to experience Japanese festivals, summer might be your best bet despite the heat and humidity.</p>
      <p>Regardless of when you choose to visit, Japan offers unique experiences year-round that will make your trip memorable.</p>
    `,
    relatedPosts: [
      {
        title: "Planning a Trip to Japan in the Time of Covid",
        slug: "japan-trip-covid",
        category: "Guides",
        excerpt:
          "Whether you're just daydreaming for the moment, or planning a trip, compiled essential information about visiting Japan in the time of COVID-19...",
        image: "/images/japan-covid.jpg",
        readingTime: "6 minutes",
      },
      {
        title: "Top 10 Must-Visit Destinations in Tokyo",
        slug: "tokyo-destinations",
        category: "Travel",
        excerpt:
          "Tokyo is a vast metropolis with countless attractions. Here are the top 10 places you shouldn't miss on your visit...",
        image: "/images/tokyo.jpg",
        readingTime: "7 minutes",
      },
    ],
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <header className="post-header">
          <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
            {post.category}
          </Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-reading-time">{post.readingTime} reading</span>
          </div>
        </header>

        <div className="post-image">
          <img src={post.image || "/placeholder.svg"} alt={post.title} />
        </div>

        <div className="post-share">
          <span>Share:</span>
          <div className="share-buttons">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaPinterest />
            </button>
            <button>
              <FaLink />
            </button>
          </div>
        </div>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="post-tags">
          <span>Tags:</span>
          <Link to="/tag/japan">Japan</Link>
          <Link to="/tag/travel-tips">Travel Tips</Link>
          <Link to="/tag/seasons">Seasons</Link>
        </div>
      </article>

      <section className="related-posts">
        <h2 className="section-title">You might also like</h2>
        <div className="related-posts-grid">
          {post.relatedPosts.map((relatedPost, index) => (
            <BlogPostCard key={index} post={relatedPost} />
          ))}
        </div>
      </section>

      <aside className="post-sidebar">
        <AuthorBio />
      </aside>
    </div>
  )
}

export default BlogPost
