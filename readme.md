There are may way to input in JavaScript.
like prompt() function.
But prompt can not use in terminal.
So for input in terminal you need to use a function named <b> readline</b>

Here I'm showing you how to use this function.

## 1. First we require readline function

```
const readline = require("readline");
```

## 2. We need to create an interfaces dor input and output

```const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
```

## 3. If you want to input many times as you like then you have to use rl.on

```
console.log("Enter your Inch:");
rl.on("line", (inch) => {
  var f = convert(inch);
  console.log(`${inch} Inch is: ${Feet} Feet`);
  console.log("Enter your Inch:");
});
```

## 4. If you want one time input then use rll.question.It will allow you to input once

```
rl.question("Enter your inch: ", (inch) => {
  var Feet = convert(inch);
  console.log(`${inch} Inch is: ${Feet} Feet`);
  rl.close();
});
```

## 5. If you want to use together, this is the best as far I came to use on and question together and taking input many times

```
rl.on("line", () => {
  rl.question("Enter your inch: ", (inch) => {
    var Feet = convert(inch);
    console.log(`${inch} Inch is: ${Feet} Feet`);
  });
});
```

## 6. for user input in arr

After Input all array elements you have to terminate your console to see output of array.

```
var lines = [];
let sum = 0;
rl.on("line", (line) => {
  lines.push(line);
});

//you can write any other operation here

rl.on("close", () => {
  for (let i = 0; i < lines.length; i++) {
    sum = parseInt(lines[i]) + sum;
  }
  console.log(sum);
  console.log(lines);
});

```

# or

```
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
```

# N.B: Note That you can not use <u><b>on</b></u> and <u><b>question</b></u> function in a same js file.If you do then <u><b>question</b></u> will work first and if you write <u><b>on</b></u> first then it will never work

I tried to write basics of readline function with my little knowledge and all data that I have found in google. Feel free to correction any of my mistake and contribute your knowledge of readline function in this repo
