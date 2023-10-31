const { Shape, Triangle, Circle, Square } = require('./shapes');

function createSVG(data) {
    let svgContent = ''

    if(data.shape.includes('circle')){
        const shape = new Circle(data.userShapecolor, data.userTextColor, data.userText)
        return shape.render()
    }

    if(data.shape.includes('triangle')){
        const shape = new Triangle(data.userShapecolor, data.userTextColor, data.userText)
        return shape.render()
    }

    if(data.shape.includes('square')){
        const shape = new Square(data.userShapecolor, data.userTextColor, data.userText)
        return shape.render()
    }
    return svgContent
}

module.exports = { createSVG };