import React from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import TodoState from './context/todoState';

const ToDoApp = () => {
  return (
    <TodoState>
      <ReactComment text={'My beautiful HTML comment'}/>
      {/* <ToDoInput/>
      <ToDoList/> */}
    </TodoState>
  );
};

export default ToDoApp;

const ReactComment = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}/>;
};