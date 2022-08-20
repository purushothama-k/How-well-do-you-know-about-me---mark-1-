const readlineSync = require("readline-sync");
const userInput = readlineSync.question("Hello! what's your name? ");
console.log(`Welcome! ${userInput}`)
console.log(`Let's play a quiz on general topics!`)
let score = 0;
let highScore = 5;

const checkOutScore = [{
  name: "Uttam",
  score: 5
}, {
  name: "Jagadish",
  score: 4
}, {
  name: "chakri",
  score: 3
}
]

//quiz function
const playQuiz = function(question, answer) {
  console.log("---------------------------------------------------------------")

  const userAnswer = readlineSync.question(question);

  // options = readlineSync.question(options);


  if (userAnswer === answer) {
    console.log(`You answered: ${userAnswer}`);
    console.log("Right answer")
    score = score + 1;

  } else {
    console.log(`You answered: ${userAnswer}`);
    console.log("Wrong answer")
    score = score - 1;

  }
  console.log("---------------------------------------------------------------")

}


const questionBook = [
  {
    question: `
      1. Guess my favourite food?
        a.Lemon Rice
        b.Biriyani
        c.Rice & dal
      `,
    answer: "b"
  },
  {
    question: `
      2. Guess in which state I do live?
        a.Kerala
        b.Andhra Pradhesh
        c.Karnataka
      `,
    answer: "c"
  },
  {
    question: `
      3. Guess my first company?
        a.L&T
        b.Jajal
        c.Prototech
      `,
    answer: "a"
  },
  {
    question: `
      4. Guess my bike?
        a.TVS
        b.Hero
        c.Bajaj
      `,
    answer: "a"
  },
  {
    question: `
      5. Guess my favourite city?
        a.Mysore
        b.Hyderabad
        c.Bangalore
      `,
    answer: "c"
  }
]

for (let i = 0; i < questionBook.length; i++) {

  const quizquestion = questionBook[i];
  playQuiz(quizquestion.question, quizquestion.answer);


}

if (score > 2) {
  console.log(`🖐️ Well played ${userInput}, here's your final score: ${score} 🖐️`);
} else {
  console.log(`😜 Thanks for playing ${userInput}, you need to know bit more about me and here's your final score: ${score} 😜`);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

console.log(`🎯 Checkout the recent highscores! 🎯`)

for (let i = 0; i < checkOutScore.length; i++) {
  const hs = checkOutScore[i];
  console.log(`${hs.name} : Score - ${hs.score}`)
}
