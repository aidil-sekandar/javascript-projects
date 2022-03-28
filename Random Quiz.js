let question = [
  ["What does HTML stand for?\n\na. Hyper Trainer Marking Language\nb. Hyper Text Marketing Language\nc. Hyper Text Markup Language\nd. Hyper Text Markup Leveler", "c"],
  ["What type of data would your name be?\n\na. string\nb. boolean\nc. integer\nd. float", "a"],
  ["Which of the following is NOT a mathematical operator?\n\na. +\nb. -\nc. *\nd. #", "d"],
  ["Which of the following is a logical operator?\n\na. and\nb. then\nc. else\nd. for", "a"],
  ["What is a list of steps that you can follow to finish a task?\n\na. commands\nb. coding\nc. algorithm\nd. computing", "c"],
  ["Third Generation Programming Language also known as ...\n\na. Assembly Language\nb. Low Level Language\nc. Binary code\nd. High level Language", "d"],
  ["In coding terms, a placeholder for a piece of information or values from specific data types is ...\n\na. Editor\nb. Variables\nc. if statement\nd. loops", "b"],
  ["In coding terms, the action of doing something over and over again is ...\n\na. if statement\nb. repeating\nc. loop\nd. while", "c"],
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let turn = [];
for (let i = 0; i < question.length; i++) {
  turn.push(i);
}
const shuffledTurn = shuffle(turn);
let score = 0;

for (let i = 0; i < question.length; i++) {
  console.log(question[shuffledTurn[i]][0]);
  let answer = prompt("What is the answer?").toLowerCase();
  if (answer === question[shuffledTurn[i]][1]) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Incorrect!");
  }
}
console.log(`Congratulations, your final score is ${score}`);
