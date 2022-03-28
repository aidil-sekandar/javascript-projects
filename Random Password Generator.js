const length = Number.parseInt(prompt("How many character?"));
const count = Number.parseInt(prompt("How many Password?"));

const characters = "abcdefghijklmnopqrstuvwxyz1234567894!@#$%^&*/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let randomNum;
let generatedPass;

const genPass = (length, count) => {
  for (let i = 0; i < count; i++) {
    generatedPass = "";
    for (let j = 0; j < length; j++) {
      randomNum = Math.floor(Math.random() * characters.length);
      generatedPass += characters[randomNum];
    }
    console.log(generatedPass);
  }
};

genPass(length, count);
