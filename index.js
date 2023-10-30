const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js");
const fs = require('fs');
const userPrompt = inquirer.createPromptModule()

const questions = [
    {
      type: "input",
      message: "Please enter up to three characters to be displayed for you logo.",
      name: "userText",
      default: "DNC",
      validate: (input) => {
        if(input <= 3 && input > 1){
            return true
        }else{
            return "Please enter up to three characters."
        }
      }
    },
    {
        type: "input",
        message: "Please enter what text color you would like.",
        name: "userTextColor",
        default: "Blue",
        validate: (input) => {
            if(colorChoice(input)){
                return true
            }else{
                return "Please enter a valid color"
            }
          }
    },
    {
        type: "list",
        message: "Please select the shape you would like to have.",
        name: "userShape",
        default: "Circle",
        choice:[
            "Circle",
            "Triangle",
            "Square"
        ]
     },
     {
        type: "input",
        message: "Please enter the color you would like for your shape.",
        name: "userShapeColor",
        default: "Green",
        validate: (input) => {
            if(colorChoice(input)){
                return true
            }else{
                return "Please enter a valid color"
            }
          }
      },
]

userPrompt(questions).then((answers) => {

    // Generate the SVG based on the provided answers
    let svg;
    switch (answers.shape) {
      case "Circle":
        svg = new Circle(answers.userText, answers.userTextColor, answers.userShapeColor).render(); // Create a Circle shape instance
        break;
      case "Triangle":
        svg = new Triangle(answers.userText, answers.userTextColor, answers.userShapeColor).render(); // Create a Triangle shape instance
        break;
      case "Square":
        svg = new Square(answers.userText, answers.userTextColor, answers.userShapeColor).render(); // Create a Square shape instance
        break;
      default:
        console.error("Invalid shape"); // Log an error message for an invalid shape
        return;
    }
  
    // Save the SVG to a file
    fs.writeFile("./examples/logo.svg", svg, (err) => {
      if (err) {
        console.error("Error saving SVG:", err); // Log an error if saving the SVG fails
      } else {
        console.log("SVG saved to logo.svg"); // Log a success message if the SVG is saved successfully
      }
    });
  });