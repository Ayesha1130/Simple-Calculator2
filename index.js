#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "oparator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.oparator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oparator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oparator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oparator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
