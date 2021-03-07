import React from 'react'
import NextHead from 'next/head'
export default class HeadApp extends React.Component {
  render(): JSX.Element {
    return (
      <NextHead>
        <title>docdict.live</title>
      </NextHead>
    )
  }
}