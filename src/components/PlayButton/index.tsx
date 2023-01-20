import React, { useContext } from 'react';

import { ReaderContext } from '../../context/Reader';

export default function PlayButton() {
  const { handleStart, text } = useContext(ReaderContext);

  const disabled = !text;

  return (
    <button
      className="
          mt-10
          bg-blue-700
          hover:bg-blue-800 
          hover:text-slate-200
          disabled:bg-gray-400
          w-18 h-12 px-4 
          rounded-sm
          text-slate-50
          uppercase
          text-sm
        "
      type="button"
      disabled={disabled}
      onClick={handleStart}
    >
      Read
    </button>
  );
}

