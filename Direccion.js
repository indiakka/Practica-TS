"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(a, b, c, d, e, f, g) {
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._codigoPostal = e;
        this._poblacion = f;
        this._provincia = g;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = value;
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = value;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(value) {
        this._poblacion = value;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = value;
    }
}
exports.Direccion = Direccion;
