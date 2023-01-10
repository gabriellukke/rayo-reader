import React, {
  useState,
  useMemo,
  useCallback,
  createContext,
  ReactElement,
  useEffect,
} from 'react';

interface Props {
  children: ReactElement;
}

interface Context {
  text: string;
  setText: (text: string) => void;
  isToggleReader: boolean;
  handleStart: () => void;
}

export const ReaderContext = createContext<Context>({
  text: '',
  setText: () => { },
  isToggleReader: false,
  handleStart: () => { },
});

export default function ReaderProvider({ children }: Props) {
  const [text, setText] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isToggleReader, setIsToggleReader] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [defaultTime, setDefaultTime] = useState(500);

  const handleStart = useCallback(() => {
    setIsToggleReader(true);
    const splitedWords = text.split(' ');
    setWords(splitedWords);
  }, [text]);

  const handleNextWord = () => {
    setCurrentWord((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (isToggleReader) {
      const newInterval = setInterval(() => {
        handleNextWord();
      }, defaultTime);
    }
  }, [isToggleReader, defaultTime]);

  const value = useMemo(
    () => ({ text, setText, isToggleReader, handleStart }),
    [text, isToggleReader, handleStart],
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
}

