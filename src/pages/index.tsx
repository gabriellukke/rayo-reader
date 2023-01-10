import React from 'react';
import Head from 'next/head';

import { Header, Textbox, Footer, PlayButton } from '../components';

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
        <PlayButton />
      </main>
      <Footer />
   </div>
  );
}

