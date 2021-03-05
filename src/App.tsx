import React from 'react';
import styled from 'styled-components';
import './App.css';
import { InputTask } from './components/InputTask';
import { Task } from './components/Task';
import { InputTaskProvider } from './contexts/InputTaskContext';

function App() {

  return (
    <>
      <Title>TodoApp</Title>
      <InputTaskProvider>
        <InputTask></InputTask>
        <Task></Task>
      </InputTaskProvider>
    </>
  );
}

const Title = styled.h1`
  color: whitesmoke;
`;

export default App;
