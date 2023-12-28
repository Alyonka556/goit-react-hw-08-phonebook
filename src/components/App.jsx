import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from '../redux/auth/operations';
import { selectIsRefresh } from '../redux/auth/selector';
import { StyledContainer, StyledContent, StyledTitle } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter.jsx';
import Header from './Header';
import NotFound from 'pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoute from '../routesConfig/PrivateRoute';
import PublicRoute from '../routesConfig/PublicRoute';
import Loader from './Loader';

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
          <Route path="/" element={<StyledTitle>Homepage</StyledTitle>} />

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StyledContainer>
    </StyledContent>
  );
};
