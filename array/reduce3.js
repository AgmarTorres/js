// A função reduce possui 5 parametros, um valor acumula na callback, e outro mantém o atual, os outros são: atributo, índice, array
//returne vandadeiro ou falso para ver se são bolsistas
const alunos = [
    {nome: 'João', nota: 7.3, bolsista :false},
    {nome: 'Maria', nota: 9.2, bolsista:true},
    {nome: 'Pedro',nota: 9.8, bolsista:false},
    {nome: 'Ana', nota:8.7, bolsista:true}
]

// 1° Desafio: Todos os alunos são bolsistas?
//2° Desafio: Algum aluno é bolsista?
// meu código
/*
const bolsista = a => a.bolsista == true;

console.log(alunos.map(bolsista))
const todosBolsistas = alunos.map(bolsista).reduce(function( aculumado, atual){
    if(atual){
        return aculumado + 1
    }
    else{
        return aculumado
    }
},0)

console.log("Todos os alunos são bolsistas? ", todosBolsistas == alunos.length )
console.log("Algum aluno é bolsista? ", todosBolsistas >= 1)*/

//Código do curso
//1° Desafio:
const todosBolsistas = (resultado,bolsista) => resultado && bolsista // se o resultado final e o atual for verdadeiros então todos são bolsistas
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//2° Desafio:

const algumBolsista = (resultado, bolsista) => resultado || bolsista  

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))