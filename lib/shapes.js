class Shape {
  constructor(userShapecolor, userTextColor, userText){
    this.userShapecolor = userShapecolor
    this.userTextColor = userTextColor
    this.userText = userText
  }
  
}
class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polyline points="150,18 244,182 56,182" fill="${this.userShapecolor}"/>
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
            </svg>`
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.userShapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
            </svg>`
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="250" height="250" fill ="${this.userShapecolor}"/>
            <text x="130" y="125" font-size="60" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
            </svg>`
  }
}


module.exports = { Shape, Circle, Triangle, Square };