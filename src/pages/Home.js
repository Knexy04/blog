import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Добро пожаловать в React Blog',
      excerpt: 'Это современный блог, созданный с использованием React и современных веб-технологий.',
      image: '/react.webp',
      date: '2024-01-15',
      author: 'Администратор'
    },
    {
      id: 2,
      title: 'Современный дизайн и UX',
      excerpt: 'Мы создали красивый и удобный интерфейс, который понравится каждому пользователю.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNzY0YmEyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vZGVybiBEZXNpZ248L3RleHQ+Cjwvc3ZnPgo=',
      date: '2024-01-14',
      author: 'Дизайнер'
    },
    {
      id: 3,
      title: 'Адаптивная верстка',
      excerpt: 'Наш сайт отлично выглядит на всех устройствах - от мобильных до десктопов.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDZiNmQ0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJlc3BvbnNpdmU8L3RleHQ+Cjwvc3ZnPgo=',
      date: '2024-01-13',
      author: 'Разработчик'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Добро пожаловать в React Blog</h1>
            <p>Современный блог с красивым дизайном, созданный на React. Здесь вы найдете интересные статьи, новости и многое другое.</p>
            <div className="hero-buttons">
              <Link to="/blog" className="btn btn-primary">Читать блог</Link>
              <Link to="/about" className="btn btn-outline">Узнать больше</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Быстрая загрузка</h3>
              <p>Оптимизированный код обеспечивает быструю загрузку страниц</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Адаптивный дизайн</h3>
              <p>Отлично выглядит на всех устройствах и размерах экрана</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Современный UI</h3>
              <p>Красивый и интуитивно понятный пользовательский интерфейс</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts">
        <div className="container">
          <h2 className="section-title">Популярные статьи</h2>
          <div className="posts-grid">
            {featuredPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Читать далее →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
