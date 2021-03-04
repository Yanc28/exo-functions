/* Ecrire une fonction `typeOf` qui prend comme paramètre une variable,
 et qui retourne une string qui sera le nom du type de cette variable passée en paramètre.*/

const typeOf = (myVar) => {
  return typeof myVar
}

console.log(typeOf(1)) // output: 'number'
console.log(typeOf([1, 2, 3])) // output: 'object'
