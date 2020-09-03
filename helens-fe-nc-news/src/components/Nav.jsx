import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link className="nav-all-posts" to="/articles">
              All Posts
            </Link>
          </li>
          <li>
            <Link className="nav-topics" to="/topics">
              Topics
            </Link>
          </li>
          <li>
            <Link className="nav-user-area" to="/users/jessjelly">
              User Area
            </Link>
          </li>
          <li>
            <Link className="nav-search" to="">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
