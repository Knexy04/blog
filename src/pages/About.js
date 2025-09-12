import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      name: 'Анна Смирнова',
      role: 'Frontend Developer',
      avatar: 'https://via.placeholder.com/150/667eea/ffffff?text=AS',
      description: 'Специализируется на React и современном JavaScript'
    },
    {
      name: 'Михаил Петров',
      role: 'UI/UX Designer',
      avatar: 'https://via.placeholder.com/150/764ba2/ffffff?text=MP',
      description: 'Создает красивые и функциональные интерфейсы'
    },
    {
      name: 'Елена Козлова',
      role: 'Backend Developer',
      avatar: 'https://via.placeholder.com/150/06b6d4/ffffff?text=EK',
      description: 'Отвечает за серверную часть и API'
    }
  ];

  const stats = [
    { number: '100+', label: 'Статей опубликовано' },
    { number: '10K+', label: 'Читателей' },
    { number: '50+', label: 'Стран' },
    { number: '99%', label: 'Довольных пользователей' }
  ];

  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <h1>О нас</h1>
          <p>Мы создаем современные веб-приложения с фокусом на пользовательский опыт и производительность</p>
        </div>

        <section className="about-story">
          <div className="story-content">
            <h2>Наша история</h2>
            <p>
              React Blog был создан в 2024 году с целью предоставить платформу для обмена знаниями 
              о современной веб-разработке. Мы верим, что качественный контент и красивый дизайн 
              могут изменить то, как люди воспринимают веб-технологии.
            </p>
            <p>
              Наша команда состоит из опытных разработчиков и дизайнеров, которые постоянно 
              изучают новые технологии и делятся своими знаниями с сообществом.
            </p>
          </div>
          <div className="story-image">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNjY3ZWVhIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk91ciBTdG9yeTwvdGV4dD4KPC9zdmc+Cg==" alt="Наша история" />
          </div>
        </section>

        <section className="stats">
          <h2>Мы в цифрах</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="team">
          <h2>Наша команда</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Инновации</h3>
              <p>Мы всегда в курсе последних технологий и используем их для создания лучших решений</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Сообщество</h3>
              <p>Мы верим в силу сообщества и поддерживаем открытый обмен знаниями</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Качество</h3>
              <p>Мы стремимся к высочайшему качеству во всем, что делаем</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
