//Importar y exportar funciones comunes de arreglos

//1.-Importamos el archivo que contiene un arreglo que tiene por nombre heroes
import {heroes} from './08-Import-Export-arrComunes/data/heroes'//nota, este path es de cuando lo corrias desde el index.js

//2.-imprimimos para verificar que se ha importado el arreglo correctamente
console.log(heroes)


/*
Array.prototype.find()
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.Nota: solo devuelve 1 elemento u objeto
*/
//encontrar heroe por id
const getHeroeById = (valorId)=>{
    return heroes.find((hero) => hero.id === valorId)
    //
}
console.log(getHeroeById(2))

//Explicacion getHeroeById: 
/*
La funcion getHeroeById obtendra el valor del id a buscar(1,2 o 3 ...) como lo vemos en la linea 19, en la que se introduce el valor 2. Dentro de la misma funcion vemos que en la liena 16 se invoca al arreglo de heroes que se importo en la linea 4. A traves del prototype del array herores tenemos a disposicion la funcion FIND. dentro de la funcion find declaramos otra funcion flecha anonima.
Esta recibe como argumento hero, que contiene todos los objetos encontrados por la funcion find.
A traves del retorno hero.id, hacemos la busqueda especifica del valor dado "2" contenido en el argumento findId que se compara con la clave id de cada objeto en hero.
*/

/**
 * 
Array.prototype.filter()
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. Nota: devuelve varios elementos u objetos
 */
//encontrar heroe por propietario
const getHeroeByOwner = (valorOwner)=>{
    return heroes.filter((hero) => hero.owner === valorOwner)
    //
}
console.log(getHeroeByOwner('DC'))
