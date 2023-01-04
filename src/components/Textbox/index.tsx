import React from 'react';

export default function Textbox() {
  return (
    <div>
      <textarea
        className="rounded-sm
          focus:border-transparent 
          outline-none 
          text-sm
          text-slate-300
          bg-elevation-2 
          p-4 w-full h-96
          resize-none"
        onChange={() => {}}
        value=""
      />
    </div>
  );
}
