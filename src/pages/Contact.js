import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showSuccess } from '../utils/notifications';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    showSuccess('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Navigate to home page after successful submission
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Contact Header */}
      <section className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Visit Our Café</h3>
              <p>
                Come experience our coffee in person at our cozy café location. 
                We're open seven days a week and always happy to welcome new faces.
              </p>
              <p>
                <strong>Address:</strong><br />
                143 Coffee Street<br />
                Bean District, CA 022103
              </p>
              <p>
                <strong>Phone:</strong><br />
                (444) 143-BEAN
              </p>
              <p>
                <strong>Email:</strong><br />
                ree@dreamcoffee.brew
              </p>
              <p>
                <strong>Hours:</strong><br />
                Monday - Friday: 6:00 AM - 8:00 PM<br />
                Saturday - Sunday: 7:00 AM - 9:00 PM
              </p>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="products">
        <div className="container">
          <h2>Find Us</h2>
          <p className="section-subtitle">
            Located in the heart of Bean District, we're easy to find and always welcoming
          </p>
          
          <div style={{ 
            height: '400px', 
            background: 'var(--background-cream)', 
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
            border: '2px solid var(--accent-color)'
          }}>
            <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
              <h3>Interactive Map</h3>
              <p>143 Coffee Street, Bean District, CA 022103</p>
              <p><em>Map integration would go here</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Connected</h3>
            <p>
              Join our community and be the first to know about new coffee releases and events
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
