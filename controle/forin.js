const notas =[6, 7 , 9.8, 1, 8.6]
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = { 
    nome: 'Ana',
    sobrenome: ' Silva',
    idade: 29,
    peso: 64
}
for (let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`);
}