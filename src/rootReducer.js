// RootReducer объединяет все существующие редьюсеры
import { combineReducers } from 'redux';

import { todosReducer } from './pages/reducers';

export default combineReducers({ todosReducer });
