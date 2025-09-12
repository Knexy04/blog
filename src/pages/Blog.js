import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const posts = [
    {
      id: 1,
      title: 'Добро пожаловать в React Blog',
      excerpt: 'Это современный блог, созданный с использованием React и современных веб-технологий.',
      content: 'Полное содержание статьи...',
      image: '/react.webp',
      date: '2024-01-15',
      author: 'Администратор',
      category: 'Общее',
      tags: ['React', 'JavaScript', 'Web']
    },
    {
      id: 2,
      title: 'Современный дизайн и UX',
      excerpt: 'Мы создали красивый и удобный интерфейс, который понравится каждому пользователю.',
      content: 'Полное содержание статьи...',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNzY0YmEyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vZGVybiBEZXNpZ248L3RleHQ+Cjwvc3ZnPgo=',
      date: '2024-01-14',
      author: 'Дизайнер',
      category: 'Дизайн',
      tags: ['UI', 'UX', 'Design']
    },
    {
      id: 3,
      title: 'Адаптивная верстка',
      excerpt: 'Наш сайт отлично выглядит на всех устройствах - от мобильных до десктопов.',
      content: 'Полное содержание статьи...',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDZiNmQ0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJlc3BvbnNpdmU8L3RleHQ+Cjwvc3ZnPgo=',
      date: '2024-01-13',
      author: 'Разработчик',
      category: 'Разработка',
      tags: ['CSS', 'Responsive', 'Mobile']
    },
    {
      id: 4,
      title: 'JavaScript ES6+ возможности',
      excerpt: 'Изучаем современные возможности JavaScript и как их использовать в React приложениях.',
      content: 'Полное содержание статьи...',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjU5ZTBiIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkphdmFTY3JpcHQ8L3RleHQ+Cjwvc3ZnPgo=',
      date: '2024-01-12',
      author: 'Разработчик',
      category: 'Разработка',
      tags: ['JavaScript', 'ES6', 'React']
    },
    {
      id: 5,
      title: 'CSS Grid и Flexbox',
      excerpt: 'Современные методы верстки с использованием CSS Grid и Flexbox для создания адаптивных макетов.',
      content: 'Полное содержание статьи...',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMTBiOTgxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNTUyBHcmlkPC90ZXh0Pgo8L3N2Zz4K',
      date: '2024-01-11',
      author: 'Дизайнер',
      category: 'Дизайн',
      tags: ['CSS', 'Grid', 'Flexbox']
    },
    {
      id: 6,
      title: 'Оптимизация производительности',
      excerpt: 'Как оптимизировать React приложения для лучшей производительности и пользовательского опыта.',
      content: 'Полное содержание статьи...',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZWY0NDQ0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBlcmZvcm1hbmNlPC90ZXh0Pgo8L3N2Zz4K',
      date: '2024-01-10',
      author: 'Разработчик',
      category: 'Разработка',
      tags: ['Performance', 'Optimization', 'React']
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-header">
          <h1>Блог</h1>
          <p>Интересные статьи о веб-разработке, дизайне и технологиях</p>
        </div>

        <div className="blog-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="posts-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <div className="post-category">{post.category}</div>
              </div>
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
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

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <h3>Статьи не найдены</h3>
            <p>Попробуйте изменить поисковый запрос</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
