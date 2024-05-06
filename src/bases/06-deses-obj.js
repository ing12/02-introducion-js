//DESESTRUCUTRACION DE OBJETOS!! O ASIGNACI[ON DESESTRUCTURANTE
/**
 * La desestructuración
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
 */

const persona = {
    nombre:'Tony',
    edad:35,
    clave:'Ironman'
}

console.log(persona.nombre, persona.edad, persona.clave)//objeto, accedido de manera estructurada

//Ejemplo de desestructuración
const {nombre, edad, clave} = persona
//console.log(nombre,clave)//ya podemos acceder solo a las claves porque en la linea 16 ya desestructure y puedo accder solo al elemento que deseo


//desestrucuturacion con una funciion, en la linea 25, mando el objeto que se va a desestructurar
const returnPersona = ({nombre,edad,equipo='avengers'})=>{//podemos agregar nuevos elementos, vacios o por default como equipo:'avengers'
    console.log(nombre, edad, equipo)
}

returnPersona(persona)//mando el objeto, y en la linea 21 lo espera una desestructuracion. esto es exatamente lo mismo que en la línea 16


//desestrucuturar un objeto contenido dentro de otro objeto

//objeto(habilidades) contenido dentro de otro objeto
const persona2 = {
    nombre:'Tony',
    edad:35,
    clave:'Ironman',
    habilidades:{
        volar:'Si',
        superFuerza:'No',
        categoria:'Tecnologia'
    }
}
const userContext = ({nombre,edad,habilidades:{volar, categoria}})=>{
    console.log(nombre, edad, volar,categoria)
}

userContext(persona2)
