import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f57ae 100% );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [ phrase, updatePhrase ] = useState({});

  const consultAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const phrase = await api.json();
    updatePhrase(phrase[0]);
  };

  useEffect( () => {
    consultAPI();
  }, [])

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />

      <Button
        onClick={consultAPI}
      >Obtener Frase</Button>
    </Container>
  );
}

export default App;
