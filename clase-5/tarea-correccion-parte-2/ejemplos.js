class AccionGenerica {
    constructor(id, descripcion, fecha) {
        this.id = id;    
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    mostrarDetalle(){
        console.log(`El usuario hizo ${this.descripcion} a la hora ${this.fecha}`)
    }
}

class AccionInicioSesion extends AccionGenerica {
    constructor(id, fecha, dispositivo_origen){
        this.dispositivo_origen = dispositivo_origen
        super(id, 'inicio sesion', fecha)
    }
    mostrarDetalle(){
        console.log(`El usuario ${this.descripcion} desde el dispositivo ${this.dispositivo_origen} a la hora ${this.fecha} `)
    }
}