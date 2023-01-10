export default function getWordsPerMin(text: string, time: number) {
  const words = text.split(' ').length;
  
  const ONE_MINUTE = 60;
  const minutes = time / ONE_MINUTE;
  const wordsPerMin = words / minutes;

  return wordsPerMin;
}

