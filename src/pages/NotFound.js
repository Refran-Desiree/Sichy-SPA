import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link to="/" className="btn-primary">
          <i className="fas fa-home"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
