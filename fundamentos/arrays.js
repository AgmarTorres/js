//Arrays não tem tamanho fixo

const valores = [7.7 , 8.9, 11.1, 12.34]
console.log(valores[0], valores[1])

valores[4] = 10

console.log(valores.length)
//push adiciona novos valores no array

valores.push({id: 3}, false, null, 'teste')
//pop retornar o ultimo valor

console.log(valores.pop())
console.log(valores)
//deleta um valor
delete valores[0]
console.log(valores)

console.log(typeof valores)

