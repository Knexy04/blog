import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css';
import { getPostById } from './postsData';

const PostDetail = () => {
  const { id } = useParams();
  
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="post-detail">
        <div className="container">
          <div className="post-navigation">
            <h2>Статья не найдена</h2>
            <Link to="/blog" className="btn btn-outline">← Вернуться к блогу</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <div className="container">
        <div className="post-header">
          <div className="breadcrumb">
            <Link to="/">Главная</Link>
            <span> / </span>
            <Link to="/blog">Блог</Link>
            <span> / </span>
            <span>{post.title}</span>
          </div>
          
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-author">Автор: {post.author}</span>
          </div>
        </div>

        <article className="post-content">
          <h1>{post.title}</h1>
          
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
          
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="post-tags">
            <h4>Теги:</h4>
            <div className="tags-list">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        <div className="post-navigation">
          <Link to="/blog" className="btn btn-outline">
            ← Вернуться к блогу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
