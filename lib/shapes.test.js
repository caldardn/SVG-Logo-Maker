const { Triangle, Circle, Square } = require("./shapes");


  describe("Circle", () => {
    it("Should make a circle", () => {
      
      let userTextColor = ('black');
      let userShapecolor =('white')
      let userText = ('AAA')
      const shape = new Circle(userShapecolor, userTextColor, userText);
      console.log(shape.render())
      expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${userShapecolor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColor}">${userText}</text>
            </svg>`
      );
    });
  });
  describe("Triangle", () => {
    it("Should make a Triangle", () => {
      let userTextColor = ('blue');
      let userShapecolor =('green')
      let userText = ('BBB')
      const shape = new Triangle(userShapecolor, userTextColor, userText);
      expect(shape.render()).toEqual(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polyline points="150,18 244,182 56,182" fill="${userShapecolor}"/>
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${userTextColor}">${userText}</text>
            </svg>`
      );
    });
  });
  describe("Square", () => {
    it("Should make a Square", () => {
      let userTextColor = ('orange');
      let userShapecolor =('grey')
      let userText = ('CCC')
      const shape = new Square(userShapecolor, userTextColor, userText);
      expect(shape.render()).toEqual(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="250" height="250" fill ="${userShapecolor}"/>
            <text x="130" y="125" font-size="60" text-anchor="middle" fill="${userTextColor}">${userText}</text>
            </svg>`
      );
    });
  });

