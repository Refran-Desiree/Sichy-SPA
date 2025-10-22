import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout, isAuthenticated } from '../utils/auth';
import { showSuccess, showError } from '../utils/notifications';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(isAuthenticated());

    // Load cart count
    const savedCart = localStorage.getItem('sichyCart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    }

    // Listen for cart updates
    const handleStorageChange = () => {
      const savedCart = localStorage.getItem('sichyCart');
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
      } else {
        setCartCount(0);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Navigate to admin page
      navigate('/admin');
    } else {
      // Simulate login for demo purposes
      const email = prompt('Enter email for demo login:');
      const password = prompt('Enter password (min 6 characters):');
      
      if (email && password && password.length >= 6) {
        if (login(email, password)) {
          setIsLoggedIn(true);
          showSuccess('Login successful! Welcome to Sichy Café.');
        } else {
          showError('Login failed. Please try again.');
        }
      }
    }
  };

  const handleMembershipClick = () => {
    if (!isLoggedIn) {
      // Show membership modal (you can implement this)
      console.log('Show membership modal');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <i className="fas fa-coffee"></i>
          <span>Sichy Café</span>
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Our Coffee</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <button 
              className="nav-button login-btn" 
              onClick={handleLoginClick}
            >
              <i className="fas fa-user"></i> 
              {isLoggedIn ? 'Profile' : 'Login'}
            </button>
          </li>
          {!isLoggedIn && (
            <li>
              <button 
                className="nav-button membership-btn" 
                onClick={handleMembershipClick}
              >
                <i className="fas fa-star"></i> Join
              </button>
            </li>
          )}
          <li>
            <button className="cart-button" id="cartButton">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">{cartCount}</span>
            </button>
          </li>
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
