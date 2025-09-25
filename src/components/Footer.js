import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Everyday Journal</h3>
            <p>Практичные статьи о путешествиях, доме, еде и привычках — без лишней суеты.</p>
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
            <p>Email: hello@everyday.journal</p>
            <p>Telegram: @everyday_journal</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024–2025 Everyday Journal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
