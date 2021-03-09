import React from 'react'
import Link from 'next/link'
export default class Nav extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://docdict.live">
            <b>docdict.live</b>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              About docdict
            </a>
            <a className="navbar-item" href="/">
              Register for free
            </a>
            <a className="navbar-item" href="/">
              Features
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/">
                  Terms
                </a>
                <a className="navbar-item" href="/">
                  Privacy Policy
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  About us
                </a>
                <a className="navbar-item" href="/">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  Report an issue
                </a>
              </div>
            </div>
            <a className="bd-navbar-icon navbar-item" href="https://github.com/newsdict.io/docdict.llive" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/">
                <strong>Sign up</strong>
              </a>
              <Link href="/admin/login">
                <button className="button is-light">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}