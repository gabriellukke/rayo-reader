import React, { useContext } from 'react';
import { ReaderContext } from '../../context/Reader';

export default function DisplayWord() {
  const { words, currentWord } = useContext(ReaderContext);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-4">
      <div className="h-96 p-4  md:w-4/6 w-full  bg-elevation-2 flex justify-center items-center">
        <h3 className="text-4xl text-gray-300 text-center">
          {words[currentWord]}
        </h3>
      </div>
    </div>
  );
}
