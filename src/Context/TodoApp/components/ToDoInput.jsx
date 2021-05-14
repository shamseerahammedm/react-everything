import React, { useContext, useState } from 'react';
import { addTodo } from '../context/todoActions';
import TodoContext from '../context/todoContext';

const ToDoInput = () => {
  const { addTodoDispatch, todoDispatch  } = useContext(TodoContext);
  const [ value, setValue ] = useState();
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>addTodoDispatch({ name : value })}> Add by passing function created inside TodoState </button>
      <button onClick={()=>todoDispatch(addTodo({ name : value }))}> Add by global action </button>
    </div>
  );
};

export default ToDoInput;
