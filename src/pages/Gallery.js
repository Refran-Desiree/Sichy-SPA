import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      alt: "Coffee roasting process"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
      alt: "Coffee brewing"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
      alt: "Coffee beans"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522992319-0365e5f11656?w=600&h=400&fit=crop",
      alt: "Coffee shop interior"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop",
      alt: "Coffee cup"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
      alt: "Coffee preparation"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      alt: "Coffee farm"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&h=400&fit=crop",
      alt: "Coffee tasting"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
      alt: "Coffee equipment"
    }
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Gallery Header */}
      <section className="gallery">
        <div className="container">
          <h2>Our Coffee Journey</h2>
          <p className="section-subtitle">
            A visual story of our passion for exceptional coffee
          </p>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Behind the Scenes</h2>
              <p>
                Our gallery showcases the journey from bean to cup, capturing the 
                dedication and craftsmanship that goes into every cup of Sichy Café coffee.
              </p>
              <p>
                From the misty highlands where our beans are grown to the careful 
                roasting process and the final presentation, every step is a work of art.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Photos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Authentic</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"
                alt="Coffee farm landscape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Follow Our Journey</h3>
            <p>
              Stay connected with our coffee adventures and behind-the-scenes content
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

export default Gallery;
