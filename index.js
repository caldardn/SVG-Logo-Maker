const inquirer = require("inquirer");
const fs = require('fs');
const {generateSVG} = require('./lib/createSVG');

const questions = [
    {
      type: "input",
      message: "Please enter up to three characters to be displayed for you logo.",
      name: "userText",
      default: "DNC",
      validate: (input) => {
        if(input.length > 3 ){
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

function init() {
  inquirer.prompt(questions)
  .then((data) =>
  {
    const svgContent = generateSVG(data)

    fs.writeFile('logo.svg',svgContent,(err)=>
    err ? console.error(err) :console.log ('SVG created'))
  }
  );
}


init();

// fs.writeFile('logo.svg',svgContent(data),(err)=>
//     err ? console.error(err) :console.log ('README created'))