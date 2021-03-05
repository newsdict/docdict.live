import React from 'react'
import ReactDOM from 'react-dom'
export default class Top extends React.Component {
  render() {
    return (
      <top>
        <section class="hero is-white is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns  is-vcentered reverse-columns">
                <div class="column
                is-10-mobile is-offset-1-mobile
                is-10-tablet is-offset-1-tablet
                is-5-desktop is-offset-1-desktop
                is-5-widescreen is-offset-1-widescreen
                is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                  <h1 class="title titled is-1 mb-6">
                    Create a document, slide it and share it.
                  </h1>
                  <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                    docdict is an Open Source product that supports document creation and can be converted to slides, PDFs, etc.
                  </h2>
                  <div class="buttons">
                    <button class="button is-black">Get started</button>
                    <button class="button">Learn More</button>
                  </div>
                  <div class="box has-background-info-light">
                    <p class="is-vcentered columns">
                      <button class="button is-small is-rounded has-text-info">New</button>&nbsp; git commit message
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" class="column
                is-10-mobile is-offset-1-mobile
                is-10-tablet is-offset-1-tablet
                is-4-desktop is-offset-1-desktop
                is-4-widescreen is-offset-1-widescreen
                is-4-fullhd is-offset-1-fullhd">
                  <figure class="image is-square">
                    <img src="https://bulmatemplates.github.io/bulma-templates/images/undraw_Camera_re_cnp4.svg" />
                  </figure>
                </div>
      
              </div>
            </div>
          </div>
        </section>
      
        <section id="features">
          <div class="container">
            <div class="columns is-mobile">
              <div class="column is-10 is-offset-1">
                <h2 class="title is-2">Features</h2>
                <div class="sandbox">
                  <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                      </article>
                    </div>
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Foo</p>
                        <p class="subtitle">Bar</p>
                      </article>
                    </div>
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Third column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                      <div class="tile">
                        <div class="tile is-parent is-vertical">
                          <article class="box tile is-child notification is-white">
                            <p class="title">Vertical tiles</p>
                            <p class="subtitle">Top box</p>
                          </article>
                          <article class="box tile is-child notification is-white">
                            <p class="title">Vertical tiles</p>
                            <p class="subtitle">Bottom box</p>
                          </article>
                        </div>
                        <div class="tile is-parent">
                          <article class="box tile is-child notification is-white">
                            <p class="title">Middle box</p>
                            <p class="subtitle">With an image</p>
                            <figure class="image is-4by3">
                              <img src="https://picsum.photos/640/480/?random" alt="Description" />
                            </figure>
                          </article>
                        </div>
                      </div>
                      <div class="tile is-parent is-shady">
                        <article class="box tile is-child notification is-white">
                          <p class="title">Wide column</p>
                          <p class="subtitle">Aligned with the right column</p>
                          <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <div class="content">
                          <p class="title">Tall column</p>
                          <p class="subtitle">With even more content</p>
                          <div class="content">
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
                  <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Side column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                    <div class="tile is-parent is-8 is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Main column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="tile is-ancestor">
                    <div class="tile is-parent is-8 is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Murphy's law</p>
                        <p class="subtitle">Anything that can go wrong will go wrong</p>
                        <div class="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                      </article>
                    </div>
                    <div class="tile is-parent is-shady">
                      <article class="box tile is-child notification is-white">
                        <p class="title">Main column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
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
          <div class="container">
            <div class="columns is-mobile">
              <div class="column is-10 is-offset-1">
                <div class="container">
                  <div class="section-heading">
                    <h2 class="title is-2">Docs</h2>
                    <h4 class="subtitle is-5">My latest works</h4>
                  </div>
                  <br/>
            
                  <div class="container portfolio-container">
                    <div class="columns">
                      <div class="column is-4">
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Admin <small>(Light)</small></span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-danger">WIP</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/admin.png" alt="Admin template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/admin.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Cards</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/cards.png" alt="Cards template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/cards.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Forum</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/forum.png" alt="Hero template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/forum.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>InstaAlbum</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="../images/instaalbum.png" alt="Landing template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/instaAlbum.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Landing</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/landing.png" alt="Landing template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/landing.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
            
                      </div>
                      <div class="column is-4">
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Band</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/band.png" alt="Band template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/band.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Cheatsheet</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/cheatsheet.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Hero</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="../images/hero.png" alt="Hero template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/hero.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Kanban</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/kanban.png" alt="Kanban template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/kanban.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Login</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="../images/login.png" alt="Login template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/login.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                      </div>
                      <div class="column is-4">
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Blog</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-danger">WIP</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/blog.png" alt="Blog template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/blog.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Cover</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="../images/cover.png" alt="Cover template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/cover.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Inbox</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">Mobile</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/inbox.png" alt="Inbox template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/inbox.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Kanban with Search box</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://bulmatemplates.github.io/bulma-templates/images/kanban2.png" alt="Kanban template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/kanban[search].html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html" class="card-footer-item">Source
                              Code</a>
                          </footer>
                        </div>
                        <div class="card">
                          <header class="card-header">
                            <p class="card-header-title">
                              <span>Modal Cards</span>
                              <span class="is-pulled-right">
                                <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                                  <span class="tag is-default">v0.7.2</span>
                                </a>
                                <span class="tag is-default">Desktop</span>
                                <span class="tag is-default">?</span>
                              </span>
                            </p>
                          </header>
                          <div class="card-content">
                            <figure class="image">
                              <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot" />
                            </figure>
                          </div>
                          <footer class="card-footer">
                            <a href="templates/modal-cards.html" class="card-footer-item">Preview</a>
                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html" class="card-footer-item">Source
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
      </top>
    )
  }
}