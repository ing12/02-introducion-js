//desetrucuturacion de arreglos

const avengers =['Ironman', 'Vision', 'Thor']
//avengers1
const[a1] = avengers
console.log(a1)

//suponiendo que no queremos al avenger1 si no al avenger 2 que es vision, entonce solo colocamos , indicando la posicion 0 y colocando 
//la variable que resibira el el siguiente dato
const [ ,a2] = avengers
console.log(a2)

//Desestructuracion mediante funciones

const useMiState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = useMiState('Ironman');
console.log(nombre);
setNombre()

