import React from 'react';
import Head from 'next/head';

import { Header, Textbox } from '../components';

export default function Home() {
  return (
    <div className="bg-base w-full h-screen flex flex-col justify-between">
      <Head>
        <title>Rayo Reader</title>
        <meta name="description" content="App to increase the speed read" />
      </Head>
      <Header />
      <main className="w-full flex items-center justify-center flex-col">
        <Textbox />
      </main>
      <footer className="w-full py-12 h-2 bg-elevation-1 flex justify-center items-center">
        <a
          className="cursor-pointer text-gray-500 hover:text-gray-400"
          href="https://github.com/gabriellukke/rayo-reader"
        >
          Github project
        </a>
      </footer>
   </div>
  );
}

