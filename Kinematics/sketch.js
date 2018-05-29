let sm
let fr

function setup() {
    createCanvas(600, 600)
    angleMode(DEGREES)
    sm = new SegmentManager(width / 2, height)
    for (let i = 0; i < 500; i++) {
        sm.addSegment(2, radians(-45))
    }
    fr = createP()
}

function draw() {
    background(175)
    sm.dragAndDraw(mouseX, mouseY)
    fr.elt.innerHTML = Math.round(frameRate())
}