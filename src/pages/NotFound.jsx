import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <StyledWrapper>
      <div>
        <h1>Sorry, this page is not found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </StyledWrapper>
  );
};

export default NotFound;

export const StyledWrapper = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
`;
