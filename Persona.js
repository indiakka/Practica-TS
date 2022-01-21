"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(a, b, c, d, e, f, g, h, i, j, k) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumpleanios = e;
        this._colorFavorito = f;
        this._sexo = g;
        this._direcciones = h;
        this._mails = i;
        this._telefonos = j;
        this._notas = k;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleanios() {
        return this._cumpleanios;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
}
exports.Persona = Persona;
