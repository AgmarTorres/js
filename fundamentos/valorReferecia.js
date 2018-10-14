//Atribuição por referência, quando é objetos
const a = {name:'Teste'}
console.log(a)
// b recebe o endereço de a
const b = a
b.nome = "Opa"

//atribuição por parametro



// Tipos primitivos, copia por valor
let c = 3
let d = 3
d++
console.log(c)
console.log(d)