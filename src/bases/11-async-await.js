//Async - Await
/**
 * La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.
 * 
 * Un objeto AsyncFunction, que representa una función asíncrona que ejecuta el código contenido dentro de la función.
 * 
 * Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. 
 * 
 * Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
 */

// const getImagen = async () => {
//     return 'htps://1234.com' 
// }
// getImagen().then( console.log )

//VAMOS A RECREAR EL MISMO LLAMADO DE FETCH API CON PROMESAS PERO AHORA CON FUNCIONES ASINCRONAS

//Mandamos a traer la bd de Giphy  y su llave


//creamos la funcion asincrona, donde las promesas de fetch y json se antepondran un await
//que cumplira la funcion de esperar la respuesta de la promesa, como si fuera el METODO THEN
// const getImagen = async ()=>{
//     const apiKey   = 'YIpwR4yNljYLpkIIrURk254pCAuIrNLi'
//     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     const data     = await response.json()
//     console.log(data)
// }
// getImagen()

//Hacemos lo mismo que anteriormente pero ahora dibujando la imagen
// const getImagen = async ()=>{
//     const apiKey   = 'YIpwR4yNljYLpkIIrURk254pCAuIrNLi'
//     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     const {data}     = await response.json()
//     const { url } =  data.images.original //sacaste la img del objeto bd fetch
//     const img = document.createElement('img')
//           img.src = url
//     document.body.append(img)
// }
// getImagen()

//MANEJO DE ERRORES CON TRY CATCH
const getImagen = async ()=>{
    try {
     const apiKey   = 'YIpwR4yNljYLpkIIrURk254pCAuIrNLi'
     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
     const {data}     = await response.json()
     const { url } =  data.images.original //sacaste la img del objeto bd fetch
     const img = document.createElement('img')
           img.src = url
     document.body.append(img)
    } catch (error) {
         //manejo de errores
         console.log(error);
    }
 }
 getImagen()