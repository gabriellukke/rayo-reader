import React, { useState, useMemo, createContext, ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

interface Context {
  text: string;
  setText: (text: string) => void;
}

export const ReaderContext = createContext<Context>({
  text: '',
  setText: () => {},
});

export default function ReaderProvider({ children }: Props) {
  const [text, setText] = useState('');

  const value = useMemo(() => ({ text, setText }), [text]);

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
}

