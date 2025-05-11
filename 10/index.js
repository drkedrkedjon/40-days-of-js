console.log("Day 10");

// 4 types of scopes in JS

// 1. Global scope
// Son variable creadas fuera de bloc o de functiones, osea en el documento mismo. El acceso a estas variables es de cualquier parte del JS. EN el caso de var, se anade a global scope. En el caso de let y const no.
let name = "sasa";

// 2. Function scope
// Variable declarada dentro de una function, accesible solo dentro de la function. EN el caso de var aqui tambien existe solo dentro, da igual global scope.
function sasa() {
  let name = "Sasa";
  return name;
}

// 3. Block scope
// Igual como en function scope pero solo para let y const, var si esta declarado en un forloop block scope si que esta en plan global scope. Vaya lio....
{
  var pepe = "Pepe";
}
console.log(pepe);

// 4. Module scope -  mas tarde

// SCOPE CHAIN
//  JS siempre buscara la variable en el mismo scope y si no lo encuentra, subira pa arriba al scope superior hasta llegar a global scope

// VARIABLE SHADOWING
// Same named variables from diferent scopas are ok becouse la de interior oculta la de exterior, del scope encima
