import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { posts } from './postsData';

const Home = () => {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Добро пожаловать в наш блог</h1>
            <p>Практичные статьи про путешествия, дом, еду и привычки. Никакой техно-джаргон — только понятные советы из жизни.</p>
            <div className="hero-buttons">
              <Link to="/blog" className="btn btn-primary">Читать блог</Link>
              <Link to="/about" className="btn btn-outline">Узнать больше</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Что вы найдете в блоге</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Коротко и по делу</h3>
              <p>Пошаговые инструкции и чек-листы, которые легко применить сегодня</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Для реальной жизни</h3>
              <p>Путешествия, дом, еда и привычки — без сложных терминов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Сохраните спокойствие</h3>
              <p>Минимализм и практичность вместо перегруза информацией</p>
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
