const { Shape, Triangle, Circle, Square } = require("./shapes");

// function createSVG(data) {
//   let svgContent = "";

//   if (data.shape.matches("circle")) {
//     const shape = new Circle(
//       data.userShapecolor,
//       data.userTextColor,
//       data.userText
//     );
//     return shape.render();
//   }

//   if (data.shape.matches("triangle")) {
//     const shape = new Triangle(
//       data.userShapecolor,
//       data.userTextColor,
//       data.userText
//     );
//     return shape.render();
//   }

//   if (data.shape.matches("square")) {
//     const shape = new Square(
//       data.userShapecolor,
//       data.userTextColor,
//       data.userText
//     );
//     return shape.render();
//   }
//   return svgContent;
// }

function createSVG(data) {
    const userShapeColor = data.userShapeColor.toLowerCase()
    const userTextColor = data.userTextColor.toLowerCase()
  switch (data.userShape) {
    case "Circle":
      const circle = new Circle(
        userShapeColor,
        userTextColor,
        data.userText
      );
      return circle.render();
      break;

    case "Triangle":
      const triangle = new Triangle(
        userShapeColor,
        userTextColor,
        data.userText
      );
      return triangle.render();
      break;
    case "Square":
      const square = new Square(
        userShapeColor,
        userTextColor,
        data.userText
      );
      return square.render();
      break;
    default:
      console.error("error in the switch");
  }
}

module.exports = { createSVG };
