let isAtivo = false;

console.log(isAtivo);

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
//todos os número são verdadeiros exceto o 0

//CASOS DE TRUE

console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Casos de false

console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = '';
//caso não seja válido use isso como padrão
console.log(nome || 'Desconhecido')
