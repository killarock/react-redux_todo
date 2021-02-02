import { todosActionTypes, ERROR_MESSAGE } from '../constants/todos';
import { LS } from '../utils/local-storage';

const { ADD, DELETE, EDIT } = todosActionTypes;
import createTodo from '../utils/helpers';

const todosDataTemplate = {
  todos: [createTodo('Задача 1'), createTodo('Задача 2')]
};

const initialState = LS.get() || todosDataTemplate;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { newTodos } = action.payload;
      return { ...state, newTodos };

    case EDIT:
      const { editedTodos } = action.payload;
      return { ...state, editedTodos };

    case DELETE:
      const { todos } = action.payload;
      return { ...state, todos };

    default:
      return state;
  }
};
