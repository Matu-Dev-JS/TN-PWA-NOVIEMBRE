/* 
# Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en TypeScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

## Objetivo

- **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
- **Usar métodos avanzados de arrays** como filter, find, y findIndex para gestionar el historial.
- **Aplicar conceptos de POO** como clases, objetos, métodos.

## Tareas

1. **Definir una clase Historial**:
   - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
   - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.

2. **Crear una clase Accion**:
   - Cada acción será representada por una instancia de la clase Accion.
   - Esta clase tendrá propiedades para id, descripcion y fecha, nombre.

3. **Crear métodos en la clase Historial**:
   - **agregarAccion(accion)**: Método para agregar una nueva acción al historial.
   - **eliminarAccionPorID(id)**: Método para eliminar una acción específica del historial usando su ID.
   - **eliminarTodo()**: Método para eliminar todas las acciones del historial.
   - **mostrarHistorial()**: Método para mostrar en la consola todas las acciones en el historial.

## EJEMPLOS

HISTORIAL {
   accion_id_counter: 0,
   acciones: [] // Array de acciones
}

Accion {
   id,
   descripcion,
   fecha,
   nombre
}
*/

class Accion {
    id: number
    descripcion: string
    fecha: Date
    nombre: string

    constructor(id: number, descripcion: string, fecha: Date, nombre: string){
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
        this.nombre = nombre
    }
    
}

class Historial{
    lista_acciones : Accion[] = []
    id_contador : number = 0
    id_historial : number

    constructor(id_historial : number){
        this.id_historial = id_historial
    }

    agregarAccion(descripcion: string, fecha: Date, nombre: string){
        const nueva_accion = new Accion(this.id_contador, descripcion, fecha, nombre)
        this.id_contador += 1 
        this.lista_acciones.push(nueva_accion)
    }

    eliminarAccionPorID(id_buscado: number){
        const posicion_accion_buscada = this.lista_acciones.findIndex((accion_buscada) => accion_buscada.id === id_buscado)

        if(posicion_accion_buscada !== -1){
            const accion_buscada = this.lista_acciones[posicion_accion_buscada]
            this.lista_acciones.splice(posicion_accion_buscada, 1)
            return accion_buscada
        }
        else{
            console.log('Ese id de Accion no EXISTE')
            return null
        }
    }

    eliminarHistorial(){
        this.lista_acciones = []
    }

    mostrarHistorial(){
        console.log(this.lista_acciones)
    }
}

const accion_1 = new Historial(1)

accion_1.agregarAccion('Mandar Mensaje', new Date(), 'Agustin')
accion_1.agregarAccion('Responder Mensaje', new Date(), 'Nicolas')
accion_1.agregarAccion('Visto', new Date(), 'Agustin')


accion_1.mostrarHistorial()

accion_1.eliminarAccionPorID(2)
accion_1.eliminarAccionPorID(4)

console.log('HISTORIALL ACTUALIZADO Eliminando por ID')
accion_1.mostrarHistorial()


accion_1.eliminarHistorial()
console.log('HISTORIALL ACTUALIZADO VACIO')
accion_1.mostrarHistorial()