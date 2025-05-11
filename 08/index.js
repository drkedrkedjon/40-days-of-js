console.log("Day 08");

// Execution context

// CREATION FASE
// Lexicon Context es donde esta mi codigo escrito en el documento .js cargado en navegador

// Global Execution Context es entorno creado por motor de JS. Incluyendo si no hay ni una linea de codigo escrito de JS, motor de JS crea window con sus propiedades y metodos() y tambien el contexto THIS.

// THIS context es WINDOW (this === window => true) no porque son del mismo type sino porque apuntan a mismo registro en la memoria.

// Anadiendo codigo a .js se aasigna memoria para todas las variables y functiones

// Las variables se inicialisan con valod = undefined

//  El cuerpo de functiones se guarda directamente en memoria

// EXECUTION FASE
// Se asignan valores a las variables

// FUNCTION EXECUTION CONTEXT contexto de ejecucion de functiones

// Se asignan valores a las varables

// Para functiones solo se crea si en la fase inicial hemos llamado o ejecutado una function, si no no se crea.

// Se crea un de estos contextos por cada function ejecutada

//  Primero hay creation fase donde se asigna memoria por cada variable interna de esta function y se le asigna undefined

//  EN exsecution fase, si hay medodos o functiones se crea un nuevo contexto de execition y asi sin fin hasta final. LA misma cosa se repite. Variables undefined in creation context y new execution context por cada funcion dentro

// HAY DOS TIPOS DE MEMORIA, STACK CUAL RECIBE VARIABLES Y VALORES PRIMITIVOS DE LAS MISMAS Y NOMBRE DE FUNCTIONES. EL SEGUNDO TIPO ES HEAP: ALLI SE GUARDAN VALORES DE FUNCTIONES Y OTROS VALORES COMPLEJOS COMO OBJECTOS Y ARRAYS.
