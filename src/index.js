import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Provider - компонент, HOC, который указывает, что мы работаем с редаксом

import App from './app';

export const store = configureStore();

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDom.render(application, document.getElementById(`root`));
