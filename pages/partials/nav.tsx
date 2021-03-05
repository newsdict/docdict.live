import React from 'react'
import ReactDOM from 'react-dom'
export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://docdict.live">
            <b>docdict.live</b>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              About docdict
            </a>
            <a className="navbar-item">
              Register for free
            </a>
            <a className="navbar-item">
              Features
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Terms
                </a>
                <a className="navbar-item">
                  Privacy Policy
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  About us
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <a className="bd-navbar-icon navbar-item" href="https://github.com/newsdict.io/docdict.llive" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}