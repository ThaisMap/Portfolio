import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html lang='pt-BR' dir='ltr'>
        <Head>
          <link rel='icon' href='/favicon.png' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
