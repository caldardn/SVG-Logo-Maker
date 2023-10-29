const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
    {
      type: "input",
      message: "Please enter up to three characters to be displayed for you logo.",
      name: "userText",
      default: "DNC",
    },
    {
        type: "input",
        message: "Please enter what text color you would like.",
        name: "userTextColor",
        default: "Blue",
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
      },
]

function init() {
    inquirer.prompt(questions)
    .then((answers) =>
    {
    
    }
    );
}


init();