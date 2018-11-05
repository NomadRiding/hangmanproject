let readlineSync = require('readline-sync');

let alpha = /a-z/
let wordsBank = ["lion", "zebra", "giraffe","hyena"];



function getUserChoice(words){
  userChoice = readlineSync.question(' guess a letter...:');
  userChoice = userChoice.toLowerCase();

  while(!words.inclues(alpha)){
    console.log(`${userChoice} doesn't seem to be in the AMERICAN alphabet... try again!`)
    userChoice = readLineSync.question('pick one of the 26 letters in the alphabet...: ');
  }
  console.log(userChoice);
  return userChoice;
}


function beginGame(){

  console.log(".")
  console.log("                                                       ");
  console.log("                                                       ");
  console.log("You wake up...");
  console.log("There's a crowd looking at you, there's a man next to you speaking...");
  console.log("You notice the noose around your neck as he says.");
  console.log("WELCOME TO HANGMAN! Guess the word to save your life...");
  console.log("                                                       ");
  console.log("The category is animals from Africa");
  let chances = 10;
  let userSelection;
  let userChoice;
  let continuePlaying = true;
  let randomWord = matchingWord(wordsBank);
  let wordArray = randomWord.split('');
  let guessWords = wordArray.map( x => '_');


  while(continuePlaying === true){
    userSelection = categoryChoice();
  }
  function wordSelection(words){
    let wordBankIndex = Math.floor(Math.random() * words.length);
    let word = words[wordBankIndex];
    return word;
  }

  function matchingWord(guessWords, wordArray,userChoice){
    for (let i = 0; i < guessWords.length; i++){
      if(userChoice === wordArray[i]){
        guessWords[i] = userChoice;
      }else{
        console.log("I'm sorry that word isn't one of the answers... You lose a point.");
        chances--;
      }
    }console.log(guessWords);
  }
}
beginGame()
