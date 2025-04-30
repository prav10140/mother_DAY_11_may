"use client"
import { useParams } from "react-router-dom"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import AuthorBio from "../components/AuthorBio"
import DestinationsList from "../components/DestinationsList"
import "./CategoryPage.css"

const CategoryPage = () => {
  const { category } = useParams()

  // This would typically come from an API or CMS based on the category
  const categoryPosts = [
    {
      title: "Coventry City Guide Including Coventry Hotels",
      slug: "coventry-city-guide",
      category: "Guides",
      excerpt:
        "The diseases most commonly seen in travelers are diarrhea, malaria (if you travel to a malaria-endemic area), accident-related injuries, and respiratory infections...",
      image: "/images/coventry.jpg",
      readingTime: "8 minutes",
    },
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
      title: "How to Choose an African Safari (That's Right for You)",
      slug: "choose-african-safari",
      category: "Guides",
      excerpt:
        "In my time exploring the heart of Africa, I have come to realize that there's a different type of safari for every kind of traveler. To fashion your own dream African adventure, it's all about prioritizing...",
      image: "/images/african-safari.jpg",
      readingTime: "10 minutes",
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
    {
      title: "The Ultimate Guide to Street Food in Bangkok",
      slug: "bangkok-street-food",
      category: "Food",
      excerpt:
        "Bangkok is a paradise for food lovers. From pad thai to mango sticky rice, here's your guide to the best street food in the city...",
      image: "/images/bangkok-food.jpg",
      readingTime: "9 minutes",
    },
  ]

  // Capitalize first letter of category for display
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="category-title">{displayCategory}</h1>
        <p className="category-description">
          Explore our collection of articles about {displayCategory.toLowerCase()}.
        </p>
      </header>

      <div className="category-content">
        <div className="main-content">
          {categoryPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
          <Pagination currentPage={1} totalPages={3} />
        </div>

        <aside className="sidebar">
          <AuthorBio />
          <DestinationsList />
        </aside>
      </div>
    </div>
  )
}

export default CategoryPage
