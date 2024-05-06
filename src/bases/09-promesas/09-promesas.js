//PROMESAS
//importamos el finchero
import { getHeroeById, getHeroeByOwner } from './bases/09-promesas/funciones';
/**
 * es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
 * Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.
 
 */
//funcion promesa con los argumentos resuelto y rechazo
const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{  
        console.log('2 segundos después')
        resolve()
    },2000)
})

//THEN, Verifica si la promesa se cumplio
promesa.then(()=>{
    console.log('Then de la promesa')
})

///IMPORTAMOS EL ARRAY DATA Y LAS FUNCIONES DESESTRUCTURADAS QUE MANIPULAN EL DATA
//Mediante promesas
// const promesa2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        const hero = getHeroeById(2)
//        resolve(hero)//respuesta del then
//        reject('No se encontro el Heroe')//respuesta del catch
//     }, );
// })

// //then para esperan respuesta de la promeda y la deposita en resolve() de la linea 27 y CATCH para atrapar el error
// promesa2.then( (hero)=>{
//     console.log('Heroe', hero)
// })
// .catch(error => console.warn(error))

//en este caso declaramos una promesa que directamente se retorna
//la promesa esta contenida dentro de una funcion para poder recibir argumentos
const getHeroeByIdAsync = (idSearch)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(idSearch)
            if (hero === undefined) {
                reject('No se encontro el Heroe')//respuesta del catch
            }else{
            resolve(hero)//respuesta del then
            }
        },1000);
    })       
}

getHeroeByIdAsync(90)
    .then( (hero) => console.log('Heroe', hero))
    .catch((error)=> console.warn(error))
