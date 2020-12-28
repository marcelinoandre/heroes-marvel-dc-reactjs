import { AppRouter } from './routes/AppRouter';
import { authContext } from './auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <authContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </authContext.Provider>
  );
};
