import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 h-12 bg-elevation-1 flex justify-center items-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-gray-500 hover:text-gray-400"
        href="https://github.com/MurilloWolf/speed-read"
      >
        Github project
      </a>
    </footer>
  );
}
