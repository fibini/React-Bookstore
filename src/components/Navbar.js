import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
