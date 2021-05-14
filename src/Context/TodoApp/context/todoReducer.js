import { TODO_TYPES } from './todoTypes';

const todoReducer = (state, { type, payload }) => {
  
  switch (type)
  {

  case TODO_TYPES.ADD_TODO:
    return {
      ...state,
      toDoList : [
        ...state.toDoList,
        payload
      ]
    };
  case TODO_TYPES.TOGGLE_TODO:
    return {
      ...state,
    };
  case TODO_TYPES.DELETE_TODO:
    return {
      ...state,
    };

  default:
    return state;
  }
};

export default todoReducer;