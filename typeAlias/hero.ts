//union types
type HeroId = `${string}-${string}-${string}-${string}-${string}` //creamos un type con 5 string, formato de crypto.randomUUID
type HeroePowerScale = 'local' | 'planetario' | 'galactico' | 'universo' | 'multiverso'
type Hero = {
    readonly id?: HeroId,  //decimos que la propiedad id sea solo de lectura, esto evita que puedan acceder al id del objeto y tenga un ERROR EN TS, recordar que ts no funciona en ejecución
    name: string,
    age: number,
    isActive?: boolean
    powerScale?: HeroePowerScale
}

let hero: Hero = {
    name: 'spiderman',
    age: 22
}

//tambien podriamos pasar el objeto directamente en el parametro y luego extraer los elementos del objeto
// (hero:Hero): Hero =>
// const {name, age} = hero
const createHero = (name:string, age: number) :Hero => {
    return {
        id: crypto.randomUUID(), //crypto es navito de la plataforma web
        name, 
        age, 
        isActive: true,
    }
}

const ironman = createHero("ironman", 44)
ironman.powerScale = 'galactico'



//template union types

type HexadecimalColor = `#${string}`
//de esta manera podemos comprobar como estabamos guardando los colores, si con # o sin el #

let color1: HexadecimalColor = '#f0f0f0'
/* let color2: HexadecimalColor = 'f0f0f0' */ //en el segundo se va a quejar porque no tiene el #

//intersection types

type VillainBasicInfo = {
    name: string,
    age: number
}
type VillainProperties = {
    readonly id?: HeroId,
    isActive?: boolean,
    powerScale?: HeroePowerScale
}

type Villain = VillainBasicInfo & VillainProperties

const createVillain = (input: VillainBasicInfo) : Villain => {
    const {name, age} = input
    return {
        id: "554-45-45-45-45",
        name,
        age,
        isActive:true,
    }
}

const thanos = createVillain({name: 'Thanos', age: 50})

//type indexing
//reutilizar partes de un tipo

type InfoPersona = {
    name: string
    age: number
    address: {
        country: string
        city: string
    }
}

const addressRandom: InfoPersona['address'] = {
    country: 'argentina',
    city: 'cordoba'
}

//type from value

const address = {
    country: 'Argentina',
    city: 'Cordoba'
}

type Address = typeof address

const addressPersona: Address = {
    country: 'perú',
    city: 'lima'
}


//type from function

function createAddress() {
    return {
        country: 'Argentina',
        city: 'Cordoba'
    }
}

type addressFromFunction = ReturnType<typeof createAddress>