let loveScore = Math.random() * 100;
loveScorePercentage = Math.floor(loveScore);

if (loveScore > 65 && loveScore <= 100) {
    console.log('Your a couple', loveScorePercentage)
} else {
    console.log('You love score is ' + loveScorePercentage)
}