import React from 'react'
import ReactDOM from 'react-dom'
import NextHead from 'next/head'
export default class HeadApp extends React.Component {
  render() {
    return (
      <NextHead>
        <title>docdict.live</title>
      </NextHead>
    )
  }
}