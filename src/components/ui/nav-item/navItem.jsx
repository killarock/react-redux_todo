import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationItem = props => {
  const { path, title } = props;
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {title}
      </NavLink>
    </li>
  );
};
