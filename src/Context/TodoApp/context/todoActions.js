import { TODO_TYPES } from './todoTypes';

export const addTodo = (payload) => ({
  type: TODO_TYPES.ADD_TODO,
  payload: payload
});

export const addDeleteTodo = (payload) => ({
  type: TODO_TYPES.DELETE_TODO,
  payload: payload
});

export const toggleTodo = (payload) => ({
  type: TODO_TYPES.TOGGLE_TODO,
  payload: payload
});