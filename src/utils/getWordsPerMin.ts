export default function getTotalMiliseconds(wordsLength: number, wordsPerMinute: number) { 
  const ONE_SECOND = 1000;
  const totalMiliseconds = (wordsLength / wordsPerMinute) * ONE_SECOND;
  return totalMiliseconds;
}

