import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from '../redux/auth/operations';
import { selectIsRefresh } from '../redux/auth/selector';
import { StyledContainer, StyledContent, StyledTitle } from './App.styled';
import Header from './Header';
import NotFound from 'pages/NotFound';
import PrivateRoute from '../routesConfig/PrivateRoute';
import PublicRoute from '../routesConfig/PublicRoute';
import Loader from './Loader';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const ContactList = lazy(() => import('./ContactList/ContactList'));
const Filter = lazy(() => import('./Filter/Filter.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <StyledContent>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <>
                    <StyledTitle>Phonebook</StyledTitle>
                    <ContactForm />
                    <StyledTitle>Contacts</StyledTitle>
                    <Filter />
                    <ContactList />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StyledContainer>
    </StyledContent>
  );
};
