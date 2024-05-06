//OBJETOS LITERALES
//todo objeto creado en js tiene un Prototype que contiene sus atributos como getters y setters etc
const persona = {
    nombre:'Luis',
    apellido:'Cruz',
    edad:29, 
    direccion:{
        estado:'Puebla',
        ciudad:'V.Carranza',
        cp:73049
    }
};
console.log(persona)//impresion de las propiedades del objeto
//console.log({persona})//impresion de las propiedades del objeto mas el nombre del propio objeto.
//console.table(persona)//impresion de las propiedades del objeto en forma de tabla

//**CREAR UNA COPIA DEL OBJETO PERSONA PARA CREAR UNA PERSONA2 INDICANDO LA COPIA MEDIANTE ...
const persona2 ={...persona}
persona2.nombre='Sonia'
persona2.apellido='Jimenez'
persona2.edad=20
persona2.direccion.estado='Veracruz'
console.log(persona2)

