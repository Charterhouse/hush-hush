import React from 'react'
import { Global } from '@emotion/core'
import App, { Container } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Global styles={{ 'html,body': {
          backgroundColor: 'black',
          margin: 0,
          padding: 0
        } }} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
