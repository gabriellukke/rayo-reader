import React, { useContext } from 'react';
import { ReaderContext } from '../../context/Reader';

export default function Textbox() {
  const { text, setText } = useContext(ReaderContext);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

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
        placeholder="Paste your text here"
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}

