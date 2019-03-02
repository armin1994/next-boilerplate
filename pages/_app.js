import React from 'react';
import PropTypes from 'prop-types';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { ga } from '../helpers';
import 'antd/dist/antd.less';

if (process.browser) {
  Router.events.on('routeChangeComplete', url => ga.pageview(url));
}

class MyApp extends App {
  static propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    pageProps: PropTypes.shape({}).isRequired,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Oh My Full Stack</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
