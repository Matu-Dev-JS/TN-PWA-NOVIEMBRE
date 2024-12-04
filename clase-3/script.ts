let numero_1 : number = 1
let numero_2 : number = 10
let resultado : number = numero_1 + numero_2

//Tipado estatico

let nombre : string | null | undefined  = 'pepe'
nombre = null

//Any es un tipo de dato que abarca a todos los tipos de datos
let datoAleatorio : any = 1
datoAleatorio = undefined
datoAleatorio = null
datoAleatorio = []

//Typescript infirio o 'entendio' que la edad es un numero (porque le asigne un 20)
let edad = 20


//void = vacio significa que mi funcion NO tiene retorno
const saludar = (nombre : string) : void => {
    console.log('Hola ' + nombre + '!')
}



const obtenerSaludo = (nombre: string) : string => {
    return 'Hola ' + nombre + '!'
}


const obtenerMensajePorId = (id: number) : object | undefined  =>{
    let mensajes : any[]= []
    return mensajes.find(() => {}) //puede retornar mensaje o undefined
}

const funcionX = () : void =>{

}

let resultado2 = saludar('pepe')

console.log(resultado2)

//Funciones

//Objetos

//Arrays

//Inferencia de datos

interface Persona {
    nombre: string,
    edad: number,
    id: number,
    dinero: number
}

const persona : Persona = {
    nombre: 'pepe',
    edad: 50,
    id: 1,
    dinero: 20
}

const persona2 : Persona =  {
    nombre: 'julian',
    edad: 20,
    id: 2,
    dinero: 400
}

const saludarAPersona = (persona : Persona) =>{

}

saludarAPersona({nombre: 'pepe', edad:20, id: 1, dinero: 1})

const nombres_que_no_me_gustan : string[] = ['Pepe', 'Juan', 'Maria']
const notas_del_trimestre : number[] = [1, 4, 7, 10]
const random : any[]= [0, {}, ()=> {}]
const persona4 : [string, number] = ['pepe', 70]
const personas : Persona[] = [] 