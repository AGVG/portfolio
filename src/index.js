import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Test = styled.div`
  color: blue
`;

const Index = () => {
  return <Test>Hello React!</Test>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
