const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop()//Massa sai da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')// colocar no início
console.log(pilotos)


//splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//depois de quantas posições
console.log(pilotos)

//remover
pilotos.splice(3, 1)// o Massa vai sair]
console.log(pilotos)
//slice é pedaço
const algunsPilotos1 = pilotos.sliece(2)// novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)// indice 1 entra e o indice 4 não entra
console.log(algunsPilotos2)
