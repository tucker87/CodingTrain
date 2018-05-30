import regression from './regression.js'

let points = []

const sketch = (p5) => {

    p5.setup = () => {
        let canvas = p5.createCanvas(600, 600)
        canvas.mouseReleased(mouseReleased)
    }

    p5.draw = () => {
        p5.background(150)



        let ys = regression.predict([-1, 1])
        const y1 = denormalizeY(ys[0])
        const y2 = denormalizeY(ys[1])

        p5.stroke(0)
        p5.line(-1, y1, p5.width, y2)


        if (points.length > 0) {
            regression.train(points.map(p => p.x), points.map(p => p.y))

            for (let i = 0; i < points.length; i++) {
                const point = points[i]
                const x = denormalizeX(point.x)
                const y = denormalizeY(point.y)
                p5.stroke(255)
                p5.ellipse(x, y, 8)
            }
        }
    }

    const mouseReleased = () => {
        const x = normalizeX(p5.mouseX)
        const y = normalizeY(p5.mouseY)
        console.log(x)
        console.log(y)
        points.push({ x, y })
    }

    const normalizeX = x => p5.map(x, 0, p5.width, -1, 1)
    const normalizeY = y => p5.map(y, 0, p5.height, 1, -1)
    const denormalizeX = x => p5.map(x, -1, 1, 0, p5.width)
    const denormalizeY = y => p5.map(y, 1, -1, 0, p5.height)
}

export default sketch