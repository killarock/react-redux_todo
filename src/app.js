import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
//pages
import ErrorPage from './pages/error';
import TodosList from './pages/todos-list';
import TodoPage from './pages/todo';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact component={TodosList} path={TodosList.path} />
          <Route exact component={TodoPage} path={TodoPage.path + ':id'} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}
