import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper teal lighten-2">
      <div className="container">
        <a className=" brand-logo">React is cool</a>
        <ul className="right">
          <li>
            <a href="/">Homes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
