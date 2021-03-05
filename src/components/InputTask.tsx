import React, { useContext } from 'react';
import styled from 'styled-components';
import { InputTaskContext } from '../contexts/InputTaskContext';


export function InputTask() {
  const { handleInput, addNewTask, inputValue } = useContext(InputTaskContext);

  return (
    <Container>
      <HandleInput 
      type="text" 
      placeholder="type your task..."
      onChange={handleInput}
      value={inputValue}
      >  
      </HandleInput>
      <HandleButtonAdd onClick={addNewTask}>
        Add
      </HandleButtonAdd>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HandleButtonAdd = styled.button`
  width: 8rem;
  height: 3.2rem;
  border-radius: 3px;
  background-color: #866CE6;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  border: 0;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #907ae8;
  }
`;

const HandleInput = styled.input`
  width: 20rem;
  height: 3rem;
  padding-left: 1rem;
  border: 0;
  outline: none;
  border-radius: 3px;
  transition: border 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  color: #202024;
  margin: 0 4px 0 4px;
  &:focus{
    border: 2.5px solid #6FD562;
  } 
`;

