import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Everyday Journal</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/blog" className="nav-link">Блог</Link>
            <Link to="/about" className="nav-link">О блоге</Link>
            <Link to="/contact" className="nav-link">Контакты</Link>
            
            {user ? (
              <div className="user-menu">
                <Link to="/profile" className="nav-link">Профиль</Link>
                <button onClick={handleLogout} className="btn btn-outline">
                  Выйти
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline">Войти</Link>
                <Link to="/register" className="btn btn-primary">Регистрация</Link>
              </div>
            )}
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
