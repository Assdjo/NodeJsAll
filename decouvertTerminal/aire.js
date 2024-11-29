const aireCarré = (c) =>`L'aire du carrée est ${c**2}` 
const aireRectangle = (L, l) =>`L'aire du rectangle est ${L*l}`
const aireTriangle = (Base, Hauteur) =>`L'aire du triangle est ${(Base*Hauteur)/2}`
const aireCercle = (rayon) =>`L'aire du cercle est ${ Math.PI*(rayon**2)}`

module.exports = {aireCarré, aireCercle, aireRectangle, aireTriangle}
