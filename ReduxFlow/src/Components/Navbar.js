import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            A2N Academy
          </a>

          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link text-white">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comments" className="nav-link text-white">
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/post" className="nav-link text-white">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white"
                onClick={() => {
                  this.props.fnUpdate(false);
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
