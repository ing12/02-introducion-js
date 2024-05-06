//funciones

//esta funcion tradicional, su desventaja es que su contenido puede ser reasignado o modificado
function saludar(nombre) {
    return `Hola, ${nombre}`
}
saludar=20
console.log(saludar)//ejemplo, en la linea 7 reasignamos otra instruccion y la salida ya no es una cadena si no un entero

//en el caso de las funciones anonimas y de flecha eso no es posible, ejemplo:
const saludar2 = function (nombre) {
    return `Hola, ${nombre}`
}

//saludar2=20
//console.log(saludar2)//manda un error de sintaxis, que no se puede reasiganr un nuevo valor a la var porque es una constate

//sucede lo mismo con la funcion flecha
const saludar3 = (nombre)=>{ 
    return `Hola, ${nombre}`
}

//saludar3=23
//console.log(saludar3)


//cuando las funciones solo van a arrojar un return, siempre es mejor declararlas de la sig, manera:
const saludar4 = ()=> `Hola mundo`
console.log(saludar4())

//A estas funciones se les conoce como funciones sin cuerpo {} porque implicitamente van a devolver algo sin la palabra reservada return
//en el ejemplo de arriba es una cadena pero en el caso de que enviemos algo mas complejo como un objeto, se debe colocar los parentesis ()
//automaticamente la funcion retornara lo que este contenido en ellos

const getUser =()=> ({
    idUser:'ABC123',
    userName: 'El_panquesito'
})
console.log(getUser())
//En esta versión, como no hay un bloque de cuerpo y solo hay una expresión, se asume que el valor de esa expresión se devuelve automáticamente.
//Esta forma a menudo se utiliza para funciones simples que devuelven directamente JSX sin lógica adicional (REACT).

//Tarea del curso 
//1. Transformar la funcion en una funcion flecha
//2. Tiene que retornar un objeto implicito
function getUserActive(nombre) {
    return{
        idUser:'ABC123',
        userName: nombre
    } 
}
console.log(getUserActive('El_panquesito'))

//**********  solucion
const getUserActive2 =(nombre)=>({
    idUser:'ABC123',
    userName: nombre
})
console.log(getUserActive('El_nuevo_panquesito'))