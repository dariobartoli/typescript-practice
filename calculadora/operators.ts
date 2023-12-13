export const suma = (a:number, b:number):number =>  {
    return a+b
}
export const resta = (a:number, b:number):number =>  {
    return a-b
}
export const multiplicar = (a:number, b:number):number =>  {
    return a*b
}
export const dividir = (a:number, b:number):number =>  {
    if(b===0){
        throw new Error("no es posible dividir por 0")
    }
    let result = parseFloat((a/b).toFixed(2))
    return result
}
const operaciones = ['multiplicar', 'sumar', 'dividir', 'restar']
export const calculadora = (operacion: string, a:number, b:number):string => {
    if(!operaciones.includes(operacion)){
        throw new Error('la calculadora no soporta esta operacion')
    }
    if(operacion === 'multiplicar'){
        return `El resulatado de multiplicar ${a} con ${b} es: ${multiplicar(a,b)}`
    }
    if(operacion === 'sumar'){
        return `El resulatado de sumar ${a} con ${b} es: ${suma(a,b)}`
    }
    if(operacion === 'restar'){
        return `El resulatado de restar ${a} con ${b} es: ${resta(a,b)}`
    }
    if(operacion === 'dividir'){
        return `El resulatado de dividir ${a} con ${b} es: ${dividir(a,b)}`
    }
    throw new Error('NO Fue posible realizar la operacion')
}


