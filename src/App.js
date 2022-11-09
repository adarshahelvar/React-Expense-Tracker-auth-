import React from "react";
import styled from "styled-components";
import HOmeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  margin:30px 0 10px;
  font-family:Montserrat;
`;
const Header = styled.span`
  color: black;
  font-size:25px;
  font-weight:bold;
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HOmeComponent />
    </Container>
  );
}

export default App;
