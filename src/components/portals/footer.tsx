import React from 'react'
export default class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <footer className="footer mt-5">
        <div className="content has-text-centered">
          <p>
            <strong>docdict</strong> by <a href="https://newsdict.io">Yusuke Abe</a>. Based on the <a href="https://bulmatemplates.github.io/bulma-templates/">Free Bulma Templates</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>
      </footer>
    )
  }
}