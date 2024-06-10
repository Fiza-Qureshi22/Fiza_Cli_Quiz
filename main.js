#! /usr/bin/env node 
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q:1 What is the primary purpose of TypeScript?",
        choices: ["To make websites more interactive", "To add type safety to JavaScript", "To improve CSS styling", "To speed up the execution of JavaScript code"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q:2 Which of the following is a correct way to define a variable in TypeScript?",
        choices: ["var name: string = 'John'", "let name: number = 'John'", "const name: boolean = true", "name: string = 'John'"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q:3  Which TypeScript feature allows you to specify the shape of an object?",
        choices: ["Generics", "Interfaces", "Enums", " Modules"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q:4 How do you declare an array of strings in TypeScript? ",
        choices: ["let names: string[] = ['John', 'Jane']", "let names: [string] = ['John', 'Jane']", "let names: Array<string> = ['John', 'Jane']", "let names: string = ['John', 'Jane'];"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q:5  What is a tuple in TypeScript?  ",
        choices: ["An array with fixed length and known types for each element", "A class with only static methods", "A special type of function.A type of variable that can change type dynamically."]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q:6  What does the unknown type represent in TypeScript?",
        choices: ["A type that can be assigned any value without type checking", "A type that can represent any value but requires type checking before use", "A type that can only represent null or undefined values", "A type that represents an object with any properties."]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q:7 How do you specify the type of a function's parameter in TypeScript?",
        choices: ["function greet(name: string) { console.log(name); }", "function greet(string name) { console.log(name); }", "function greet(name) { console.log(name); }", "function greet(name: String) { console.log(name); }"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Q:8 How do you define a tuple in TypeScript? ",
        choices: ["let tuple: [string, number] = ['hello', 10]", "let tuple: (string, number) = ['hello', 10]", "let tuple = ['hello', 10]", "let tuple: [string, number] = ['hello', '10'];"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q:9  Which of the following is a correct way to define an array of numbers in TypeScript?",
        choices: ["let list: number[] = [1, 2, 3]", "let list: Array<number> = [1, 2, 3]", "let list: number = [1, 2, 3]", "let list: [number] = [1, 2, 3];"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q:10 What does the unknown type represent in TypeScript? ",
        choices: ["A type that can be assigned any value without type checking", "A type that can represent any value but requires type checking before use", "A type that can only represent null or undefined values", "A type that represents an object with any properties."]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "To add type safety to JavaScript.":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.InCorrect!");
}
;
switch (quiz.question_2) {
    case "var name: string = 'John'  ":
        console.log("2.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("2.InCorrect!");
        break;
}
;
switch (quiz.question_3) {
    case " Interfaces  ":
        console.log("3.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("3.InCorrect!");
        break;
}
;
switch (quiz.question_4) {
    case "[let names: string[] = ['John', 'Jane']":
        console.log("4.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("4.InCorrect!");
        break;
}
;
switch (quiz.question_5) {
    case "An array with fixed length and known types for each element":
        console.log("5.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("5.InCorrect!");
        break;
}
;
switch (quiz.question_6) {
    case "A type that can represent any value but requires type checking before use":
        console.log("6.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("6.InCorrect!");
        break;
}
;
switch (quiz.question_7) {
    case "function greet(name: string) { console.log(name); }":
        console.log("7.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("7.InCorrect!");
        break;
}
;
switch (quiz.question_8) {
    case "let tuple: [string, number] = ['hello', 10]":
        console.log("8.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("8.InCorrect!");
        break;
}
;
switch (quiz.question_9) {
    case "let list: number[] = [1, 2, 3]":
        console.log("9.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("9.InCorrect!");
        break;
}
;
switch (quiz.question_10) {
    case "A type that can represent any value but requires type checking before use.":
        console.log("10.Correct!");
        ++score; // pre increment y 1 score add kardega 
        break;
    default:
        console.log("10.InCorrect!");
        break;
}
;
