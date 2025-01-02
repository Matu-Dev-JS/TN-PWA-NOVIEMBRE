class Accion {
    id: number;
    descripcion: string;
    fecha: Date;
    constructor(id: number, descripcion: string, fecha: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    mostrarDetalle(): void {
        console.log(`
            ID:${this.id},
            Descripcion:${this.descripcion},
            Fecha:${this.fecha}`);
    }
}

/* #### 2. Clases Derivadas
 
- **`AccionInicioSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.
 */

class AccionInicioSesion extends Accion {
    dispositivo_origen: string;
    constructor(
        id: number,
        fecha: Date,
        dispositivo_origen: string
    ) {
        super(id, 'Usuario inicio sesion', fecha);
        this.dispositivo_origen = dispositivo_origen;
    }
    mostrarDetalle(): void {
        console.log(`
                ID:${this.id},
                Descripcion:${this.descripcion},
                Fecha:${this.fecha}
                Dispositivo:${this.dispositivo_origen}`
        );
    }
}


class AccionCierreSesion extends Accion {
    dispositivo_origen: string;
    tiempo_sesion: number;
    constructor(
        id: number,
        fecha: Date,
        dispositivo_origen: string,
        tiempo_sesion: number
    ) {
        super(id, 'Cierre sesion', fecha);
        this.dispositivo_origen = dispositivo_origen
        this.tiempo_sesion = tiempo_sesion
    }
    mostrarDetalle(): void {
        console.log(`
                    ID:${this.id},
                    Descripcion:${this.descripcion},
                    Fecha:${this.fecha}
                    Dispositivo:${this.dispositivo_origen}
                    Tiempo de Sesion:${this.tiempo_sesion}
                    `);
    }
}

class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;
    campo: string
    constructor(id_cambio: number, valor_anterior: string, nuevo_valor: string, campo: string) {
        this.id_cambio = id_cambio
        this.valor_anterior = valor_anterior
        this.nuevo_valor = nuevo_valor
        this.campo = campo
    }
    mostrarCambio(): void {
        console.log(`
                    Identificador:${this.id_cambio},
                    Campo: ${this.campo},
                    Valor Anterior:${this.valor_anterior},
                    Nuevo valor: ${this.nuevo_valor}`);
    }
}


class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[] = [];

    constructor(id: number, fecha: Date, cambios: Cambio[], ) {
        super(id, "Actualizar perfil", fecha);
        this.cambios = cambios;
    }
    
    mostrarDetalle(): void {
        console.log(`
                  ID:${this.id},
                  Descripcion:${this.descripcion},
                  Fecha:${this.fecha}
                  Cambios:`);
        this.cambios.forEach((cambio) => cambio.mostrarCambio());
    }
}


class AccionCompra extends Accion {
    productos: string[] = [];
    total: number;
    constructor(
        id: number,
        fecha: Date,
        productos: string[],
        total: number
    ) {
        super(id, 'Usuario compro productos', fecha);
        this.productos = productos 
        this.total = total
    }
    mostrarDetalle(): void {
        console.log(`
                  ID:${this.id},
                  Descripcion:${this.descripcion},
                  Fecha:${this.fecha}
                  Productos: ${this.productos}
                  Total: ${this.total}
                  `);
    }
}
class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;
    constructor(
        id: number,
        fecha: Date,
        destinatario: string,
        mensaje: string
    ) {
        super(id, 'Se envio un mensaje', fecha);
        this.destinatario = destinatario 
        this.mensaje = mensaje
    }
    mostrarDetalle(): void {
        console.log(`
                  ID:${this.id},
                  Descripcion:${this.descripcion},
                  Fecha:${this.fecha}
                  Destinatario: ${this.destinatario}
                  Mensaje: ${this.mensaje}`);
    }
}



class Historial {
    acciones: Accion[] = []
    constructor() {
        this.acciones = [];
    }
    agregarAccion(accion: Accion): void {
        this.acciones.push(accion)
    }
    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter(accion => accion.id !== id);
    }
    eliminarTodo(): void {
        this.acciones = [];
    }
    mostrarHistorial(): void {
        console.log("Historial de acciones:");
        this.acciones.forEach(accion => {
            accion.mostrarDetalle()
        });
    }
}
