import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../redux/auth/selector';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggin);
  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" />;
};

export default PrivateRoute;
