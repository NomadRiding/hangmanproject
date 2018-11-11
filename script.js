let rl = require('readline-sync');
let hangman = require('hangman-ascii');

let alpha = /a-z/
// let begin;
let wordBank =  ["dog", "cat", "lion","rat","goat","donkey","horse","yak","elk","hamster","frog","turtle","rhino","hyena","lynx","dingo","zebra","bear","ram","panther","wolf","camel","fox","tiger","gerbil","gopher","platypus","badger","mule","jackal"];
let userSelection;
// let takeGuess;
let playAgain = true;
let chances = 10;
let chosenWord = wordSelected(wordBank);
let wordArray = chosenWord.split('');
let hiddenWord = wordArray.map( x => '_');
let firstRun = true;
let didWin = false;
let wrongGuess;
let incorrectGuess = [];

//create a map with a function inside.
function printLine(){
  console.log('*'.repeat(50));
}

function wordSelected(wordBank){
  let wordBankIndex = Math.floor(Math.random() * wordBank.length);
  let word = wordBank[wordBankIndex];
  return word;
}
//let luckyGuess = console.log("Lucky...keep going.");

function incorrect(){
incorrectGuess =  wrongGuess.push(userSelection);
return incorrectGuess;
}

// function life(){
// console.log("YOU LIVE ANOTHER DAY...test your luck again?")
//
//   playAgain = rl.question(` (Y)es | (N)o: `).toLowerCase;
//   if (playAgain === "y" || playAgain === "yes"){
//     newGame();
//     // playAgain = true;
//   }else{
//     playAgain === false;
//   }
// }

let insultLines = [
  `You're an idiot...`,
  `WOW? really? ${userSelection} is the letter you go with?`,
  `LOL this will be an easy hanging..`,
  `It's not considered an insult if it's describing you.`,
  `You are an oxygen thief...`,
  `Please just give up, you're not very good at this...`,
  `We're wasting time here.`,
  `Some babies are dropped.. but looks like you were thrown at the wall.`,
  `I'd slap some sense into you but that would be animal abuse.`,
  `I don't know what makes you look stupid, but it works..`,
  `The last time I saw something like you... I flushed it.`,
  `Your brain seems to be decorative...`,
  `Why don't you surprise me? Try saying something smart for once`,
  `Let's just get this hanging over with...`,
  `I'd ask how old you are, but I doubt you can count that high...`,
  `I hope you sued your parents for that face..`,
  `It's better to let people think you're an idiot rather than opening your mouth and proving it.`,
  `I bet your birth certificate is an apology from Trojan`,
  `You're proof that god makes mistakes.`,
  `Do you have a terrible empty feeling.... inside that skull of yours.`,
  `Whenever I'm next to you, I have a strong desire to be alone.`,
  `If I said I had a piece of dirt in my eye, would you move out of view?`,
  `Stupidity isn't a crime, so that's not the reason for the noose`,
  `You're like monday mornings... no one wants you.`,
  `You're the reason gene pools need a lifeguard.`,
  `Sometimes I need what only you can provide... your absence.`,
  `I'd prefer a battle of wits, but you're unarmed.`,
  `If I throw a stick, will it get rid of you?`,
  `Your inferior complex is fully justified`,
  `I'd agree with "${userSelection}" as a choice... but then we'd both be wrong..`,
  `Awww! I like the way you try...`,
  `It is impossible to underestimate you..`,
  `I'm jealous of the people who haven't met you.`,
  `Isn't it dangerous to use one's entire vocabulary in one sentence?`,
  `I like your approach... show us your departure.`,
  `If you were an inanimate object, you'd be a participation trophy.`,
  `You look like your father would have been disappointed if he would have stayed.`,
  `You're not pretty enough to be that DUMB..`,
  `To think you were the fastest sperm...`,
  `This is taking forever...`,
  `Your face looks like it was set on fire and put out with a hammer.`,
  `You're so ugly that when you were born, the doctor slapped your mother.`,
  `Cheer up... they say love is blind...`,
  `To think your mother wanted kids.. and ended up with you.`,
  `You're the reason your mom swallows now...`,
  `How did you crawl out of the abortion bucket?`,
  `If you could do autofellatio, you'd finally suck at everything!`,
  `You look like something I drew with my left hand.`,
  `The only thing that will ever fuck you is life...`,
  `You look like a bag of mashed up assholes.`,
  `You're as important as a white crayon...`,
  `If your parents divorce.. would they still be brother and sister?`,
  `Life tip, don't play hard to get, you're already hard to want.`,
  `Take your time... you still have ${chances} left`,
  `You sound like terms and conditions, in case you're wondering why people ignore you.`,
  `two wrongs don't make a right, your parents are an example.`,
  `There's only one problem with your face, I can see it.`,
  `You have ${chances} left.. why don't you ask a smarter person for help`,
  `Do you like poems? Roses are red. Violets are blue. I got 5 fingers. The middle one's for you.`,
  `Ordinary people live and learn, you just live.`,
  `Aww it's cute when you try to talk about things you don't understand`,
  `I'm glad you're not letting your education get in the way of your ignorance..`,
  `You look like a before picture.`,
  `I like to shop... but I can't buy this bullshit... ${userSelection} is wrong!`,
  `You do know that makeup can't hide stupidity right?`
]

function death(){
  console.log("You failed... just like your dad's condom.");
  console.log("Would you like to play again?");
    newGame();
  }

function initiateGuess(){
      let correct = chosenWord.match(userSelection);
      if(hiddenWord.join("") === chosenWord){
        console.log("");
        console.log("YOU LIVE ANOTHER DAY...test your luck again?");
        console.log(``);
        newGame()
      } else if (correct === null) {
        let insults = insultLines[Math.floor(Math.random() * insultLines.length)];
        console.log("");
        console.log("");
        console.log(insults.toUpperCase());
        console.log("");
        console.log("");
        console.log("");
        console.log(hiddenWord);
        console.log("");
        console.log("");
        chances -= 1;
        console.log(`You have ${chances} chances left`);
        if (chances === 0){
          death();
        }
        console.log(chances)
      } else if (userSelection === "") {
        console.log("the enter bar will not reveal the answer!");
        console.log(`You have ${chances} chances left`);
        if (chances === 0){
          death();
        }
      }
      else {
        console.log("RIGHT!!")
        let fillInBlank = correct.index
        hiddenWord[fillInBlank] = userSelection;
        console.log(hiddenWord);
      }
      if (didWin && !firstRun) {
      newGame()
      }
  }
// function hints(){
//
// }

// function reset(){
//   newGame();
// }

  function newGame(){


    firstRun = false;
    // wordSelected(wordBank);
    chosenWord = wordSelected(wordBank);
    wordArray = chosenWord.split('');
    hiddenWord = wordArray.map( x => '_');
    chances = 10;

    hangman.drawLevel(6, 'cyan')
  console.log('Welcome to HANGMAN!');
  console.log(`Are you ready to "PLAY"?`);
  let begin = rl.question(`(Y)es | (N)o: `).toLowerCase();

  if (begin === 'y' || begin === 'yes') {
    printLine();
console.log("");
console.log("");
console.log("You wake up with a noose around your neck, with an audience watching");
console.log(`The hangman says "Guess the word, save your soul!"`);
console.log("");
console.log("******************** Category : FOUR LEGGED ANIMALS ********************");
console.log("");
console.log("Salvation awaits");
console.log("");
      console.log(`${hiddenWord}`);
      while( playAgain === true ){
      console.log("*******Your category is animals with 4 legs *******");
      userSelection = rl.question("Choose a letter: ");

      initiateGuess();
    }
  }
}


newGame();
