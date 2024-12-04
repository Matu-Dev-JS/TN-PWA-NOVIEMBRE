//Objeto literal
/* const usuario = {
    nombre: 'Pepe',
    edad: 25
}

const usuario_2 = {
    nombre: 'Juan'
}

const usuario_3 = {
    nombre: "Maria",
    age: 50
}
 */
//Cada vez que cree un usuario debo hacerlo de la misma forma

//Me gustaria registrar que es un usuario en mi programa
//Cada vez que invoco a crearUsuario se vuelve a guardar en memoria una funcion
/* function crearUsuario(nombre, edad = null){
    const nuevo_usuario = {
        nombre, 
        edad,
        decirEdad: () =>{
            console.log(`El usuario ${nuevo_usuario.nombre} tiene ${nuevo_usuario.edad} años`)
        }
    }
    return nuevo_usuario
} 
    
const usuario = crearUsuario("Pepe", 25)

const usuario_2 = crearUsuario('Juan', undefined)

const usuario_3 = crearUsuario('Maria', 40)

console.log(usuario, usuario_2, usuario_3)
*/

//Funcion constructora
/* function Usuario(nombre, edad = null){
    this.nombre = nombre
    this.edad = edad

} 

Usuario.prototype.decirEdad = function(){
    console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)
}

//Instanciamos a Usuario
const usuario_1 = new Usuario("Pepe", 25)

usuario_1.decirEdad()

console.log(usuario_1) */



class Usuario {
    //La funcion constructora se invocara al instanciarse la clase
    constructor(nombre, edad = null){

        this.nombre = nombre
        this.edad = edad
    }

    decirEdad(){
        console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)

    }
}

const usuario_1 = new Usuario("pepe", 25)
const usuario_2 = new Usuario("maria", 70)

usuario_1.decirEdad()
usuario_2.decirEdad()

/* 
EJERCICIO:

Empleado
    -nombre: string
    -puesto: string
    -sueldo: number
    -area: string
    -presentarse: funcion(){Decir por consola 'Hola me llamo {nombre}, trabajo como {puesto} en el area de {area} y gano ${sueldo}}
    -obtenerSueldoNeto: funcion(){Debe devolver el sueldo menos el 18% (aportes)}

Crear 3 empleados y por consola verificar que funcionen los metodos

Vehiculo
    -velocidad_en_km_x_hora
    -modelo
    -marca
    -color
    -precio

Bicicleta
    -velocidad_en_km_x_hora
    -modelo
    -marca
    -color
    -precio
    -rodado
    -tipo_de_freno

Auto
    -velocidad_en_km_x_hora
    -modelo
    -marca
    -color
    -precio
    -motor
    -puertas
*/

class Vehiculo {
    constructor( vel_km_x_h , modelo, marca, color, precio ){
        this.vel_km_x_h = vel_km_x_h
        this.modelo = modelo
        this.marca = marca
        this.color = color
        this.precio = precio
    }
    moverse(horas){
        console.log(`Te has movido por ${horas} horas y recorriste ${horas * this.vel_km_x_h}km`)
    }

}

class Bicicleta extends Vehiculo{
    constructor(vel_km_x_h, modelo, marca, color, precio, rodado, tipo_de_freno){  
        //Super es el constructor de la clase que estoy heredando
        super(vel_km_x_h, modelo, marca, color, precio)
        this.rodado = rodado
        this.tipo_de_freno = tipo_de_freno
        this.cantidad_ruedas = 2
    }
    moverse(horas){
        console.log(`Has pedaleado por ${horas} horas y recorriste ${horas * this.vel_km_x_h}km`)
    }
}

class Auto extends Vehiculo{
    constructor(vel_km_x_h, modelo, marca, color, precio, motor, puertas){  
        super(vel_km_x_h, modelo, marca, color, precio)
        this.motor = motor
        this.puertas = puertas
    }
}

const bicicleta_1 = new Bicicleta(10, 'bmx', 'bmx', 'negro', 400000, 28, 'contra-pedal')
const auto_1 = new Auto(200, 'Civic', 'Honda', 'Negro', 8000000, 'valor', 5)


bicicleta_1.moverse(5)
auto_1.moverse(50)