//Importar y exportar funciones comunes de arreglos

import {heroes} from './data/heroes'

export const getHeroeById = (valorId)=>{
    return heroes.find((hero) => hero.id === valorId)
}

export const getHeroeByOwner = (valorOwner)=>{
    return heroes.filter((hero) => hero.owner === valorOwner)
}

 