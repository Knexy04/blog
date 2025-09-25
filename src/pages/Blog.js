import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { posts as allPosts } from './postsData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const posts = allPosts;

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
