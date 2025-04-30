// src/data/blogPosts.js
const blogPosts = [
  {
    title: "When Is The Best Time of Year To Visit Japan?",
    slug: "best-time-to-visit-japan",
    category: "Travel",
    date: "May 15, 2023",
    author: "Jaspreet Bhamrai",
    readingTime: "8 minutes",
    image: "/images/japan-featured.jpg",
    content: `
      <p>The most news for travelers is that there is no single best time of year to travel to Japan...</p>
      <!-- continue full content here -->
    `,
    relatedPosts: [
      {
        title: "Planning a Trip to Japan in the Time of Covid",
        slug: "japan-trip-covid",
        category: "Guides",
        excerpt: "Whether you're just daydreaming for the moment...",
        image: "/images/japan-covid.jpg",
        readingTime: "6 minutes",
      },
      {
        title: "Top 10 Must-Visit Destinations in Tokyo",
        slug: "tokyo-destinations",
        category: "Travel",
        excerpt: "Tokyo is a vast metropolis with countless attractions...",
        image: "/images/tokyo.jpg",
        readingTime: "7 minutes",
      },
    ],
  },
  // Add more posts here if needed
]

export default blogPosts;
