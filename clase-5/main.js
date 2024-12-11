var Vehiculo = /** @class */ (function () {
    //Tipamos los parametros de la funcion constructora
    //La funcion constructora recibe los valores para CREAR un nuevo obj
    function Vehiculo(marca, precio, modelo, km_por_hora, anios_antiguedad) {
        this.marca = marca;
        this.anios_antiguedad = anios_antiguedad;
        this.precio_original = precio;
        this.precio = precio - precio * (0.05 * this.anios_antiguedad);
        this.modelo = modelo;
        this.km_por_hora = km_por_hora;
        this.terreno = 'TIERRA';
    }
    Vehiculo.prototype.moverse = function (horas) {
        console.log("El vehiculo ".concat(this.modelo, " a recorrido ").concat(horas * this.km_por_hora, " km!!"));
    };
    return Vehiculo;
}());
var renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3);
console.log(renault12);
renault12.moverse(5);
//Crear la class para hacer empleados
/*
nombre
sueldo
fecha_contratacion
id_empleado

presentarse(){} es un metodo que hara una pequeña presentacion del empleado por consola
*/
var Empleado = /** @class */ (function () {
    function Empleado(nombre, sueldo, fecha_contratacion, id_empleado) {
        this.id_empleado = id_empleado;
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
    }
    Empleado.prototype.presentarse = function () {
        console.log(this.fecha_contratacion);
        console.log("\n            Mi nombre es ".concat(this.nombre, " trabajo aca desde el ").concat((this.fecha_contratacion.getMonth() + 1)
            +
                '/'
            +
                this.fecha_contratacion.getFullYear(), "  y mi sueldo es $").concat(this.sueldo));
    };
    return Empleado;
}());
var empleado1 = new Empleado('Lionel', 750000, new Date('2022-06-25'), 1);
empleado1.presentarse();
