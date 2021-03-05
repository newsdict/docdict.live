import React, { Component } from 'react'
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from "ra-data-json-server"

import { PostList } from './posts'

class ReactAdmin extends Component {

  render () {
    return (
      <Admin
        dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}
      >
        <Resource
          name="posts"
          list={PostList}
        />
      </Admin>
    )
  }
}

export default ReactAdmin