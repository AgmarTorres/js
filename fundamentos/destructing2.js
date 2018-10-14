const [a] = [10]
console.log(a)
//atribui valores para cada variável
const [n1,,n3,n5,n6 = 0] = [10,7,9,8]

console.log(n1,n3,n5,n5)

const [,[,nota]] = [,[,5, 8]]
console.log(nota)