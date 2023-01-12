export default function getTotalMiliseconds(wordsPerMinute: number) {
  
  const ONE_MINUTE = 60;
  const totalMiliseconds = Math.round((ONE_MINUTE * 100) / wordsPerMinute);

  return totalMiliseconds;
}

