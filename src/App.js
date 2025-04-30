import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import CategoryPage from "./pages/CategoryPage"; // Added CategoryPage
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/category/:category/page/:pageNumber" element={<CategoryPage />} /> {/* Pagination added */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
