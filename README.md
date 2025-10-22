# Sichy Café - React SPA

A modern React Single Page Application (SPA) for Sichy Café, converted from the original HTML/CSS/JavaScript website. This application features React Router DOM for navigation, component-based architecture, and maintains all the original design elements.

## Features

- **React Router DOM**: Smooth navigation between pages without page reloads
- **Component-Based Architecture**: Reusable React components
- **Responsive Design**: Mobile-first approach with existing CSS
- **Protected Routes**: Admin page with authentication simulation
- **Programmatic Navigation**: Form submissions redirect using useNavigate()
- **404 Page**: Custom not found page for invalid URLs
- **Cart Functionality**: Shopping cart with localStorage persistence
- **Modal System**: Login and membership modals (ready for implementation)

## Pages

- **Home** (`/`): Hero section, featured products, story, and newsletter
- **About** (`/about`): Company story, mission, and values
- **Menu** (`/menu`): Complete coffee menu with cart functionality
- **Gallery** (`/gallery`): Visual showcase of coffee journey
- **Contact** (`/contact`): Contact form with programmatic navigation
- **Admin** (`/admin`): Protected admin dashboard (requires authentication)
- **404** (`/*`): Not found page for invalid URLs

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   ├── Footer.js          # Footer component
│   └── ProtectedRoute.js  # Route protection component
├── pages/
│   ├── Home.js            # Home page
│   ├── About.js           # About page
│   ├── Menu.js            # Menu page
│   ├── Gallery.js         # Gallery page
│   ├── Contact.js         # Contact page
│   ├── Admin.js           # Admin dashboard
│   └── NotFound.js        # 404 page
├── App.js                 # Main app component with routing
├── index.js               # React entry point
└── index.css              # All original styles
```

## Key Features Implemented

### React Router DOM
- `BrowserRouter` for client-side routing
- `Routes` and `Route` for page routing
- `Link` components for navigation
- `useNavigate()` for programmatic navigation

### Component Architecture
- **Header**: Navigation with cart count and login state
- **Footer**: Links and social media
- **ProtectedRoute**: Authentication wrapper for admin page
- **Page Components**: Each main section as a separate component

### Navigation Features
- Smooth transitions between pages
- Active navigation state
- Mobile hamburger menu
- Cart count updates
- Login/logout functionality

### Programmatic Navigation
- Contact form redirects to home after submission
- Login button navigates to admin when authenticated
- 404 page redirects to home

### Authentication Simulation
- LocalStorage-based authentication
- Protected admin route
- Login/logout functionality
- User state management

## Original Design Preservation

All original design elements have been preserved:
- Color scheme and CSS variables
- Typography (Playfair Display + Inter fonts)
- Layout and spacing
- Animations and transitions
- Responsive breakpoints
- Font Awesome icons

## Browser Support

- Modern browsers with ES6+ support
- React 18+ compatibility
- CSS Grid and Flexbox support

## Development Notes

- All original JavaScript functionality has been converted to React
- CSS remains unchanged and is imported in index.css
- LocalStorage is used for cart persistence and authentication
- Font Awesome icons are loaded from CDN
- Google Fonts are loaded from CDN

## Future Enhancements

- Implement actual login/membership modals
- Add form validation
- Integrate with a backend API
- Add more interactive features
- Implement state management (Redux/Context)
- Add unit tests
- Implement PWA features

## License

This project maintains the same license as the original Sichy Café website.
