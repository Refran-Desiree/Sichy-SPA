import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>From Bean to Cup</h2>
              <p>
                Our journey begins in the misty highlands of Ethiopia, Colombia, and Guatemala, 
                where coffee cherries are hand-picked at peak ripeness. Each bean tells a story 
                of dedication, tradition, and passion.
              </p>
              <p>
                We roast in small batches to preserve the unique characteristics of each origin, 
                ensuring every cup delivers an exceptional experience that honors the farmers 
                and the land.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Countries Sourced</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Farm Partnerships</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Fair Trade</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop"
                alt="Coffee roasting process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="products">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            Connecting coffee lovers with exceptional beans from around the world
          </p>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
                  alt="Sustainable farming"
                />
              </div>
              <div className="product-info">
                <h3>Sustainable Sourcing</h3>
                <p className="origin">Ethical Partnerships</p>
                <p className="description">
                  We work directly with farmers to ensure fair wages and sustainable 
                  farming practices that protect the environment.
                </p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
                  alt="Coffee roasting"
                />
              </div>
              <div className="product-info">
                <h3>Artisan Roasting</h3>
                <p className="origin">Small Batch Process</p>
                <p className="description">
                  Our master roasters carefully craft each batch to bring out the 
                  unique flavors and aromas of every bean.
                </p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1522992319-0365e5f11656?w=400&h=300&fit=crop"
                  alt="Coffee community"
                />
              </div>
              <div className="product-info">
                <h3>Community Focus</h3>
                <p className="origin">Local Impact</p>
                <p className="description">
                  We believe in building strong communities through coffee, 
                  supporting local initiatives and bringing people together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Join Our Coffee Journey</h3>
            <p>
              Be part of our community and discover new flavors, brewing techniques, 
              and stories from coffee farms around the world.
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

export default About;
