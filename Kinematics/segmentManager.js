class SegmentManager {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.lastSegment = null
        this.segments = []
    }

    addSegment(length, angle) {
        let x = this.x,
            y = this.y

        if (this.lastSegment != null) {
            x = this.lastSegment.endX()
            y = this.lastSegment.endY()
        }

        let segment = new Segment(x, y, length, angle)
        segment.parent = this.lastSegment
        this.segments.push(segment)
        this.lastSegment = segment
    }

    draw(index) {
        const weight = map(index, 0, this.segments.length - 1, 0, 10)
        const color = map(index, 0, this.segments.length - 1, 150, 0)
        this.segments[index].draw(weight, color)
    }

    dragAndDraw(x, y) {
        for (let i = this.segments.length - 1; i >= 0; i--) {
            const segment = this.segments[i];
            segment.drag(x, y)
            x = segment.x
            y = segment.y
        }
        for (let i = 0; i < this.segments.length; i++) {
            const segment = this.segments[i];
            this.draw(i)
        }
    }
}