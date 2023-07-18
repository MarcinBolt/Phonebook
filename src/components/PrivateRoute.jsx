import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
