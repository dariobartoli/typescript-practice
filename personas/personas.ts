enum colores {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul',
    Amarillo = 'amarillo'
}

interface Personas {
    nombre: string,
    apellido: string,
    edad: number,
    colorFav: colores,
    trabaja: boolean,
    saldo: number,
    saludar(): void,
    añadirSaldo(monto:number): number
}

class Persona implements Personas{
    nombre: string;
    apellido: string;
    edad: number;
    colorFav: colores;
    trabaja: boolean;
    saldo: number;
    constructor(nombre:string, apellido:string, edad:number, colorFav: colores, trabaja:boolean, saldo:number = 100){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.colorFav = colorFav
        this.trabaja = trabaja
        this.saldo = saldo
    }
    saludar(): void {
        console.log(`Hola mundo, yo soy ${this.nombre}, software developer`);
    };
    añadirSaldo(monto:number): number {
        this.saldo += monto
        return this.saldo
    }
    setNombre(nombre:string){
        this.nombre = nombre
    }
    setApellido(apellido:string){
        this.apellido = apellido
    }
    setEdad(edad:number){
        this.edad = edad
    }
    setTrabaja(trabaja:boolean){
        this.trabaja = trabaja
    }
    setColorFav(colorFav:colores){
        this.colorFav = colorFav
    }
}

const Pedro = new Persona('Pedro', 'Polll', 27, colores.Amarillo, true)
console.log(Pedro);
Pedro.saludar()

Pedro.setApellido("Lopez")
Pedro.setTrabaja(false)
Pedro.setColorFav(colores.Rojo)
Pedro.añadirSaldo(2500)

console.log("-------------CAMBIOS------------");
console.log(Pedro);


