import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем, есть ли сохраненные данные пользователя
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Простая проверка (в реальном приложении это будет API)
      if (email === 'admin@example.com' && password === 'password') {
        const userData = {
          id: 1,
          email: email,
          name: 'Администратор',
          avatar: 'https://via.placeholder.com/40'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: 'Неверный email или пароль' };
      }
    } catch (error) {
      return { success: false, error: 'Ошибка при входе' };
    }
  };

  const register = async (name, email, password) => {
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Простая проверка (в реальном приложении это будет API)
      if (email && password && name) {
        const userData = {
          id: Date.now(),
          email: email,
          name: name,
          avatar: 'https://via.placeholder.com/40'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: 'Все поля обязательны для заполнения' };
      }
    } catch (error) {
      return { success: false, error: 'Ошибка при регистрации' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
