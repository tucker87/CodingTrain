class Segment {
    constructor(x, y, length, angle) {
        this.x = x
        this.y = y
        this.length = length
        this.angle = angle
    }

    endX() {
        return this.x + (this.length * Math.cos(this.angle))
    }

    endY() {
        return this.y + (this.length * Math.sin(this.angle))
    }

    draw(weight, color) {
        stroke(color)
        strokeWeight(weight)
        line(this.x, this.y, this.endX(), this.endY())
    }

    move() {
        if (this.parent) {
            this.x = this.parent.endX()
            this.y = this.parent.endY()
        }
    }

    pointAt(x, y) {
        let dx = x - this.x,
            dy = y - this.y

        this.angle = Math.atan2(dy, dx)
    }

    drag(x, y) {
        this.pointAt(x, y)
        this.x = x - Math.cos(this.angle) * this.length
        this.y = y - Math.sin(this.angle) * this.length
    }
}