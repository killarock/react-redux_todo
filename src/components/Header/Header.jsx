import React, { Component } from 'react';
import NavigationItem from '../ui/nav-item';

const NAVIGATION_ITEMS = [
  {
    id: 1,
    path: '/',
    title: 'Список задач'
  }
  // {
  //   id: 2,
  //   path: '/about-page',
  //   title: 'О приложении'
  // }
];

export default class Header extends Component {
  render() {
    const navItems = NAVIGATION_ITEMS.map(({ id, ...rest }) => {
      return <NavigationItem key={id} {...rest} />;
    });

    return (
      <header className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">{navItems}</ul>
        </div>
      </header>
    );
  }
}
