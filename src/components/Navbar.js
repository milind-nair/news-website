import React, { Component } from "react";

export class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            News
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                 Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                 Technology
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
