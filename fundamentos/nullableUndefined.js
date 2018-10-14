let valor //não inicializada

console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//valor.toString()// ão pode acessar algo que é nulo !! Erro!

const produto = {}
console.log(produto.preco)// preço não está definido

produto.preco = 1234
console.log(produto.preco)

produto.preco = undefined
console.log(produto.preco)

produto.preco = null

console.log(!! produto.preco)
console.log(produto)