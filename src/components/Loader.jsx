import React from 'react';
import { Vortex } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledBox>
      <Vortex
        visible={true}
        height="280"
        width="280"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </StyledBox>
  );
};

export default Loader;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #6f8dc5;
  min-height: 100vh;
`;
