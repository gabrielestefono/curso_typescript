function passCoordinades(coord: { x: number, y: number }) {
    console.log(`X coordinades: ${coord.x}`)
    console.log(`Y coordinades: ${coord.y}`)
}

const objectCoord = { x: 329, y: 500 }

passCoordinades(objectCoord)

const pessoa: { nome: string, sobrenome: string } = { nome: "Gabriel", sobrenome: 'Estéfono' }