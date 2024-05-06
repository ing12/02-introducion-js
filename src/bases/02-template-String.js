//USO DE TEMPLATES STRING O BACKTICK/BACK QUOTE ``

const nombre   = 'Pedro';
const apellido = 'Gomez';

//Concatenacion normal
/*
const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
*/

//concatenacion con backtick `` o templateString
const nombreCompleto = `${nombre} ${apellido}`;

//concatenacion con backtick `` o templateString con SALTO DE LINEA
const nombreCompleto2 = `
    ${nombre} 
    ${apellido}
    ${1+1}
    `;
console.log(nombreCompleto, nombreCompleto2)

//MEZCLAR backtick `` o templateString con SALTO DE LINEA Con cocatenacion tradicional a traves de una funcion
function getSaludo(nombre) {
    return 'Hola ' + nombre;//concatenacion normal
}
console.log(`Este es un texto: ${getSaludo('Leslie')}`)//concatenacion con backtict o templateString



