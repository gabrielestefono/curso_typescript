interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coord: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coord)