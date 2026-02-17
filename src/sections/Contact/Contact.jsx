import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mblzzgaa", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="contact-badge">Available for Work</span>
          <h2 className="contact-title">Let’s Build Something <span className="cyan-glow">Great</span></h2>
          <p className="contact-subtitle">Have a project in mind? Reach out and let's start a conversation.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-visual-info">
            <div className="info-card">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <label>Email Me</label>
                  <p>thaiyalnath2005@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <label>Location</label>
                  <p>Bengaluru, Karnataka</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <label>Call Me</label>
                  <p>+91 9345854158</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <a href="https://github.com/thaiyalnath-b" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/thaiyalnathb/" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
            </div>
          </div>

          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="status-msg success">Message delivered! I'll get back to you soon.</p>}
            {status === "error" && <p className="status-msg error">Submission failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;