#! /usr/bin/env node
//SHABANG //
import inquirer from "inquirer";
let answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of operators to perform action",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      
    ],
  },
]);
//conditional statement//
if(answer.operators ==="Addition")[
    console.log(answer.firstNumber + answer.secondNumber)
] 
else if(answer.operators ==="Subtraction")[
    console.log(answer.firstNumber - answer.secondNumber)
]
if(answer.operators ==="Multiplication")[
    console.log(answer.firstNumber * answer.secondNumber)
] 
else if(answer.operators ==="Division")[
    console.log(answer.firstNumber / answer.secondNumber)
]
if(answer.operators ==="Exponentiation")[
    console.log(answer.firstNumber ** answer.secondNumber)
] 

else["Please select correct operators"]