import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import BlogPost from "./pages/BlogPost"
import CategoryPage from "./pages/CategoryPage"
import AboutPage from "./pages/AboutPage"
import ContributePage from "./pages/ContributePage"
import PagedBlogList from "./pages/PagedBlogList" // ✅ Add this
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contribute" element={<ContributePage />} />
            <Route path="/page/:page" element={<PagedBlogList />} /> {/* ✅ This line fixes your issue */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
