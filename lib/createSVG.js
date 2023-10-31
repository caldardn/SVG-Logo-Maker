const { Shape, Triangle, Circle, Square } = require("./shapes");


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
