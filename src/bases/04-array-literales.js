//arreglos LITERALES
//OPERADOR SPREAD ...
//permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos

const arreglo = [1,2,3,4];

//modifica todo el arreglo, lo vuelve a reescribir completamente solo para agregar el nuevo elemento
arreglo.push(5)

//expandir el arreglo, es decir, solo copia el arreglo referido, agrega el nuevo elemento y lo almacena en arreglo2
let arreglo2 = [...arreglo,6]

console.log(arreglo)
console.log(arreglo2)

/* Array.prototype.map()
El método map() de prot crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

En otras palabras hace lo mismo que SPREAD pero mediante el metodo map()
*/

const arreglo3 = arreglo2.map(function (elemento) {
    return 'newElemento'
})
console.log(arreglo3)//crea un nuevo elemento a partir del numero de posiciones del arreglo2 o al que haga referencia

//Si esto creamos una operacion, ejemplo multiplicacion, creara un nuevo elemento del producto de la posicion * la constante que asignemos, ejemplo:
const arreglo4 = arreglo2.map(function (elemento) {
    return elemento * 1
})
console.log(arreglo4)


