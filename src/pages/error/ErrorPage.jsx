import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  static path = '/error-page';

  render() {
    return (
      <div className="alert alert-danger text-center">
        <h3>Страница не найдена</h3>
        <Link to="index.html">Перейти на главную страницу</Link>
      </div>
    );
  }
}
