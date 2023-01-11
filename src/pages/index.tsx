import React, { useContext } from 'react';
import Head from 'next/head';

import { ReaderContext } from '../context/Reader';

import {
  Header,
  Textbox,
  Footer,
  PlayButton,
  DisplayWord,
} from '../components';

export default function Home() {
  const { isPlaying } = useContext(ReaderContext);

  return (
    <div className="bg-base w-full h-screen flex flex-col justify-between">
      <Head>
        <title>Rayo Reader</title>
        <meta name="description" content="App to increase the speed read" />
      </Head>
      <Header />
      <main className="w-full flex items-center justify-center flex-col">
        {isPlaying ? (
          <DisplayWord />
        ) : (
          <>
            {' '}
            <Textbox /> <PlayButton />{' '}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

