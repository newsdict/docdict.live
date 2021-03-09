import { GetServerSideProps } from 'next';
import React from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64';
import Head from '../../components/admins/head'
import Footer from '../../components/portals/footer'

export interface Response{
   data: string
}

export interface ServerSideIndexProps{
   data:Response[]
}

export const getServerSideProps:GetServerSideProps = async () =>{
  const Token = 'Basic ' + Base64.encode('admin:secret')
  const response = await axios.get('http://restheart:8080/tests', {
    headers: {
      Authorization: Token,
    }
  })
  const data = JSON.stringify(response.data)
  return {
    props: {
      data
    }
  }
}

export default class Login extends React.Component {
  props = {
    data: ""
  }
  
  render(): JSX.Element {
    return (
      <div>
        <Head />
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="/" className="box">
                    <div className="field">
                      <label htmlFor="email" className="label">Email</label>
                      <div className="control has-icons-left">
                        <input id="email" type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="password" className="label">Password</label>
                      <div className="control has-icons-left">
                        <input id="password" type="password" placeholder="*******" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" />
                        &nbsp;Remember me
                      </label>
                    </div>
                    <div className="field">
                      <button className="button is-success">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.props.data}
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}