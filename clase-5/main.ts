class Vehiculo {
    //Tipamos las propiedades del vehiculo
    marca : string
    precio : number
    modelo : string
    km_por_hora : number
    terreno: string
    anios_antiguedad: number
    precio_original: number

    //Tipamos los parametros de la funcion constructora
    //La funcion constructora recibe los valores para CREAR un nuevo obj
    constructor(
        marca : string, 
        precio : number, 
        modelo : string, 
        km_por_hora : number,
        anios_antiguedad: number 
    ){
        this.marca = marca
        this.anios_antiguedad = anios_antiguedad
        this.precio_original = precio
        this.precio = precio - precio * (0.05 * this.anios_antiguedad)
        this.modelo = modelo
        this.km_por_hora = km_por_hora
        this.terreno = 'TIERRA'
    }

    moverse(horas: number) : void{
        console.log(`El vehiculo ${this.modelo} a recorrido ${horas * this.km_por_hora} km!!`)
    }
}

const renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3)

console.log(renault12)
renault12.moverse(5)


class Bicicleta extends Vehiculo {
    cantidad_ruedas : number = 2
    tipo_freno :  string
    constructor(
        marca: string, 
        precio: number, 
        modelo: string, 
        km_por_hora: number, 
        anios_antiguedad: number,
        tipo_freno: string
    ){
        super(marca, precio, modelo, km_por_hora, anios_antiguedad )
        this.tipo_freno = tipo_freno
    }
}


//Crear la class para hacer empleados
/* 
nombre
sueldo
fecha_contratacion
id_empleado
puesto

presentarse(){} es un metodo que hara una pequeña presentacion del empleado por consola
*/

type Puesto = 'Desarrollo' | 'Diseño' | 'Marketing' | 'PM' | 'RH'

class Empleado {
    nombre : string
    sueldo : number
    fecha_contratacion : Date
    id_empleado :  number
    puesto: Puesto

    constructor( 
        nombre : string,
        sueldo : number,
        fecha_contratacion : Date,
        id_empleado : number,
        puesto: Puesto
    ){
        this.id_empleado = id_empleado
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_contratacion = fecha_contratacion
        this.puesto = puesto
    }
    presentarse() : void{
        console.log(this.fecha_contratacion)
        console.log(`Mi nombre es ${this.nombre} trabajo aca desde el ${
                    (this.fecha_contratacion.getMonth() + 1) 
                    + 
                    '/'
                    + 
                    this.fecha_contratacion.getFullYear()
                }  y mi sueldo es $${this.sueldo}`)
    } 

}

class Pasante extends Empleado {
    tiempo_de_contrato_en_meses : number = 6
    constructor(
        nombre: string,
        sueldo : number,
        fecha_contratacion : Date,
        id_empleado : number,
        puesto : Puesto
    ){
        super(nombre, sueldo, fecha_contratacion, id_empleado, puesto )
    }

    hacerCosasDePasante() : void {
        if (this.puesto == 'Desarrollo') {
            console.log('Git push a produccion');
        } else {
            console.log('Pasante intenta usar impresora')
        }
    }
}
const pasante1 = new Pasante('Pipo', 900000, new Date("2024-12-10"), 8, 'Desarrollo')
console.log(pasante1)


//Crear la class para hacer empleados
/* 
nombre
sueldo
fecha_contratacion
id_empleado
puesto

presentarse(){} es un metodo que hara una pequeña presentacion del empleado por consola
*/


/* 
Crear la clase del pasante (que herede del Empleado) que tendra

nombre
sueldo
fecha_contratacion
id_empleado
puesto
tiempo_de_contrato_en_meses

hacerCosasDePasante()
    Si el puesto es "desarrollador" van a decir por consola 'Git push a produccion'
    Sino van a decir por consola, 'Pasante intenta usar la impresora'
*/


class ManejadorDeEmpleados {
    empleados: Empleado[] = []
    id_counter: number = 0
    id_manejador: number
    constructor (id_manejador : number){
        this.id_manejador = id_manejador
    }

    //Agregar un empleado

    agregarEmpleado(
            nombre: string, 
            sueldo: number, 
            fecha_contratacion: Date,
            puesto: Puesto
    ): void{
        //Creamos el nuevo empleado y le asignamos un id
        const nuevo_empleado = new Empleado(nombre, sueldo, fecha_contratacion, this.id_counter, puesto)

        //Actualizo el contador de id para que en el siguiente empleado no sea el mismo
        this.id_counter = this.id_counter + 1

        //Agrego el empleado a la lista de empleados
        this.empleados.push(nuevo_empleado)
    }

    //Obtener empleado por id (devolvera el empleado encontrado o null en caso de no existir) TIP: usen find 
}

const manejador_empleados_empresa_A = new ManejadorDeEmpleados(1)
const manejador_empleados_empresa_B = new ManejadorDeEmpleados(2)

manejador_empleados_empresa_A.agregarEmpleado('pepe', 2000000, new Date(), 'PM')

/* 
{
    empleados: [],
    id_counter: 0,
    id_manejador: 1
}
*/