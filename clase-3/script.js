var numero_1 = 1;
var numero_2 = 10;
var resultado = numero_1 + numero_2;
//Tipado estatico
var nombre = 'pepe';
nombre = null;
//Any es un tipo de dato que abarca a todos los tipos de datos
var datoAleatorio = 1;
datoAleatorio = undefined;
datoAleatorio = null;
datoAleatorio = [];
//Typescript infirio o 'entendio' que la edad es un numero (porque le asigne un 20)
var edad = 20;
//void = vacio significa que mi funcion NO tiene retorno
var saludar = function (nombre) {
    console.log('Hola ' + nombre + '!');
};
var obtenerSaludo = function (nombre) {
    return 'Hola ' + nombre + '!';
};
var obtenerMensajePorId = function (id) {
    var mensajes = [];
    return mensajes.find(function () { }); //puede retornar mensaje o undefined
};
var resultado2 = saludar('pepe');
console.log(resultado2);
//Funciones
//Objetos
//Arrays
//Inferencia de datos
