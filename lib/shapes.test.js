const { Triangle, Circle, Square } = require("./shapes");


  describe("Circle", () => {
    it("Should make a circle", () => {
      const shape = new Circle();
      let color = ('green');
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="100" fill="${color}" />`
      );
    });
  });
  describe("Triangle", () => {
    it("Should make a Triangle", () => {
      const shape = new Triangle();
      let color = ('blue');
      expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
      );
    });
  });
  describe("Square", () => {
    it("Should make a Square", () => {
      const shape = new Square();
      let color = ('orange');
      expect(shape.render()).toEqual(
        `<rect x="50" width="200" height="200" fill="${color}" />`
      );
    });
  });

