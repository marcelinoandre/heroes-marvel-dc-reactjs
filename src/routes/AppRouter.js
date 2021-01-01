import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { authContext } from '../auth/authContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user } = useContext(authContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
