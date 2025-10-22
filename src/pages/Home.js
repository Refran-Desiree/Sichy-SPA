import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add scroll effect for navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 248, 243, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(139, 69, 19, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 248, 243, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreCoffee = () => {
    navigate('/menu');
  };

  const handleWatchStory = () => {
    navigate('/about');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Perfect Cup</h1>
          <p>
            Handcrafted coffee from the world's finest beans, roasted to
            perfection for the ultimate coffee experience.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleExploreCoffee}>
              Explore Our Coffee
            </button>
            <button className="btn-secondary" onClick={handleWatchStory}>
              Watch Our Story
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="coffee-cup-animation">
            <div className="steam"></div>
            <div className="steam"></div>
            <div className="steam"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <div className="container">
          <h2>Our Signature Blends</h2>
          <p className="section-subtitle">
            Carefully curated coffee from sustainable farms around the world
          </p>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
                  alt="Ethiopian Yirgacheffe"
                />
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3>Chimère Noire</h3>
                <p className="origin">Ethiopia • Sumatra</p>
                <p className="description">
                  Bold and floral with deep, earthy notes — a rich, dreamlike brew.
                </p>
                <div className="product-footer">
                  <span className="price">$1.99</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop"
                  alt="Colombian Supremo"
                />
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3>Rêverie Roast</h3>
                <p className="origin">Colombia • Guatemala</p>
                <p className="description">
                  Smooth and balanced with hints of citrus and cocoa — a sip of serenity.
                </p>
                <div className="product-footer">
                  <span className="price">$3.99</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://cornercoffeestore.com/wp-content/uploads/2021/08/red-velvet-latte-close-up_CWIS_Shutterstock.webp"
                  alt="House Blend"
                />
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3>Velours Brume</h3>
                <p className="origin">Brazil • Kenya</p>
                <p className="description">
                  Velvety and sweet with a touch of berry brightness — soft yet vibrant.
                </p>
                <div className="product-footer">
                  <span className="price">$4.99</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Brewed</h3>
            <p>
              Get exclusive offers, brewing tips, and early access to new blends
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
    </>
  );
};

export default Home;
