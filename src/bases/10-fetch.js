//FETCH API
/**
 * Fetch API
La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una Promise (en-US) que resuelve en Response a esa petición, sea o no correcta. También puede pasar opcionalmente un objeto de opciones init como segundo argumento (ver Request).
 */

//PARA ESTE EJERCICIO VAMOS A SOLICITAR SERVICIOS DE GIPHY developers
/**
 * Giphy es una base de datos en línea y un motor de búsqueda que permite a los usuarios buscar y compartir videos de bucles cortos sin sonido, que se asemejan a archivos GIF animados, propiedad de Shutterstock.
 */

//CREASTE TU CUENTA CON EL CORREO LESLISAB y ese es tu acceso
//1.- accedes a la liga y con tu cuenta previamente creada https://developers.giphy.com/dashboard/
//2.- clic en el menu dashboard y crear app
//3.- seleciiona api en lugar de sdk colocas el nombre de la api en este caso: fetch-api-react
//4.-finalmente te genera un Api Key
//5.- copias y lo guardas en la constante apiKey que esta en la primera linea des este fichero
//6.- posteriormente vas al menu documentacion/GIPHY API/API Enponts/Random Endpoint
//7.- copias y pegas la url en el metodo fetch y lo comparas con la constante apiKey de la linea 23 como ya hace el llamado a la base de datos del servidor giphy. Esto se hizo en la linea 25
//8.- testeo en la web para ver si conecta https://api.giphy.com/v1/gifs/random?api_key=YIpwR4yNljYLpkIIrURk254pCAuIrNLi

const apiKey = 'YIpwR4yNljYLpkIIrURk254pCAuIrNLi'
//se agrefga a la url el signo de interrogacion ? para que sepa que vamos a agregar una clve en este con el valor apiKey
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//como fetch devuelve una promesa, entonces podemos utilizar los metodos then, catch y finally

// request//el metodo json retorna el objeto en forma de json y a su vez una promesa
//     .then((response)=>console.log(response))//esto me retorna todo el objeto de la bd giphy

// request
//     .then( response => response.json() )
//     //entonces este segundo then ya no es de fetch si no de json
//     .then( data => { console.log(data) })//aplico desestrucutracion {} y asi solo obtengo los datos del objeto
    
//     .catch(console.warn)//cacha ambos then o promesas

//dentro de data viene otro objeto data y luego otro images/original y finalmente una url de una imagen
// request
//     .then( response => response.json() )
//     .then( data => { console.log(data.data.images.original.url) })//contue profundizando el objeto
//     .catch(console.warn)

//tambien podemos aplicar la desetrucuturacion en el argumento de la funcion flecha
// request
//     .then( response => response.json() )
//     .then( ({ data }) =>  console.log(data.images.original.url) )

//podemos ocupar dom y crear una imagen
request
    .then( response => response.json() )
    .then( ({ data }) =>  {
        const { url } =  data.images.original 

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(console.warn)
