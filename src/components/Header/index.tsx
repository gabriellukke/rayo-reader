import React from 'react';

export default function Header() {
  return (
    <div className="w-full h-16 bg-elevation-1 flex items-center justify-center">
      <h1 className="text-gray-300 text-3xl ml-5">Rayo Reader</h1>
      <div className="flex items-center ml-5 text-gray-300">Version 0.1.0 (Beta)</div>
    </div>
  );
}

