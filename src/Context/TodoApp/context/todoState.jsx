
import { useReducer } from 'react';
import { addTodo } from './todoActions';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

const INITIAL_STATE = {
  toDoList: [{ name: 'abcd' }]
};

const TodoState = ({ children }) => {
  const [state, todoDispatch] = useReducer(todoReducer, INITIAL_STATE);
  const { toDoList } = state;

  const addTodoDispatch = (item) => {
    todoDispatch(addTodo(item));
  };
  return (
    <TodoContext.Provider
      value={{
        todoDispatch: todoDispatch,
        addTodoDispatch :addTodoDispatch,
        toDoList: toDoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;