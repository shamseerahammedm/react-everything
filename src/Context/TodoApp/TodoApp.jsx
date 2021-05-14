import React from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import TodoState from './context/todoState';

const ToDoApp = () => {
  return (
    <TodoState>
      <ToDoInput/>
      <ToDoList/>
    </TodoState>
  );
};

export default ToDoApp;
