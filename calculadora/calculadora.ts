import {calculadora} from './operators'


const number1 :number = Number(process.argv[2])
const number2 :number = Number(process.argv[3])
const operacion :string = process.argv[4]

if(process.argv.length !==5){
    /* throw new Error("hay que mandar 2 numeros y la operacion a realizar: [sumar, dividir, restar, multiplicar]") */
    console.log("hay que mandar 2 numeros y la operacion a realizar: [sumar, dividir, restar, multiplicar]");
    process.exit(0)
}

if(isNaN(number1) && isNaN(number2)){
    console.log("Error, no estás pasando correctamente los números");
    process.exit(0)
}


console.log(calculadora(operacion, number1, number2));

