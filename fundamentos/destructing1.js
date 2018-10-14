// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

console.log(pessoa.endereco.numero)
//Quer retirar o que
//retire da estrutura o nome e a idade de pessoas e coloque na variável nome ou idade
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n , idade:i} = pessoa
console.log(n, i );

const { sobrenome, bemHumorada =  true} = pessoa
console.log(sobrenome, bemHumorada)

//desestruturando o endereço
const {endereco:{ logradouro:l , numero:nu,cep:ce } } = pessoa
console.log(l,nu,ce)