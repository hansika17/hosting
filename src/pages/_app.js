import Layout from "../components/Layout";
import '../../styles/index.css'
import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';
import  Nav  from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

axios.defaults.baseURL = 'http://localhost:3000';

// Create a theme instance.


export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>
        <Nav/>
        <Header/>
          <div class="">
            <main>
              <Component {...pageProps} />
            </main>
          </div>
       <Footer/>          
      </React.Fragment>
    );
  }
}