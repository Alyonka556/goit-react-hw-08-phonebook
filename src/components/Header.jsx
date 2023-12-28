import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { selectIsLoggin, selectUserName } from '../redux/auth/selector';
import styled from 'styled-components';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggin);
  const user = useSelector(selectUserName);

  return (
    <StyledHeader>
      <StyledTitle>Redux | Auth</StyledTitle>
      {isLoggedIn && <>{user && <StyledText>Hi, {user}</StyledText>}</>}

      <Navbar />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  color: white;
  display: flex;
  background-color: teal;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  padding: 20px 40px;
  font-size: 28px;
  margin: 0 auto;
`;

const StyledTitle = styled.h2`
  color: grey;
  font-size: 32px;

  &:hover {
    color: black;
  }
`;

const StyledText = styled.h2`
  color: grey;
  font-weight: bold;
  font-size: 28px;
`;
