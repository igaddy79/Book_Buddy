import { Link } from "react-router-dom";
import './Navbar.css';

import React from "react";
import { useNavigate } from "react-router-dom";




export default function Navigations() {
  return (
    <nav>
      <ul>

      <li>
          <Link to="/Account">Account</Link>
        </li>

        <li>
          <Link to="/Books">All Books</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>

        <li>
          <Link to="/Register">Register</Link>
        </li>

        
      </ul>
    </nav>
  );
}


/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
