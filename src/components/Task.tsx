/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import styled from "styled-components";
import { InputTaskContext } from "../contexts/InputTaskContext";
import closeSvg from "../../src/img/close.svg";

export function Task({ children }: any) {
  const { tasks, setTasks } = useContext(InputTaskContext);

  function DeleteTask(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <Container>
      {tasks.map((task, index) => {
        return (
          <TaskContainer key={index}>
            <Title>{task}</Title>
            <CloseButton title="Delete" onClick={() => DeleteTask(index)}>
              <img width="20px" src={closeSvg}></img>
            </CloseButton>
          </TaskContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  height: 20rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 2em;
    margin-left: 3rem;
  }

  &::-webkit-scrollbar-button {
    background: transparent;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #616161;
    border-radius: 5px;
  }​
`;

const TaskContainer = styled.div`
  width: 90%;
  padding: 0 5% 0 5%;
  background-color: #202024;
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 18px;
  text-align: left;
  color: whitesmoke;
  font-weight: 500;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: 1.8rem;
  border: 0;
  background-color: transparent;
  font-weight: 800;
  cursor: pointer;
`;
