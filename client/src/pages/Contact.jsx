import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      <div className="container">
        <section className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Have questions about NPCWS membership or welfare schemes? Get in
            touch with our office — we are happy to help.
          </p>
        </section>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Office Details</h2>
            <div className="info-items">
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <strong>Address</strong>
                  <p>NPCWS Office, Nagarampalem Police Station Road, Guntur — 522004, Andhra Pradesh</p>
                </div>
              </div>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>+91 863 222 0000</p>
                </div>
              </div>
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div>
                  <strong>Email</strong>
                  <p>npcws.guntur@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <Clock size={20} className="info-icon" />
                <div>
                  <strong>Office Hours</strong>
                  <p>Mon — Sat: 10:00 AM — 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send a Message</h2>
            {submitted ? (
              <div className="form-success">
                <Send size={24} />
                <p>
                  Thank you for reaching out. We will get back to you within 2-3
                  working days.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Enquiry</option>
                    <option value="housing">Housing Scheme</option>
                    <option value="health">Health Scheme</option>
                    <option value="education">Education Scheme</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
