import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';

const ToDoList = () => {
  const { toDoList  } = useContext(TodoContext);

  return (
    <div>
      {
        toDoList.map((item, i) => <p key={i} >{item.name}</p>)
      }
    </div>
  );
};

export default ToDoList;
