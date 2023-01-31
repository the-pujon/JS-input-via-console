const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convert(number) {
  var feet = number / 12;
  return feet;
}

//If you want to input many times as you like then you have to use rl.on
//Note That ypu can npt use on and question function in a same js file.If you do then question will work first and if you write on first then it will never work
//console.log("Enter your Inch:");
//rl.on("line", (inch) => {
//  var f = convert(inch);
//  console.log(`${inch} Inch is: ${Feet} Feet`);
//  console.log("Enter your Inch:");
//});

//If you want one time input then use rll.question.It will allow you to input once
//rl.question("Enter your inch: ", (inch) => {
//  var Feet = convert(inch);
//  console.log(`${inch} Inch is: ${Feet} Feet`);
//  rl.close();
//});

//This is the best as far I came to use on and question together and taking input many times
//rl.on("line", () => {
//  rl.question("Enter your inch: ", (inch) => {
//    var Feet = convert(inch);
//    console.log(`${inch} Inch is: ${Feet} Feet`);
//  });
//});

//for user input in arr
var lines = [];
let sum = 0;
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  for (let i = 0; i < lines.length; i++) {
    sum = parseInt(lines[i]) + sum;
  }
  console.log(sum);
  console.log(lines);
});
