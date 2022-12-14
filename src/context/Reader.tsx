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
  currentPosition: number;
}

export const ReaderContext = createContext<Context>({
  text: '',
  setText: () => { },
  isPlaying: false,
  handleStart: () => { },
  words: [],
  currentPosition: 0,
});

export default function ReaderProvider({ children }: Props) {
  const [text, setText] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  // const [defaultTime, setDefaultTime] = useState(500);

  // const currentWordExist = useMemo<boolean>(() => currentWord <= (words.length), [words, currentWord]);
  // console.log(currentWordExist);

  const handleStart = useCallback(() => {
    if (text) {
      setIsPlaying(true);
      const splitedWords = text.split(' ');
      setWords(splitedWords);
    }
  }, [text]);

  const handleNextWord = () => {
    setCurrentPosition((prevState) => prevState + 1);
  };
  
  useEffect(() => {
    if (isPlaying) {
      const newInterval = setInterval(() => {
        handleNextWord();
      }, 200);
      setTimer(newInterval);
    } else {
      clearInterval(timer as NodeJS.Timeout);
    }
  }, [isPlaying, timer]);

  const value = useMemo(
    () => ({ text, setText, isPlaying, handleStart, words, currentPosition }),
    [text, isPlaying, handleStart, words, currentPosition],
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
}

