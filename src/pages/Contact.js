import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API запрос
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@reactblog.com',
      description: 'Напишите нам на почту'
    },
    {
      icon: '📞',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      description: 'Звоните в рабочее время'
    },
    {
      icon: '📍',
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      description: 'Приходите к нам в офис'
    },
    {
      icon: '🕒',
      title: 'Время работы',
      value: 'Пн-Пт: 9:00-18:00',
      description: 'Мы работаем по будням'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-hero">
          <h1>Свяжитесь с нами</h1>
          <p>У вас есть вопросы или предложения? Мы будем рады услышать от вас!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Контактная информация</h2>
            <p>Выберите удобный для вас способ связи или заполните форму обратной связи.</p>
            
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p className="info-value">{info.value}</p>
                  <p className="info-description">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <h2>Написать нам</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Тема *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Как нас найти</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>📍 Наш офис</h3>
              <p>Москва, ул. Примерная, 123</p>
              <p>Ближайшая станция метро: Примерная</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
