/* 
[
    ['x', '0', 'x'], // <- string[]
    ['0','x','0'], // <- string[]
    ['0','', 'x'] // <- string[]
] 
*/

type CellValue = 'X' | '0' | ''  //definimos los tipos de valores que se pueden poner en el juego, para que no ingrese otro valor no deseado

//Creamos una tupla, con el diseño del juego para que no se puedan agregar valores extras en los arrays
//una tupla es es un array, que tiene un limite fijado de longitud
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]


const gameBoard: GameBoard = [
    ['X', '0', 'X'],
    ['0','X','0'],
    ['0','', 'X'] 
]

//tuples ejemplos
//por ejemplo el useState() de react es una tupla

type RGB = [number, number, number]
const rgb: RGB = [255,255,0]