import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Navigation from './navigation';

injectGlobal`
  html { height: 100%; }
  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    overflow-y: scroll;
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: #CCCCCC;
  box-sizing: border-box;
  height: 100vh;
  max-width: 100%;
  padding: 2rem;
  width: 100vw;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    );
  }
};

export default App;
