
const alunos = [
    {nome:'João', nota: 7.9},
    {nome: 'Maria', nota:9.2}
]

//Imperativo
let total1 = 0 

for( var i = 0;i<alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)


//Declarativo: Define o que tem que ser feito.

const  getNota = aluno => aluno.nota // pega nota do aluno
const soma = (total,atual) => total + atual // soma 
const  total2 = alunos.map(getNota).reduce(soma)
//Reduce agrega valores
//Map extrai de um objeto
console.log(total2/alunos.length)

//Exemplo SQL
//select codigo, nome from clientes where ativo = 1
