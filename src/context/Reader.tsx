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
  isPlaying: boolean;
  handleStart: () => void;
  words: string[];
  currentWord: number;
}

export const ReaderContext = createContext<Context>({
  text: '',
  setText: () => { },
  isPlaying: false,
  handleStart: () => { },
  words: [],
  currentWord: 0,
});

export default function ReaderProvider({ children }: Props) {
  const [text, setText] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [defaultTime, setDefaultTime] = useState(500);

  const handleStart = useCallback(() => {
    setIsPlaying(true);
    const splitedWords = text.split(' ');
    setWords(splitedWords);
  }, [text]);

  const handleNextWord = () => {
    setCurrentWord((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (isPlaying) {
      const newInterval = setInterval(() => {
        handleNextWord();
      }, defaultTime);
    }
  }, [isPlaying, defaultTime]);

  const value = useMemo(
    () => ({ text, setText, isPlaying, handleStart, words, currentWord }),
    [text, isPlaying, handleStart, words, currentWord]
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
}

