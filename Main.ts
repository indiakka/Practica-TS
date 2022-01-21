console.log("-----------Iniciamos ejecución del programa-----------");

import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

/*Se creará un módulo principal (main) en el que se utilicen las clases definidas para crear 3 registros de persona y 
mostrarlos en el terminal mediante console.log., utilizando las funciones necesarias definidas en las clases para obtener
 los datos*/

let persona1 = new Persona(
  "Pedro",
  "Palmera",
  45,
  "12345678A",
  new Date("1976/12/19"),
  "Verde",
  "Hombre",
  [new Direccion("Calle Gran Via", 5, 2, "A", 48004, "Bilbao", "Vizcaya")],
  [new Mail("Personal", "pedropalm@hotmail.com")],
  [new Telefono("Personal", 696696696)],
  "Desempleado"
);
console.log(persona1);
let persona2 = new Persona(
  "Maria",
  "Roto",
  20,
  "87654321C",
  new Date("2001/02/06"),
  "Rojo",
  "Mujer",
  [new Direccion("Calle Ronda", 16, 5, "C", 82065, "Sabadell", "Barcelona")],
  [new Mail("Trabajo", "maroto@gmail.com")],
  [new Telefono("Trabajo", 655655655)],
  "Autónomo"
);
console.log(persona2);
let persona3 = new Persona(
  "Lydia",
  "Martin",
  35,
  "65687561B",
  new Date("1986/01/25"),
  "Azul",
  "Mujer",
  [new Direccion("Calle Pinto", 68, 1, "B", 46026, "Valencia", "Valencia")],
  [new Mail("Trabajo", "lydmar@yahoo.es")],
  [new Telefono("Personal", 633663333)],
  "Empleado"
);
console.log( persona3 );

/*Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, 
un nuevo mail y un nuevo teléfono. Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las
 clases. */

console.log("-----------Busqueda de DNI-----------"); 

console.log("El dni en búsqueda es 12345678A")
if (persona1.dni === "12345678A") {
  console.log("El dni pertenece a :",  persona1);
}else if (persona2.dni === "12345678A") {
  console.log("El dni pertenece a :",  persona2);
}else if (persona3.dni === "12345678A") {
  console.log("El dni pertenece a :", persona3);
}else{ 
  console.log("El dni no corresponde a ninguna persona")
}
console.log("-----------Añadir nuevos datos-----------");
if (persona1.dni === "12345678A") {
  
let direccionNueva = [new Direccion("Calle Colon", 89, 8, "C", 48004, "Bilbao", "Vizcaya")];
Object.assign(persona1.direcciones, direccionNueva);

let mailNuevo = [new Mail("personal","palmera@outlook.es")];
Object.assign(persona1.mails, mailNuevo);

let telefonoNuevo = [new Telefono("personal",688965547)];
Object.assign(persona1.telefonos,telefonoNuevo);

}

/*Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola. */

console.log("-----------Datos de la agenda actualizados-----------");

console.log(persona1)
console.log(persona2)
console.log(persona3)

console.log("-----------Finalizamos ejecución del programa-----------");
