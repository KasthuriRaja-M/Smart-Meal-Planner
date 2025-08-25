import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-utensils"></i> Smart Meal Planner
          </Link>
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link 
              to="/recipes" 
              className={`nav-link ${isActive('/recipes') ? 'active' : ''}`}
            >
              <i className="fas fa-book-open"></i> Recipes
            </Link>
            <Link 
              to="/meal-plan" 
              className={`nav-link ${isActive('/meal-plan') ? 'active' : ''}`}
            >
              <i className="fas fa-calendar-alt"></i> Meal Plan
            </Link>
            <Link 
              to="/grocery-list" 
              className={`nav-link ${isActive('/grocery-list') ? 'active' : ''}`}
            >
              <i className="fas fa-shopping-cart"></i> Grocery List
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
