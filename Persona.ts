import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
 

  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumpleanios: Date;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: string;

  constructor(
    a: string,
    b: string,
    c: number,
    d: string,
    e: Date,
    f: string,
    g: string,
    h: Direccion[],
    i: Mail[],
    j: Telefono[],
    k: string
  ) {
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
  public get nombre(): string {
    return this._nombre;
  }

  public get apellidos(): string {
    return this._apellidos;
  }

  public get edad(): number {
    return this._edad;
  }

  public get dni(): string {
    return this._dni;
  }

  public get cumpleanios(): Date {
    return this._cumpleanios;
  }

  public get colorFavorito(): string {
    return this._colorFavorito;
  }

  public get sexo(): string {
    return this._sexo;
  }

  public get direcciones(): Direccion[] {
    return this._direcciones;
  }
  public set direcciones(value: Direccion[]) {
    this._direcciones = value;
  }
  public get mails(): Mail[] {
    return this._mails;
  }
  public set mails(value: Mail[]) {
    this._mails = value;
  }
  public get telefonos(): Telefono[] {
    return this._telefonos;
  }
  public set telefonos(value: Telefono[]) {
    this._telefonos = value;
  }
  public get notas(): string {
    return this._notas;
  }
}
