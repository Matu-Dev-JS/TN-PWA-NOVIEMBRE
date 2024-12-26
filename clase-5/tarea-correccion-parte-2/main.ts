class Accion {
    id: number;
    descripcion: string;
    fecha: Date;

    constructor(
        id: number,
        descripcion: string,
        fecha: Date
    ) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    mostrarDetalle() {
        console.log(this.id, this.descripcion, this.fecha);
    }
}

class AccionInicioSesion extends Accion {
    dispositivo_origen: string;
    constructor(
        id: number,
        descripcion: string,
        fecha: Date,
        dispositivo_origen: string
    )   {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Dispositivo:", this.dispositivo_origen);
    }
}


class AccionCierreSesion extends Accion {
    dispositivo_origen: string;
    tiempo_de_sesion: number;
    constructor(
        id: number,
        description: string,
        fecha: Date,
        dispositivo_origen: string,
        tiempo_de_sesion: number
    ) {
        super(id, description, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Dispositivo:", this.dispositivo_origen);
        console.log("Tiempo de sesion:", this.tiempo_de_sesion, "minutos");
    }
}

class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];
    constructor(
        id: number,
        description: string,
        fecha: Date,
        cambios: Cambio[]
    ){
        super(id, description, fecha);
        this.cambios = cambios;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Cambios:");
        this.cambios.forEach(cambio => cambio.mostrarCambio());
    }
}

class Cambio {  
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;

    constructor(
        id_cambio: number,
        valor_anterior: string,
        nuevo_valor: string
    ) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }

    mostrarCambio() {
        console.log("Cambio numero", this.id_cambio);
        console.log("Valor anterior:", this.valor_anterior);
        console.log("Nuevo valor:", this.nuevo_valor);
    }
}

class AccionCompra extends Accion {
    productos: string[];
    total: number;
    constructor(
        id: number,
        description: string,
        fecha: Date,
        productos: string[],
        total: number,
        ) {
        super(id, description, fecha);
        this.productos = productos;
        this.total = total;
    }   
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Productos comprados:", this.productos);
        console.log("Total:", this.total);
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;
    constructor(
        id: number,
        description: string,
        fecha: Date,
        destinatario: string,
        mensaje: string
    ) {
        super(id, description, fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log("Destinatario:", this.destinatario);
        console.log("Mensaje:", this.mensaje);
    }   
}

class Historial {
    acciones: Accion[];
    constructor() {
        this.acciones = [];
    }
    agregarAccion(accion: Accion): void {
        this.acciones.push(accion);
    }
    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter(accion => accion.id !== id);
    }
    eliminarTodo(): void {
        this.acciones = [];
    }
    mostrarHistorial(): void {
        if (this.acciones.length === 0) {
            console.log("El historial está vacío.")
        } else {
            console.log("Historial de acciones:")
            this.acciones.forEach((accion) => accion.mostrarDetalle())
        }
    }
}

const historial = new Historial()

const accion1 = new AccionInicioSesion(1, "Usuario inicio de sesion", new Date(), "PC")
const accion2 = new AccionActualizacionPerfil(2, "Usuario actualizo su perfil", new Date(), [new Cambio(1, "correo@gmail.com", "correo@outlook.com"), new Cambio(2, "1234", "5678")])
const accion3 = new AccionCierreSesion(3, "Usuario cerro sesion",new Date(),"PC", 30)
const accion4 = new AccionCompra(4, "Usuario realizo una compra", new Date(), ["Laptop", "Raton"], 1500)
const accion5 = new AccionEnvioMensaje(5, "Usuario envio un mensaje", new Date(), "admin@example.com", "Hola, necesito ayuda con mi cuenta")

historial.agregarAccion(accion1)
historial.agregarAccion(accion2)
historial.agregarAccion(accion3)
historial.agregarAccion(accion4)
historial.agregarAccion(accion5)

historial.mostrarHistorial()
historial.eliminarAccionPorID(4)
console.log("Tras eliminar la accion de id 4 ")
historial.mostrarHistorial()

historial.eliminarTodo()
console.log("Tras eliminar todo el historial: ")
historial.mostrarHistorial()