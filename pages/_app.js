import '../styles/global.css'
import Head from 'next/head'
import Header from '../components/header'
import React, { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.title = "New Pork Times";
  }, []);

  return (
  <div>
      <Head>
        <title>New Pork Times</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
    <Header></Header>
    <Component {...pageProps} />
  </div>
  )
}