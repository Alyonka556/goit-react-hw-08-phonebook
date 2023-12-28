import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggin } from '../redux/auth/selector';
import styled from 'styled-components';
import { logoutThunk } from '../redux/auth/operations';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggin);
  const dispatch = useDispatch();

  return (
    <StyledNavBox>
      <StyledLink to="/">Home</StyledLink>
      {!isLoggedIn && (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">SignUp</StyledLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLinkExit onClick={() => dispatch(logoutThunk())}>
            Logout
          </StyledLinkExit>
        </>
      )}
    </StyledNavBox>
  );
};

const StyledNavBox = styled.div`
  align-content: center;
  font-weight: bold;
  font-size: 32px;
  color: grey;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0;
  max-width: 90%;

  margin: 0;
`;

const StyledLink = styled(NavLink)`
  color: grey;
  align-content: center;
  display: flex;

  justify-content: space-between;
  gap: 4px;
  text-decoration: none;

  &:hover {
    color: black;
  }
  &.active {
    text-decoration: underline;
  }
`;
const StyledLinkExit = styled(NavLink)`
  color: grey;
  align-content: center;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  text-decoration: none;
  max-width: 100px;
  margin: 0;

  &:hover {
    color: black;
  }
`;
