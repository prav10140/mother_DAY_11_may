"use client"

import { useState } from "react"
import "./ContributePage.css"

const ContributePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    title: "",
    content: "",
    relationship: "",
    image: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your contribution! Our team will review it shortly.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      category: "",
      title: "",
      content: "",
      relationship: "",
      image: null,
    })
  }

  return (
    <div className="contribute-page">
      <header className="contribute-header">
        <h1 className="contribute-title">Share Your Mother's Day Tribute</h1>
        <p className="contribute-description">
          Honor your mother or a maternal figure in your life by sharing your story, poem, letter, or memory. Your
          tribute may be featured on our blog to inspire others.
        </p>
      </header>

      <div className="contribute-content">
        <div className="contribute-guidelines">
          <h2>Submission Guidelines</h2>
          <ul>
            <li>Your tribute should be personal and heartfelt.</li>
            <li>Stories and letters should be between 300-1500 words.</li>
            <li>Poems can be any length but preferably under 50 lines.</li>
            <li>Include a high-quality image if possible (of you, your mother, or something symbolic).</li>
            <li>Be respectful and considerate in your writing.</li>
            <li>We may edit submissions for clarity, grammar, and length.</li>
          </ul>

          <div className="contribute-categories">
            <h3>Categories</h3>
            <p>Your tribute can fall into one of these categories:</p>
            <ul>
              <li>
                <strong>Stories:</strong> Personal narratives about your mother or maternal figure
              </li>
              <li>
                <strong>Poems:</strong> Original poetry dedicated to mothers
              </li>
              <li>
                <strong>Letters:</strong> Heartfelt messages to your mother
              </li>
              <li>
                <strong>Memories:</strong> Specific moments or memories you cherish
              </li>
              <li>
                <strong>Recipes:</strong> Family recipes passed down with their stories
              </li>
              <li>
                <strong>Traditions:</strong> Family traditions started by your mother
              </li>
            </ul>
          </div>
        </div>

        <div className="contribute-form">
          <h2>Submission Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select a category</option>
                <option value="stories">Stories</option>
                <option value="poems">Poems</option>
                <option value="letters">Letters</option>
                <option value="memories">Memories</option>
                <option value="recipes">Recipes</option>
                <option value="traditions">Traditions</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="title">Title of Your Tribute *</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="relationship">Relationship to the Person *</label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                placeholder="e.g., Daughter, Son, Grandchild"
                value={formData.relationship}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Your Tribute *</label>
              <textarea
                id="content"
                name="content"
                rows="10"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="image">Upload an Image (optional)</label>
              <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
              <small>Max file size: 5MB. Recommended dimensions: 1200x800 pixels.</small>
            </div>

            <div className="form-group checkbox">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                I consent to having my submission published on the Mother's Day Tributes blog and potentially shared on
                social media.
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Your Tribute
            </button>
          </form>
        </div>
      </div>

      <section className="featured-tributes">
        <h2>Featured Tributes</h2>
        <div className="tributes-grid">
          <div className="tribute-card">
           <img src="data:image/jpeg;base64,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 alt="Contributor" />

            <h3>"The Strength of a Mother's Love"</h3>
            <p>By Jennifer Adams</p>
          </div>
          <div className="tribute-card">
            <img src="data:image/jpeg;base64,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" alt="Contributor" />

            <h3>"Lessons from My Mother's Kitchen"</h3>
            <p>By Robert Chen</p>
          </div>
          <div className="tribute-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROINndjWnTbQlHllnTy-aS86Q6GwCFUbzj2bhLDFIOougybbEAp8usIP0&s" alt="Contributor" />

            <h3>"My Grandmother's Legacy"</h3>
            <p>By Maria Gonzalez</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContributePage
