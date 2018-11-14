function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto ={
    nome:'Notebook',
    preco:4501,  
    desc:0.15,
    getPreco
}
global.preco= 30
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 1231, desc: 0.01}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17, '$')) // contexto e os parametros
console.log(getPreco.apply(carro, [0.17, '$']))// passa os dados por um array
