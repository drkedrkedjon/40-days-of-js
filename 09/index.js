console.log("Day 09");

// Ok, hoisting de variables es porque primero en Creation context se asigna undefined a var asi que se puede acudir a undefined antes de su declaracion y asignacion de su valor en ejecution context

// De alli la diferencia con let y const ya que a let: se asigna NADA en creation context y un codigo antes no puede acudir a nada (en lugar a undefined) y el const: pues falla porque hay que declarar el valor desde inicio pero actua luego como let tambien.

// Espacio desde linea 1 de codigo hasta declaracion de variable se llama temporaly dead zone.

// En el caso de functiones declarativas hoisting es siempre presente porque en Creation context ya se asigno y creo todo en memoria, a diferencia de variables que se asignan en ejecution context

// En el caso de functiones expresivas, como se trata de una variable, por eso no hay hoisting.
