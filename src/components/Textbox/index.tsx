import React from 'react';

export default function Textbox() {
  return (
    <form className="p-4 flex flex-col md:w-4/6 w-full justify-center items-center">
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
    </form>
  );
}
