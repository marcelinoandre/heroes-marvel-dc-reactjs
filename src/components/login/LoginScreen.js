import { useContext } from 'react';
import { authContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(authContext);
  const lastPath = localStorage.getItem('lastPath') || '/';

  const handleLogin = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: 'Name User'
      }
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
