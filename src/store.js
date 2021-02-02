import { createStore, compose, applyMiddleware } from 'redux'; // импортим createStore для создания store
import rootReducer from './rootReducer';

// мидлвары
import reduxThunk from 'redux-thunk';

// Для Redux dev-tools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

function loggerMiddleware(store) {
  return function(next) {
    return function(action) {
      const result = next(action);
      console.log(`Middleware`, store.getState());
      return result;
    };
  };
}

function _applyMiddleware() {
  const middleware = [reduxThunk];

  return applyMiddleware(...middleware);
}

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(_applyMiddleware()));
  return store;
}
