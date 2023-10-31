const { Shape, Triangle, Circle, Square } = require("./shapes");

describe("Shape", () => {
  describe("Circle", () => {
    it("Should make a circle", () => {
      const shape = new Circle();
      shape.userShapeColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="green" />'
      );
    });
  });
  describe("Triangle", () => {
    it("Should make a Triangle", () => {
      const shape = new Triangle();
      shape.userShapeColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  describe("Square", () => {
    it("Should make a Square", () => {
      const shape = new Square();
      shape.userShapeColor("red");
      expect(shape.render()).toEqual(
        '<rect x="50" width="200" height="200" fill="red" />'
      );
    });
  });
});
