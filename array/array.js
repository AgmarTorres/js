// interessante fazer os dados serem homogeneos
console.log(typeof Array, typeof new Array, typeof [])


let aprovados =  new Array('Bia', 'Carlos', ' Ana')
console.log(aprovados)

aprovados = [ 'Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
//adicionando novos elementos
aprovados[3]= 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
//false
console.log(aprovados[8] === null)
//true
console.log(aprovados[8] === undefined)
aprovados.sort()// ordena o array
console.log(aprovados)

delete aprovados[1]// deleta o aprovado na posição 1
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//splice inclui ou adiciona 
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')// exclui os dois primeiros e coloca o elemento 1 e o elemento 2
consolelog(aprovados)


