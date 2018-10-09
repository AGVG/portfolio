import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Navigation from './navigation';

injectGlobal`
  html { height: 100%; }
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, San Francisco;
    height: 100%;
    margin: 0;
    overflow-y: scroll;
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: #CCCCCC;
  height: 100vh;
  max-width: 100%;
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
