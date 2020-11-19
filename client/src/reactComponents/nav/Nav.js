// imports for the Nav Bar
import React from "react";
import Logo from "../images/Logo.jpg";
import Hamburger from "../images/hamburger.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="menuNavBar">
      <header class="header">
       
          <Link to="/">
          <a href="" class="logo">
           <img src = {Logo}></img></a>
          </Link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          {/* <img src = {Hamburger}></img> */}
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a>
              <Link to="/About">About</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/Artist">Artists</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/Reserve">Reserve</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/Season">Season</Link>
            </a>
          </li>
        </ul>
      </header>
      {/* <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <div className="logo">
        <a>
          <Link to="/">
            <img className="logoimg" src={Logo} />
          </Link>
        </a>
      </div>
      <ul className="menu">
        <li>
          <a>
            <Link to="/About">About</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/Artist">Artists</Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/Season">Season</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/Reserve">Reserve</Link>
          </a>
        </li>
      </ul> */}
    </div>
  );
}

export default Nav;
