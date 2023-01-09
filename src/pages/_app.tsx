import React from 'react';
import type { AppProps } from 'next/app';
import ReaderProvider from '../context/Reader';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <ReaderProvider>
      <Component {...pageProps} />
    </ReaderProvider>
  )
}

