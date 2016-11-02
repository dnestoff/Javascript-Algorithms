function GuessingGame(answer) {
  this.answer = answer;
  this.currentGuess = answer + 1;
}

GuessingGame.prototype.guess = function(number) {
  this.currentGuess = number;
  if(this.currentGuess < this.answer) {
    return 'low';
  } else if(this.currentGuess > this.answer) {
    return 'high'
  } else {
    return 'correct';
  }
}

GuessingGame.prototype.isSolved = function() {
  if(this.answer === this.currentGuess) {
    return true;
  } else {
    return false;
  }
}
