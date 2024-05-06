
//OPERADOR CONDICIONAL TERNARIO
/**
 * El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
 * 
 * SINTAXIS
 * condición ? expr1 : expr2
 */

const Activo = true
// let mensaje= ''

// if (Activo) {
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'
// }
// console.log(mensaje);

//con el operador ternario  true        false
// const mensaje = (Activo) ? 'Activo' : 'Inactivo'
// console.log(mensaje);

//Simplicar aun mas el if, si en caso de no cumplirse siempre va a arrojar falso,
//enronces no es necesario colocar false, o los : , puesto que and && simpre arrojara si la condicion no se cumple
const mensaje = !Activo && 'Activo'
console.log(mensaje);

