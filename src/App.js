// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import BlogPost from "./pages/BlogPost"
import CategoryPage from "./pages/CategoryPage"
import AboutPage from "./pages/AboutPage"
import ContributePage from "./pages/ContributePage"
import PagedBlogList from "./pages/PagedBlogList"
import ScrollToTop from "./components/ScrollToTop"  // Import ScrollToTop component
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <ScrollToTop />  {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/page/:page" element={<PagedBlogList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
