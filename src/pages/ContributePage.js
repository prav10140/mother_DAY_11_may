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
           <img src="abc.jpg" alt="Contributor" />

            <h3>"The Strength of a Mother's Love"</h3>
            <p>By Jennifer Adams</p>
          </div>
          <div className="tribute-card">
            <img src="abc.jpg" alt="Contributor" />

            <h3>"Lessons from My Mother's Kitchen"</h3>
            <p>By Robert Chen</p>
          </div>
          <div className="tribute-card">
            <img src="abc.jpg" alt="Contributor" />

            <h3>"My Grandmother's Legacy"</h3>
            <p>By Maria Gonzalez</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContributePage
