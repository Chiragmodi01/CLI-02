
var readlineSync = require("readline-sync");

const chalk = require('chalk');
const log = console.log;

var score = 0;


// Input > Processing > Output

var userName = readlineSync.question("What's your name? ");
console.log(chalk.bgRed.bold("Welcome " + userName + " , let's play a quiz on Pirates of the Caribbean."));
console.log("                  ");
console.log(chalk.bgRed.bold("Savvy?"))

console.log("                  ");


console.log("                  ");
console.log("                  ")

function start(question,answer){
  var userAnswer = readlineSync.question(question);
  console.log("                  ");

  if(userAnswer === answer){
    console.log(chalk.greenBright("Correct! Bravo :)"));
    score= score + 1;
  }
  else{
    console.log(chalk.redBright("Incorrect! Keep trying :("));
    score = score - 1;
  }
  console.log(chalk.green("Score: ",score));
  console.log("               ");
  console.log("               ");
}

var questions = [
  {
    question:`Who Says: "Commodore, I really must protest."
  
    a. Will Turner
    b. Elisabeth Swan
    c. Jack Sparrow
    d. Davy Jones \n `,
    answer:"b",
  },
  {
    question: `Who Directed The Pirates Of The Caribbean Films? " 

    a. Steven Speilberg.
    b. Gore Verbinski.
    c. Terence Davies.
    d. Todd Haynes\n`,
    answer : "b",
  },
  {
    question: `Why does Will Turner point a gun at his own head?

   a. He knows that Barbossa and the other pirates need him alive.
   b. He wants to kill himself because Elizabeth died.
   c. Jack Sparrow makes him do it.
   d. He knows the only way Elizabeth can be free is if he dies.\n`,
    answer : "a",
  },
  {
    question:`What kind of pet does Barbossa have in "Pirates of the Caribbean? "

    a. Parrot
    b. Dog
    c. Cat
    d. Monkey \n`,
    answer:"d",
  },
  {
    question : `Why does Jack Sparrow want to kill Captain Barbossa?

    a. Barbossa left Jack alone on an island and stole "The Black Pearl.
    b. "Barbossa stole Elizabeth from Jack.
    c. Jack is crazy.
    d. Barbossa killed Jack's father.\n`,
    answer:"a",
  },
  {
    question : `In At Worlds End, What Does Elizabeth Swan Say When She Enters The Brethren Court?

    a. Sao Feng Is Dead.
    b. Where Is Will?
    c. Lets Go To War.
    d. I must protest. \n`,
    answer:"a",
  },
   {
    question : `What is Barbossa's first name?

    a. Hector
    b. Flector
    c. Bob
    d. None of the above \n`,
    answer:"a",
  },
 {
    question : `Complete the words to a pirate's favorite song!
Yo ho, yo ho, a pirates life for me! We _____ and ____ and rifle and loot, drink up me hearties yoho!

    a. pirates and plotters
    b. mortals and chortle
    c. pillage and plunder
    d. savage and ravage \n`,
    answer:"c",
  },

]

for(var i = 0;i<questions.length;i++){
  var currentquestion = questions[i];
  start(currentquestion.question,currentquestion.answer);
}

console.log(chalk.bgMagenta.bold("Your total Score is :",score));
