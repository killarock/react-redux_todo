import { LS } from '../utils/local-storage';
import { todosActionTypes } from '../constants/todos';
import { KEYS } from '../constants/localStorage';
import createTodo from '../utils/helpers';

const { TODOS } = KEYS;
const { ADD, DELETE, EDIT } = todosActionTypes;

export function editTodoAction(todos, title, id) {
  const idx = todos.findIndex(item => item.id === id);
  todos[idx].title = title;
  LS.set(TODOS, todos);

  return {
    type: EDIT,
    payload: {
      editedTodos: todos
    }
  };
}

export function addTodoAction(newTodos, title) {
  newTodos.push(createTodo(title));
  LS.set(TODOS, newTodos);

  return {
    type: ADD,
    payload: {
      todos: newTodos
    }
  };
}

export function deleteTodoAction(todos, todo) {
  const filtredTodos = todos.filter(it => it.id !== todo.id);
  LS.set(TODOS, filtredTodos);

  return {
    type: DELETE,
    payload: {
      todos: filtredTodos
    }
  };
}
