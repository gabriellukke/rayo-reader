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
  handleReset: () => void;
}

export const ReaderContext = createContext<Context>({
  text: '',
  setText: () => {},
  isPlaying: false,
  handleStart: () => {},
  words: [],
  currentPosition: 0,
  handleReset: () => {},
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
    console.log('WTF TIMER');
    setCurrentPosition((prevState) => prevState + 1);
  };

  const handleReset = useCallback(() => {
    setCurrentPosition(0);
    setIsPlaying(false);
    clearInterval(timer as NodeJS.Timeout);
  }, [timer]);

  useEffect(() => {
    if (isPlaying) {
      const defaultInterval = () => {
        const defaultTime = 200;

        const newTimer = setInterval(handleNextWord, defaultTime);
        return newTimer;
      };
      const newTimer = defaultInterval();
      setTimer(newTimer);
    }
  }, [isPlaying]);
  
  useEffect(() => {
      if (timer && currentPosition >= words.length) {
        clearInterval(timer);
        setCurrentPosition(words.length - 1);
      }
  }, [currentPosition, timer, words]);

  const value = useMemo(
    () => ({ text, setText, isPlaying, handleStart, words, currentPosition, handleReset }),
    [text, isPlaying, handleStart, words, currentPosition, handleReset],
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
}
