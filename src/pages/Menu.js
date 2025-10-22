import React from 'react';
import { addToCart } from '../utils/cart';
import { showSuccess } from '../utils/notifications';

const Menu = () => {

  const products = [
    {
      id: 1,
      name: "Chimère Noire",
      origin: "Ethiopia • Sumatra",
      description: "Bold and floral with deep, earthy notes — a rich, dreamlike brew.",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Rêverie Roast",
      origin: "Colombia • Guatemala",
      description: "Smooth and balanced with hints of citrus and cocoa — a sip of serenity.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Velours Brume",
      origin: "Brazil • Kenya",
      description: "Velvety and sweet with a touch of berry brightness — soft yet vibrant.",
      price: 4.99,
      image: "https://cornercoffeestore.com/wp-content/uploads/2021/08/red-velvet-latte-close-up_CWIS_Shutterstock.webp"
    },
    {
      id: 4,
      name: "Morning Glory",
      origin: "Costa Rica • Peru",
      description: "Bright and energizing with notes of chocolate and caramel — perfect for mornings.",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Evening Blend",
      origin: "Jamaica • Hawaii",
      description: "Rich and smooth with hints of vanilla and spice — ideal for evening relaxation.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Decaf Delight",
      origin: "Switzerland • Colombia",
      description: "Full flavor without the caffeine — perfect for late-night coffee lovers.",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1522992319-0365e5f11656?w=400&h=300&fit=crop"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    showSuccess(`${product.name} added to cart!`);
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Menu Header */}
      <section className="products">
        <div className="container">
          <h2>Our Coffee Menu</h2>
          <p className="section-subtitle">
            Carefully curated coffee from sustainable farms around the world
          </p>
          
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="product-overlay">
                    <button className="quick-view">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="origin">{product.origin}</p>
                  <p className="description">{product.description}</p>
                  <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <button 
                      className="add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guide Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Brewing Guide</h2>
              <p>
                To get the best flavor from your Sichy Café beans, follow our 
                simple brewing guide. Each method brings out different characteristics 
                of our carefully selected beans.
              </p>
              <p>
                Whether you prefer a French press, pour-over, or espresso, we have 
                the perfect beans and techniques to help you create the perfect cup.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Brewing Methods</span>
                </div>
                <div className="stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Coffee Varieties</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Expert Support</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
                alt="Coffee brewing process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>
              Get notified about new coffee releases, brewing tips, and exclusive offers
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

export default Menu;
