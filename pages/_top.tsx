import React from 'react'
export default class Top extends React.Component {
  render(): JSX.Element {
    return (
      <main>
        <section className="hero is-white is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns  is-vcentered reverse-columns">
                <div className="column
                is-10-mobile is-offset-1-mobile
                is-10-tablet is-offset-1-tablet
                is-5-desktop is-offset-1-desktop
                is-5-widescreen is-offset-1-widescreen
                is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                  <h1 className="title titled is-1 mb-6">
                    Create a document, slide it and share it.
                  </h1>
                  <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                    docdict is an Open Source product that supports document creation and can be converted to slides, PDFs, etc.
                  </h2>
                  <div className="buttons">
                    <button className="button is-black">Get started</button>
                    <button className="button">Learn More</button>
                  </div>
                  <div className="box has-background-info-light">
                    <p className="is-vcentered columns">
                      <button className="button is-small is-rounded has-text-info">New</button>&nbsp; git commit message
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" className="column
                is-10-mobile is-offset-1-mobile
                is-10-tablet is-offset-1-tablet
                is-4-desktop is-offset-1-desktop
                is-4-widescreen is-offset-1-widescreen
                is-4-fullhd is-offset-1-fullhd">
                  <figure className="image is-square">
                    <img src="https://bulmatemplates.github.io/bulma-templates/images/undraw_Camera_re_cnp4.svg" alt="description" />
                  </figure>
                </div>
      
              </div>
            </div>
          </div>
        </section>
      
        <section id="features">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-10 is-offset-1">
                <h2 className="title is-2">Features</h2>
                <div className="sandbox">
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Hello World</p>
                        <p className="subtitle">What is up?</p>
                      </article>
                    </div>
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Foo</p>
                        <p className="subtitle">Bar</p>
                      </article>
                    </div>
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Third column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                      <div className="tile">
                        <div className="tile is-parent is-vertical">
                          <article className="box tile is-child notification is-white">
                            <p className="title">Vertical tiles</p>
                            <p className="subtitle">Top box</p>
                          </article>
                          <article className="box tile is-child notification is-white">
                            <p className="title">Vertical tiles</p>
                            <p className="subtitle">Bottom box</p>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="box tile is-child notification is-white">
                            <p className="title">Middle box</p>
                            <p className="subtitle">With an image</p>
                            <figure className="image is-4by3">
                              <img src="https://picsum.photos/640/480/?random" alt="Description" />
                            </figure>
                          </article>
                        </div>
                      </div>
                      <div className="tile is-parent is-shady">
                        <article className="box tile is-child notification is-white">
                          <p className="title">Wide column</p>
                          <p className="subtitle">Aligned with the right column</p>
                          <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <div className="content">
                          <p className="title">Tall column</p>
                          <p className="subtitle">With even more content</p>
                          <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                              nunc dui porta orci, quis semper odio felis ut quam.</p>
                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis
                              nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                              lacus, quis faucibus libero. Quisque non semper leo.</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Side column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                    <div className="tile is-parent is-8 is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Main column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-8 is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Murphy&apos;s law</p>
                        <p className="subtitle">Anything that can go wrong will go wrong</p>
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                    <div className="tile is-parent is-shady">
                      <article className="box tile is-child notification is-white">
                        <p className="title">Main column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section id="docs">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-10 is-offset-1">
                <div className="container">
                  <div className="section-heading">
                    <h2 className="title is-2">Docs</h2>
                    <h4 className="subtitle is-5">My latest works</h4>
                  </div>
                  <br/>
            
                  <div className="container portfolio-container">
                    <div className="columns">
                      <div className="column is-4">
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Admin <small>(Light)</small></span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-danger">WIP</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/admin.png" alt="Admin template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/admin.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Cards</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/cards.png" alt="Cards template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/cards.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Forum</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/forum.png" alt="Hero template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/forum.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>InstaAlbum</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="../images/instaalbum.png" alt="Landing template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/instaAlbum.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Landing</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/landing.png" alt="Landing template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/landing.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
            
                      </div>
                      <div className="column is-4">
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Band</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/band.png" alt="Band template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/band.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Cheatsheet</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/cheatsheet.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Hero</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="../images/hero.png" alt="Hero template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/hero.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Kanban</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/kanban.png" alt="Kanban template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/kanban.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Login</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="../images/login.png" alt="Login template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/login.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                      </div>
                      <div className="column is-4">
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Blog</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-danger">WIP</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/blog.png" alt="Blog template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/blog.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Cover</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="../images/cover.png" alt="Cover template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/cover.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Inbox</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/inbox.png" alt="Inbox template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/inbox.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Kanban with Search box</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/kanban2.png" alt="Kanban template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/kanban[search].html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              <span>Modal Cards</span>
                              <span className="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span className="tag is-default">v0.7.2</span>
                                </a>
                                <span className="tag is-default">Desktop</span>
                                <span className="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div className="card-content">
                            <figure className="image">
                              <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot" />
                            </figure>
                          </div>
                          <footer className="card-footer">
                            <a href="templates/modal-cards.html" className="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html" className="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}