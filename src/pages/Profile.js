import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="profile">
        <div className="container">
          <div className="not-logged-in">
            <h2>Необходима авторизация</h2>
            <p>Для просмотра профиля необходимо войти в систему.</p>
            <div className="auth-links">
              <Link to="/login" className="btn btn-primary">Войти</Link>
              <Link to="/register" className="btn btn-outline">Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const userPosts = [
    {
      id: 1,
      title: 'Моя первая статья',
      excerpt: 'Это моя первая статья в блоге...',
      date: '2024-01-15',
      status: 'Опубликовано'
    },
    {
      id: 2,
      title: 'Советы по React',
      excerpt: 'Несколько полезных советов для разработчиков...',
      date: '2024-01-14',
      status: 'Черновик'
    }
  ];

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Статей</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Комментариев</span>
              </div>
              <div className="stat">
                <span className="stat-number">1.2K</span>
                <span className="stat-label">Просмотров</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Мои статьи</h2>
            <div className="posts-list">
              {userPosts.map(post => (
                <div key={post.id} className="post-item">
                  <div className="post-info">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className={`post-status ${post.status.toLowerCase()}`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className="post-actions">
                    <Link to={`/blog/${post.id}`} className="btn btn-outline btn-sm">
                      Просмотр
                    </Link>
                    <button className="btn btn-secondary btn-sm">
                      Редактировать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2>Настройки аккаунта</h2>
            <div className="settings-grid">
              <div className="setting-card">
                <h3>Личная информация</h3>
                <p>Управляйте вашими личными данными</p>
                <button className="btn btn-outline">Изменить</button>
              </div>
              <div className="setting-card">
                <h3>Безопасность</h3>
                <p>Измените пароль и настройки безопасности</p>
                <button className="btn btn-outline">Изменить</button>
              </div>
              <div className="setting-card">
                <h3>Уведомления</h3>
                <p>Настройте уведомления и рассылки</p>
                <button className="btn btn-outline">Настроить</button>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button onClick={logout} className="btn btn-outline">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
