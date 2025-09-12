import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  
  // В реальном приложении здесь был бы API запрос
  const post = {
    id: parseInt(id),
    title: 'Добро пожаловать в React Blog',
    content: `
      <p>Это современный блог, созданный с использованием React и современных веб-технологий. В этой статье мы рассмотрим основные принципы создания современного веб-приложения.</p>
      
      <h3>Основные технологии</h3>
      <p>Для создания этого блога мы использовали следующие технологии:</p>
      <ul>
        <li><strong>React</strong> - библиотека для создания пользовательских интерфейсов</li>
        <li><strong>React Router</strong> - для навигации между страницами</li>
        <li><strong>CSS3</strong> - для стилизации и адаптивного дизайна</li>
        <li><strong>JavaScript ES6+</strong> - современный JavaScript</li>
      </ul>
      
      <h3>Структура приложения</h3>
      <p>Приложение состоит из нескольких основных компонентов:</p>
      <ol>
        <li>Главная страница с обзором контента</li>
        <li>Страница блога со списком статей</li>
        <li>Детальная страница статьи</li>
        <li>Страницы авторизации и регистрации</li>
        <li>Профиль пользователя</li>
      </ol>
      
      <h3>Адаптивный дизайн</h3>
      <p>Одной из ключевых особенностей нашего блога является адаптивный дизайн. Мы использовали CSS Grid и Flexbox для создания макетов, которые отлично выглядят на всех устройствах - от мобильных телефонов до больших мониторов.</p>
      
      <blockquote>
        <p>"Хороший дизайн - это не то, как он выглядит, а то, как он работает." - Стив Джобс</p>
      </blockquote>
      
      <h3>Заключение</h3>
      <p>Создание современного веб-приложения требует понимания множества технологий и принципов. React предоставляет отличные инструменты для создания интерактивных пользовательских интерфейсов, а современный CSS позволяет создавать красивые и адаптивные дизайны.</p>
    `,
     image: '/react.webp',
    date: '2024-01-15',
    author: 'Администратор',
    category: 'Общее',
    tags: ['React', 'JavaScript', 'Web', 'CSS']
  };

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
