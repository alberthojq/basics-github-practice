var bankRoll = 0;
var previousSecretWord = 0;

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  if (randomInteger == 0) {
    return 'banana';
  }
  if (randomInteger == 1) {
    return 'chisel';

  }if (randomInteger == 2) {
    return 'faucet';
  }

};
var isStartOfRound = true;
var generateNumCorrectGuessThreshold = function () {
  return Math.floor(Math.random() * 3) + 2;
};

var main = function (input) {
  var input = 'banana';
  var secretWord = rollDice();
  
  if (isStartOfRound) {
    numCorrectGuessesNeededToWin = generateNumCorrectGuessThreshold();
    // Set isStartOfRound to false until start of next round.
    isStartOfRound = false;
  }

  if (bankRoll = 0) {
    numCorrectGuessesNeededToWin = generateNumCorrectGuessThreshold();
  }

  if (input == secretWord) {
    bankRoll +=1 ;

      if(bankRoll >= numCorrectGuessesNeededToWin){
        bankRoll = 0;
        isStartOfRound = true;
        console.log("win");
        return "You guessed correctly " + numCorrectGuessesNeededToWin + " times to win. You win. Please play again";
      }

  
    console.log("correct. current correct guesses = " + bankRoll);
    return "You guessed correctly for " + bankRoll + ". You need to guess the next  " + (numCorrectGuessesNeededToWin - bankRoll) + " rounds to win.";
  }

  bankRoll = 0;
  console.log("wrong. current correct guesses =  " + bankRoll);
  return "You guessed incorrectly. You guessed" + input + " .You need the next " + numCorrectGuessesNeededToWin + " guesses. You will restart";

};

