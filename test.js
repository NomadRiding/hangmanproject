let rl = require('readline-sync');

var numOfGuesses;
var gueesedLetters = []
var currentWord = ''
var hangmanWord = []
var letter;

function guess(letter) {
    if (gueesedLetters.indexOf(letter) === -1) {
        gueesedLetters.push(letter);
        numOfGuesses--;
    }
    else {
        for (var i = 0; i < currentWord.length; i++) {
            if (letter === currentWord[i]) {
                var currWrdIndex = currentWord.indexOf(letter)
                hangmanWord.splice(currentWord[i], 0, letter)
            }
        }
    }


    if (isOver() === true) {
        overMessage();
    } else {
        console.log(render());
        letter = prompt("Please enter the letter").toLowerCase();
        guess(letter);
    }
}


function isOver() {
    if (currentWord.split("").sort().join("") === hangmanWord.sort().join("") || numOfGuesses === 0) {
        return true
    } else {
        return false
    }
}

function overMessage() {
    if (currentWord.split().sort().join("") === hangmanWord.sort().join("")) {
        return "You win";
    } else if (numOfGuesses === 0) {
        return "You lose";
    } else {
        return "Game is not over";
    }
}

function render() {
    console.log("The hangman word was %s", currentWord);
    console.log("The total number of guesses are %s", numOfGuesses);
    console.log("Total guess letters are %s", gueesedLetters);

}


function startGame(wordsArray) {
    numOfGuesses = 10;
    gueesedLetters = []
    currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    letter = prompt("Please enter the letter ?")
    guess(letter);
}

function mainProgram() {
    var userSentence = prompt("Please enter sentences to begin.")
    userSentence = userSentence.split(" ")
    startGame(userSentence)
    if (isOver() === true) {
        console.log(overMessage())
        console.log(render())
    }
}

mainProgram()
