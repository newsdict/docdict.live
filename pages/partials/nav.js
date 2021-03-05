import React from 'react'
import ReactDOM from 'react-dom'
export default class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://docdict.live">
            <b>docdict.live</b>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              About docdict
            </a>
            <a class="navbar-item">
              Register for free
            </a>
            <a class="navbar-item">
              Features
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Terms
                </a>
                <a class="navbar-item">
                  Privacy Policy
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  About us
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <a class="bd-navbar-icon navbar-item" href="https://github.com/newsdict.io/docdict.llive" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}