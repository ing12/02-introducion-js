//Cuando tenemos un archivo como este que unicamente contiene datos
//para ser exportados entonces no se ocupa: export const heroes = [
//Si no export default heroes al finalizar del arreglo. En dado caso que sea un solo arreglo.
//En caso de que sean mas de uno entonces se coloca export {array1, array2}
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
    {
        id: 6,
        name: 'Wonderwoman',
        owner: 'DC'
    },
];

const owners = ['DC','Marvel']
export  {heroes, owners}