import React from "react";
import './navbar.scss';
import { NavLink } from "react-router-dom";
import imageOne from "../images/project-management.png";

export default function Navbar() {
   return (
      <header>
         <div className="user__home">
            <img src={imageOne} alt="header" width='40' height='40' />
            <code>User Management</code>
         </div>
         <div className="nav__link">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/list'>View User</NavLink>
            <NavLink to='/add'>Create User</NavLink>
            <NavLink to='/delete'>Delete User</NavLink>
         </div>
      </header>
   );
}
