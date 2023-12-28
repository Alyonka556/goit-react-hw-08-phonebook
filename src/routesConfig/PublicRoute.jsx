import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../redux/auth/selector';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggin);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};

export default PublicRoute;
