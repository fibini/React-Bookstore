import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Navbar.css';

const Navbar = () => (
  <nav className="Navbar">
    <div className="Navbar-header">
      <h1 className="Navbar-logo">Bookstore CMS</h1>
    </div>
    <ul className="Navbar-list">
      <li className="Navbar-books">
        <NavLink className="nav-link" to="/">BOOKS</NavLink>
      </li>
      <li className="Navbar-categories">
        <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <div className="Navbar-icon">
      <FontAwesomeIcon icon={faUser} className="fauser-icon" />
    </div>
  </nav>
);

export default Navbar;
