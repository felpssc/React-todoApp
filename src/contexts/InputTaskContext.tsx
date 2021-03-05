import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface InputTaskContextData {
  inputValue: string;
  tasks: String[];
  handleInput: (e: ReactNode) => void;
  addNewTask: () => void;
  setTasks: Dispatch<SetStateAction<String[]>>;
}

interface InputTaskProps {
  children: ReactNode;
}

export const InputTaskContext = createContext({} as InputTaskContextData);

export function InputTaskProvider({children}: InputTaskProps) {

  function handleInput(e: any) {
    setInputValue(e.target.value);
  }

  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<String[]>([]);

  useEffect(() => {
    if(localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
    }
  }, []);

  function addNewTask() {
    if(inputValue === ''){
      alert('You must add a title');
      return
    }
    const newTasks = [inputValue, ...tasks];
    setTasks(newTasks);
    setInputValue('');
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <InputTaskContext.Provider value={{
      inputValue,
      handleInput,
      addNewTask,
      tasks,
      setTasks,
    }}>
      {children}
    </InputTaskContext.Provider>
  );
}