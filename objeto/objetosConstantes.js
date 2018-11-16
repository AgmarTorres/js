// pessoa ->123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome ='Pedro'

console.log(pessoa.nome)

//pessoa <- 456 -> {....}

//pessoa = {nome:'Ana'} vai da erro pois pessoa é uma constante

Object.freeze(pessoa)//congela a pessoa

pessoa.nome = 'Maria'
//Quando se congela um objeto você não pode adicionar mais nenhum atributo, dado, nem mesmo alterar os atributos
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante  = Object.freeze({nome: 'Agmar'})
console.log(pessoaConstante)