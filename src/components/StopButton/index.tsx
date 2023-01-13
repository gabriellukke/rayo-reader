import React, { useContext } from 'react';

import { ReaderContext } from '../../context/Reader';

export default function StopButton() {
  const { handleReset } = useContext(ReaderContext);

  return (
    <button
      className="
          mt-10
          bg-blue-700
          hover:bg-blue-800 
          hover:text-slate-200
          w-18 h-12 px-4 
          rounded-sm
          text-slate-50
          uppercase
          text-sm
        "
      type="button"
      onClick={handleReset}
    >
      Stop
    </button>
  );
}

