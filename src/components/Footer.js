import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>React Blog</h3>
            <p>Современный блог на React с красивым дизайном и удобным интерфейсом.</p>
          </div>
          
          <div className="footer-section">
            <h4>Навигация</h4>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>Email: info@reactblog.com</p>
            <p>Телефон: +7 (999) 123-45-67</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 React Blog. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
