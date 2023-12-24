import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/img/logoe.png" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          Your Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-primary mx-2">Sign In</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
